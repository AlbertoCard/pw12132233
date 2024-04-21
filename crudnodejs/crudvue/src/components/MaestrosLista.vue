<template>
    <div class="MaestrosLista">
        <button @click.prevent="nuevoMaestro()" class="btn btn-success btn-lg" id="nuevo">Agregar maestro</button>
        <table class="table table-striped">
            <thead>
                <th>Clave</th>
                <th>Nombre</th>
                <th>Departamento</th>
                <th>Estatus</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="maestro in maestros" :key="maestro.clavemaestro">
                    <td>
                        <a href="" @click.prevent="detalleMaestro(maestro.clavemaestro)">{{ maestro.clavemaestro }}</a>
                    </td>
                    <td>{{ maestro.nombre }}</td>
                    <td>{{ maestro.departamento }}</td>
                    <td>{{ maestro.estatus }}</td>
                    <td>
                        <button @click.prevent="editarMaestro(maestro.clavemaestro)" class="btn btn-primary">Editar</button>
                        <button @click.prevent="eliminarMaestro(maestro.clavemaestro)" class="btn btn-danger">Eliminar</button> 
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
        name: "MaestrosLista",
        data(){
            return{
                maestros: []
            }
        },
        created(){
            this.traeMaestros();
        },
        methods:{
            traeMaestros: async function(){
               let m = [];
               await axios.get(URL_DATOS+"/maestros")
               .then(function(response){
                 console.log(response.data)
                 m = response.data
               })
               this.maestros = m
            },
            detalleMaestro: function(clavemaestro){
                this.$router.push({name: 'DetalleMaestro', params: {clavemaestro: clavemaestro}})
            },
            editarMaestro: function(clavemaestro){
                this.$router.push({name: 'EditarMaestro', params: {clavemaestro: clavemaestro}})
            },
            eliminarMaestro: async function(clavemaestro){
                const res = await axios.delete(URL_DATOS+"/maestros/"+clavemaestro)
                this.traeMaestros();
                console.log(res);
            },
            nuevoMaestro: function(){
                this.$router.push({name:"NuevoMaestro", params: {}});
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