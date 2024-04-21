<template>
    <div class="NuevoMestro">
        <h2>Datos del maestro</h2> 
        <br/>
        <label for="txtclavemaestro">Clave del maestro</label>
        <input 
            type="text" 
            name="txtclavemaestro" 
            id="txtclavemaestro" 
            v-model="maestros.clavemaestro"
            class="form-control"/>
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
        <button @click.prevent="nuevoMaestro()" class="btn btn-primary btn-lg">
            Agregar maestro
        </button>
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';

export default {
        name: "NuevoMestro",
        components:{  },
        data(){
            return{
                maestros: {
                    clavemaestro: '',
                    nombre: '',
                    departamento: '',
                    estatus: ''
                }	
            }
        },
        methods:{
            nuevoMaestro: async function(){
                const res = await axios.post(URL_DATOS+"/maestros/",{
                clavemaestro: this.maestros.clavemaestro,
                nombre: this.maestros.nombre,
                departamento: this.maestros.departamento,
                estatus: this.maestros.estatus
            });
            this.$router.push({name: 'MaestrosLista', params: {}})
            console.log(res);}
        }
};
</script>
<style>
.NuevoMaestro{
    margin: 0 auto;
    width: 30%;
    height: 566px;
    padding: 20px;
    background-color: lightgray;
    font-weight: bold;
}
</style>