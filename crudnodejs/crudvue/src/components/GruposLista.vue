<template>
    <div class="GruposLista">
        <button @click.prevent="nuevoGrupo()" class="btn btn-success btn-lg" id="nuevo">Nuevo grupo</button>
        <table class="table table-striped">
            <thead>
                <th>Grupo</th>
                <th>Materia</th>
                <th>Maestro</th>
                <th>A. maximos</th>
                <th>A. inscritos</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="grupo in grupos" :key="grupo.clavegrupo ">
                    <td>
                        <a href="" @click.prevent="detalleGrupo(grupo.clavegrupo)">{{ grupo.clavegrupo }}</a>
                    </td>
                    <td>{{ grupo.clavemateria }}</td>
                    <td>{{ grupo.clavemaestro }}</td>
                    <td>{{ grupo.limitealumnos }}</td>
                    <td>{{ grupo.inscritos }}</td>
                    <td>{{ grupo.horariolunes }}</td>
                    <td>{{ grupo.horariomartes }}</td>
                    <td>{{ grupo.horariomiercoles }}</td>
                    <td>{{ grupo.horariojueves }}</td>
                    <td>{{ grupo.horarioviernes }}</td>
                    <td>
                        <button @click.prevent="editarGrupo(grupo.clavegrupo)" class="btn btn-primary">Editar</button>
                        <button @click.prevent = "eliminarGrupo(grupo.clavegrupo)" class="btn btn-danger">Eliminar</button>
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
        name: "GruposLista",
        data(){
            return{
                grupos: []
            }
        },
        created(){
            this.traeGrupos();
        },
        methods:{
            traeGrupos: async function(){
                let g = [];
                await axios.get(URL_DATOS+"/grupos")
                .then(function(response){
                    g = response.data;
                })
                .catch(function(error){
                    console.log(error);
                });
                this.grupos = g;
            },
            detalleGrupo: function(clavegrupo){
                this.$router.push({name: 'DetalleGrupo', params: {clavegrupo: clavegrupo}})
            },
            editarGrupo: function(clavegrupo){
                this.$router.push({name: 'EditarGrupo', params: {clavegrupo: clavegrupo}})
            },
            eliminarGrupo: async function(clavegrupo){
                const res = await axios.delete(URL_DATOS+"/grupos/"+clavegrupo)
                this.traeGrupos();
                console.log(res);
            },
            nuevoGrupo: function(){
                this.$router.push({name:"NuevoGrupo", params: {}});
            },
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