<template>
    <div class="EditarGrupo">
        <h2>Datos del grupo</h2>
        <br>
        <section class="info">
        <label for="txtclavegrupo">Clave Grupo</label>
        <input 
            type="text" 
            name="txtclavegrupo" 
            id="txtclavegrupo" 
            v-model="grupos.clavegrupo" 
            class="form-control"/>
        <br>
        <label for="txtclavemateria">Clave Materia</label>
        <input 
            type="text" 
            name="txtclavemateria" 
            id="txtclavemateria" v-model="grupos.clavemateria" 
            class="form-control"/>
        <br>
        <label for="txtclavemaestro">Clave Maestro</label>
        <input 
            type="text" 
            name="txtclavemaestro" 
            id="txtclavemaestro" 
            v-model="grupos.clavemaestro" 
            class="form-control"/>
        <br>
        <label for="txtlimitealumnos">Limite Alumnos</label>
        <input 
            type="text" 
            name="txtlimitealumnos" 
            id="txtlimitealumnos" 
            v-model="grupos.limitealumnos" 
            class="form-control"/>
        <br>
        <label for="txtinscritos">Inscritos</label>
        <input 
            type="text"
            name="txtinscritos" 
            id="txtinscritos" 
            v-model="grupos.inscritos" 
            class="form-control"/>
        </section>
        <br>
        <section class="horario">
        <label for="txthorariolunes">Horario Lunes</label>
        <input 
            type="text" 
            name="txthorariolunes" 
            id="txthorariolunes" 
            v-model="grupos.horariolunes"
            class="form-control"/>
        <br>
        <label for="txthorariomartes" >Horario Martes</label>
        <input 
            type="text" 
            name="txthorariomartes" 
            id="txthorariomartes" 
            v-model="grupos.horariomartes" 
            class="form-control"/>
        <br>
        <label for="txthorariomiercoles">Horario Miercoles</label>
        <input 
            type="text" 
            name="txthorariomiercoles" 
            id="txthorariomiercoles" 
            v-model="grupos.horariomiercoles" 
            class="form-control"/>
        <br>
        <label for="txthorariojueves" >Horario Jueves</label>
        <input 
            type="text" 
            name="txthorariojueves" 
            id="txthorariojueves" 
            v-model="grupos.horariojueves" 
            class="form-control"/>
        <br>
        <label for="txthorarioviernes" >Horario Viernes</label>
        <input 
            type="text" 
            name="txthorarioviernes" 
            id="txthorarioviernes" 
            v-model="grupos.horarioviernes" 
            class="form-control"/>
        </section>
        <br>
        <br>
        <button @click.prevent="actualizarGrupo()" class="btn btn-primary btn-lg">Actualizar grupo</button>
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';

export default {
    name: "EditarGrupo",
    components: {},
    props: {
        clavegrupo: Number
    },
    data: function() {
        return{
            grupos: []
        };
    },
    created(){
        this.traeDetalle();
    },
    mounted(){

    },
    methods:{
        traeDetalle: async function(){
            let g = [];
            await axios
                .get(URL_DATOS+"/grupos/"+this.clavegrupo)
                .then(function(response){
                    console.log(response.data[0])
                    g = response.data[0]
            })
            .catch(function(error){
                console.log(error);
            });
            this.grupos = g;
        },
        actualizarGrupo: async function(){
            const res = await axios.put(URL_DATOS+"/grupos/"+this.clavegrupo,{
                clavemateria:this.grupos.clavemateria,
                clavemaestro: this.grupos.clavemaestro,
                limitealumnos: this.grupos.limitealumnos,
                inscritos: this.grupos.inscritos,
                horariolunes: this.grupos.horariolunes,
                horariomartes: this.grupos.horariomartes,
                horariomiercoles: this.grupos.horariomiercoles,
                horariojueves: this.grupos.horariojueves,
                horarioviernes: this.grupos.horarioviernes,
            });
            console.log(res);
        },
    },
};
</script>
<style>
.EditarGrupo{
    margin: 0 auto;
    width: 60%;
    height: 100%;
    padding: 20px;
    background-color: lightgray;
    font-weight: bold;
}
.horario{
    display: flex;
    flex-wrap: wrap;
}
.horario label,
.horario input {
    flex: 1 0 20%; 
    margin-bottom: 10px; 
}
.horario label {
    order: 1; 
}
.horario input {
    order: 2; 
}

.info {
  display: flex;
  flex-wrap: wrap;
}
.info label,
.info input {
  flex: 1 0 20%; 
  margin-bottom: 10px; 
}
.info label {
  order: 1; 
}
.info input {
  order: 2; 
}

</style>