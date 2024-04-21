<template>
    <div class="MateriasLista">
        <button @click.prevent="nuevaMateria()" class="btn btn-success btn-lg " id="nuevo">Nueva materia</button>
        <table class="table table-striped">
            <thead>
                <th>Clave</th>
                <th>Nombre</th>
                <th>Creditos</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="materia in materias" :key="materia.clavematerias">
                    <td>
                        <a href="" @click.prevent="detalleMateria(materia.clavemateria)">{{ materia.clavemateria }}</a>
                    </td>
                    <td>{{ materia.nombre }}</td>
                    <td>{{ materia.creditos }}</td>
                    <td>
                        <button @click.prevent="editarMateria(materia.clavemateria)" class="btn btn-primary">Editar</button>
                        <button @click.prevent = "eliminarMateria(materia.clavemateria)" class="btn btn-danger">Eliminar</button>
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
        name: "MateriasLista",
        data(){
            return{
                materias: []
            }
        },
        created(){
            this.traeMaterias();
        },
        methods:{
            traeMaterias: async function(){
               let m = [];
               await axios.get(URL_DATOS+"/materias")
               .then(function(response){
                 console.log(response.data)
                 m = response.data
               })
               this.materias = m
            },
            detalleMateria: function(clavemateria){
                this.$router.push({name: 'DetalleMateria', params: {clavemateria: clavemateria}})
            },
            nuevaMateria: function(){
                this.$router.push({name: 'NuevoMateria'})
            },
            editarMateria: function(clavemateria){
                this.$router.push({name: 'EditarMateria', params: {clavemateria: clavemateria}})
            },
            eliminarMateria: async function(clavemateria){
                const res = await axios.delete(URL_DATOS + "/materias/" + clavemateria);
                this.traeMaterias();
                console.log(res);
            }
        }
    }
</script>
<style>
#nuevo{
    display: block;
    margin-left: auto;
    margin-right: 0px;
}
</style>