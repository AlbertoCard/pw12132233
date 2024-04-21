<template>
    <div class="EditarAlumno">
        <h1>Actualizar alumno</h1>
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
        <br/>
        <label for="txtdestatus">Estatus del alumno</label>
        <input 
            type="text" 
            name="txtdestatus" 
            id="txtdestatus" 
            v-model="alumnos.estatus"
            class="form-control"/>
        <br>
        <br>
        <button @click.prevent="actualizarAlumno()" class="btn btn-primary btn-lg">Actualizar informacion</button>
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';

export default {
    name: "EditarAlumno",
    components: {},
    props: {
        ncontrol: Number
    },
    data: function() {
        return{
            alumnos: []
        };
    },
    created(){
        this.traeDetalle();
    },
    mounted(){

    },
    methods:{
        traeDetalle: async function(){
            let a = [];
            await axios.get(URL_DATOS+"/alumnos/"+this.ncontrol)
                .then(function(response){
                    console.log(response.data[0])
                    a = response.data[0]
            })
            .catch(function(error){
                console.log(error);
            });
            this.alumnos = a;
        },
        actualizarAlumno: async function(){
            const res = await axios.put(URL_DATOS+"/alumnos/"+this.ncontrol,{
                nombre: this.alumnos.nombre,
                carrera: this.alumnos.carrera,
                estatus: this.alumnos.estatus
            });
            console.log(res);
            this.$router.push({name: 'AlumnosLista', params: {}})
        },
    },
};
</script>
<style>
.EditarAlumno{
    margin: 0 auto;
    width: 30%;
    height: 566px;
    padding: 20px;
    background-color: lightgray;
    font-weight: bold;
}
</style>
