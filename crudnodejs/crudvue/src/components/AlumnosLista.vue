<template>
    <div class="AlumnosLista">
        <!-- <button @click.prevent="traeAlumnos()">Generar lista</button> -->
        <button @click.prevent="nuevoAlumno()" class="btn btn-success btn-lg" id="nuevo">Agregar alumno</button>
        <table class="table table-striped">
            <thead>
                <th>No Control</th>
                <th>Nombre</th>
                <th>Carrera</th>
                <th>Estatus</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="alumno in alumnos" :key="alumno.ncontrol">
                    <td>
                        <a href="" @click.prevent="detalleAlumno(alumno.ncontrol)">{{ alumno.ncontrol }}</a>
                    </td>
                    <td>{{ alumno.nombre }}</td>
                    <td>{{ alumno.carrera }}</td>
                    <td>{{ alumno.estatus }}</td>
                    <td class="acciones">
                        <button @click.prevent="editarAlumno(alumno.ncontrol)" class="btn btn-primary">Editar</button>
                        <button @clickprevent="eliminarAlumno(alumno.ncontrol)" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import axios from 'axios';
import { URL_DATOS } from '../utils/constantes'

    export default {
        name: "AlumnosLista",
        components: {},
        data: function() {
            return{
                alumnos: []
            }
        },
        created(){
            this.traeAlumnos();
        },
        methods:{
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
            detalleAlumno: function(ncontrol){
                this.$router.push({name: 'DetalleAlumno', params: {ncontrol: ncontrol}})
            },
            editarAlumno: function(ncontrol){
                this.$router.push({name: 'EditarAlumno', params: {ncontrol: ncontrol}})
            },
            eliminarAlumno: async function(ncontrol){
                const res = await axios.delete(URL_DATOS+"/alumnos/"+ncontrol)
                this.traeAlumnos();
                console.log(res);
            },
            nuevoAlumno: function(){
                this.$router.push({name:"NuevoAlumno", params: {}});
            },
        },
    };
</script>
<style>
div{
    display:inline-block;
    justify-content: center;
    margin-left: 0 auto;
    margin-right: 0 auto;
}
#nuevo{
    display: block;
    margin-left: auto;
    margin-right: 0px;
}
</style>