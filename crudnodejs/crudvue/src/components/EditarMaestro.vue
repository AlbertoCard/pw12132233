<template>
    <div class="EditarMestro">
        Datos del maestro 
        <br/>
        <label for="txtnombre">Nombre del maestro</label>
        <input 
            type="text" 
            name="txtnombre" 
            id="txtnombre" 
            v-model="maestros.nombre"
            class="form-control"/>
        <br/>
        <label for="Departamento">Departamento:</label>
        <input 
            type="text" 
            name="Departamento" 
            id="Departamento" 
            v-model="maestros.departamento"
            class="form-control"/>
        <br/>
        <label for="txtdestatus">Estatus del maestro</label>
        <input 
            type="text" 
            name="txtdestatus" 
            id="txtdestatus" 
            v-model="maestros.estatus"
            class="form-control"/>
        <br>
        <button @click.prevent="actualizarMaestro()" class="btn btn-primary btn-lg">
            Actualizar informacion
        </button>
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';

export default {
    name: "EditarMestro",
    components: {},
    props: {
        clavemaestro: Number
    },
    data: function() {
        return{
            maestros: []
        };
    },
    created(){
        this.traeDetalle();
    },
    methods:{
        traeDetalle: async function(){
                let m = [];
                await axios
                    .get(URL_DATOS+"/maestros/"+this.clavemaestro)
                    .then(function(response){
                        console.log(response.data[0])
                        m = response.data[0]
                })
                .catch(function(error){
                    console.log(error);
                });
                this.maestros = m;
            },
        actualizarMaestro: async function(){
            const res = await axios.put(URL_DATOS+"/maestros/"+this.clavemaestro,{
                nombre: this.maestros.nombre,
                departamento: this.maestros.departamento,
                estatus: this.maestros.estatus
            });
            console.log(res);
        },
    },
};
</script>
<style>
.EditarMestro{
    margin: 0 auto;
    width: 30%;
    height: 566px;
    padding: 20px;
    background-color: lightgray;
    font-weight: bold;
}
</style>