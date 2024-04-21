<template>
    <div class="NuevoGrupo">
        <h2>Nuevo Grupo</h2>
        <br>
        <section class="info1">
        <label for="txtclavegrupo">Clave del grupo</label>
        <input 
            type="text" 
            name="txtclavegrupo" 
            id="txtclavegrupo" 
            v-model="grupos.clavegrupo"
            class="form-control"/>
        <br>
        <label for="txtclavematerias">Clave de la materia</label>
        <input 
            type="text" 
            name="txtclavematerias" 
            id="txtclavematerias" 
            v-model="grupos.clavemateria"
            class="form-control"/>
        </section>
        <br>
        
        <section class="info2">
            <label for="txtclavemaestros">Clave del maestro</label>
        <input 
            type="text" 
            name="txtclavemaestros" 
            id="txtclavemaestros" 
            v-model="grupos.clavemaestro"
            class="form-control"/>
        <br>
        <label for="txtlimitealumnos">Limite de alumnos</label>
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
        <label for="txthorariolunes">Lunes</label>
        <input 
            type="text" 
            name="txthorariolunes" 
            id="txthorariolunes" 
            v-model="grupos.horariolunes"
            class="form-control"/>
        <br>
        <label for="txthorariomartes">Martes</label>
        <input 
            type="text" 
            name="txthorariomartes" 
            id="txthorariomartes" 
            v-model="grupos.horariomartes"
            class="form-control"/>
        <br>
        <label for="txthorariomiercoles">Miercoles</label>
        <input 
            type="text" 
            name="txthorariomiercoles" 
            id="txthorariomiercoles" 
            v-model="grupos.horariomiercoles"
            class="form-control"/>
        <br>
        <label for="txthorariojueves">Jueves</label>
        <input 
            type="text" 
            name="txthorariojueves" 
            id="txthorariojueves" 
            v-model="grupos.horariojueves"
            class="form-control"/>
        <br>
        <label for="txthorarioviernes">Viernes</label>
        <input 
            type="text" 
            name="txthorarioviernes" 
            id="txthorarioviernes" 
            v-model="grupos.horarioviernes"
            class="form-control"/>
        <br>
    </section>
    <button @click.prevent="nuevoGrupo()" class="btn btn-primary btn-lg">
            Agregar grupo
        </button>
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';

export default {
    name: "NuevoGrupo",
    components: {},
    data(){
        return {
            grupos: {
                clavegrupo: '',
                clavemateria: '',
                clavemaestro: '',
                limitealumnos: '',
                inscritos: '',
                horariolunes: '',
                horariomartes: '',
                horariomiercoles: '',
                horariojueves: '',
                horarioviernes: ''
            },	
        }
    },
    created(){
        this.traeMateriasClave();
        this.traeMaestrosClave();
    },
    methods:{
        
        nuevoGrupo: async function(){
            const res = await axios.post(URL_DATOS+"/grupos/", this.grupos);
            console.log(res);
            this.$router.push({name: 'GruposLista', params: {}})
        }
    }
}
</script>
<style>
.NuevoGrupo{
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

.info1 {
  display: flex;
  flex-wrap: wrap;
}
.info1 label,
.info1 input {
  flex: 1 0 50%; 
  margin-bottom: 10px; 
}
.info1 label {
  order: 1; 
}
.info1 input {
  order: 2; 
}
.info2 {
  display: flex;
  flex-wrap: wrap;
}
.info2 label,
.info2 input {
  flex: 1 0 33%; 
  margin-bottom: 10px; 
}
.info2 label {
  order: 1; 
}
.info2 input {
  order: 2; 
}
</style>