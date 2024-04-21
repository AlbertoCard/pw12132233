<template>
    <div class="NuevoCarga">
        <br>
        <h1>Nueva Carga</h1>
        <br>
        <section class="alum">
            <label for="txtncontrol">Numero de control</label>
            <select v-model="alumnos.ncontrol" id="selectNControl" @change="actualizarDatosAlumno" class="form-control">
                <option v-for="alumno in alumnos" :key="alumno.ncontrol" :value="alumno.ncontrol">
                    {{ alumno.ncontrol }}
                </option>
            </select>
            <br/>
            <label for="txtnombre">Nombre del alumno</label>
            <input 
                type="text" 
                name="txtnombre" 
                id="txtnombre" 
                v-model="alumnos.nombre"
                class="form-control"/>
            <br/>
            <label for="txtcarrera">Carrrera del alumno:</label>
            <input 
                type="text" 
                name="txtcarrera" 
                id="txtcarrera" 
                v-model="alumnos.carrera"
                class="form-control"/>
            <br>
        </section>





        <section class="info">
            <label for="txtclavegrupo">Clave Grupo</label>
        <input 
            type="text" 
            name="txtclavegrupo" 
            id="txtclavegrupo" 
            v-model="grupos.clavegrupo" 
            class="form-control"/>
        <br>
        <label for="txtclavemateria">Materia</label>
        <input 
            type="text" 
            name="txtclavemateria" 
            id="txtclavemateria" 
            v-model="grupos.clavemateria" 
            class="form-control"
        />
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
            <button @click.prevent="cargar()" class="btn btn-primary btn-lg">
                Cargar
            </button>
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';

export default {
    name: "NuevoCarga",
    components: {},
    props: {
        clavegrupo: Number
    },
    data: function() {
        return{
            grupos: [],
            alumnos: []
        };
    },
    created(){
        this.traeDetalle();
        this.traeAlumnos();
        this.traeMateria();
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
        traeMateria: async function(){
            let m = [];
            await axios
                .get(URL_DATOS+"/materias/"+this.grupos.clavemateria)
                .then(function(response){
                    console.log(response.data[0])
                    m = response.data[0]
            })
            .catch(function(error){
                console.log(error);
            });
            this.materias = m;
        },
        traeAlumnos: async function(){
               let a = [];
               await axios.get(URL_DATOS+"/alumnos")
               .then(function(response){
                 //console.log(response.data)
                 a = response.data
               })
               .catch(function(error){
                 console.log(error)
               });
               this.alumnos = a
            },
            actualizarDatosAlumno: function() {
                const alumnoSeleccionado = this.alumnos.find(alumno => alumno.ncontrol === this.alumnos.ncontrol);
                if (alumnoSeleccionado) {
                    this.alumnos = { ...this.alumnos, ...alumnoSeleccionado };
                }
            },
            cargar: async function(){
                if(this.grupos.inscritos >= this.grupos.limitealumnos){
                    alert("El grupo esta lleno");
                    return;
                }else{
                    this.grupos.inscritos++;
                }
                const res = await axios.put(URL_DATOS+"/grupos/"+this.clavegrupo, {
                    clavegrupo: this.grupos.clavegrupo,
                    clavemateria: this.grupos.clavemateria,
                    clavemaestro: this.grupos.clavemaestro,
                    limitealumnos: this.grupos.limitealumnos,
                    inscritos: this.grupos.inscritos,
                    horariolunes: this.grupos.horariolunes,
                    horariomartes: this.grupos.horariomartes,
                    horariomiercoles: this.grupos.horariomiercoles,
                    horariojueves: this.grupos.horariojueves,
                    horarioviernes: this.grupos.horarioviernes,
                });
                this.$router.push('/cargas');
                console.log(res);
            },
    },
};
</script>
<style scoped>
.NuevoCarga{
    margin: 0 auto;
    width: 80%;
    height: 100%;
    background-color: lightgray;
    font-weight: bold;
    border-radius: 5px;
}
section{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
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
.alumn{
    display: block;
    flex-wrap: wrap;
    width: 80%;
}
button{
    display: block;
margin: auto;
    width: 60%;
}
</style>