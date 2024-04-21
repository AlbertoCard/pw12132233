<template>
    <div class="NuevoMateria">
        Nueva materia
        <br>
        <label for="txtclave">Clave de la materia</label>
        <input 
            type="text" 
            name="txtclave" 
            id="txtclave" 
            v-model="materias.clavemateria"
            class="form-control"/>
        <br>
        <label for="txtnombre">Nombre de la materia</label>
        <input 
            type="text" 
            name="txtnombre" 
            id="txtnombre" 
            v-model="materias.nombre"
            class="form-control"/>
        <br>
        <label for="txtcreditos">Creditos de la materia</label>
        <input 
            type="text" 
            name="txtcreditos" 
            id="txtcreditos" 
            v-model="materias.creditos"
            class="form-control"/>
        <br>
        <label for="txtestatus">Estatus de la materia</label>
        <input 
            type="text" 
            name="txtestatus" 
            id="txtestatus" 
            v-model="materias.estatus"
            class="form-control"/>
        <br>
        <button @click.prevent="nuevaMateria()" class="btn btn-primary btn-lg">
            Agregar materia
        </button>
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';

export default {
    name: "NuevoMateria",
    components: {},
    data(){
        return{
            materias: []
        }
    },
    methods:{
        nuevaMateria: async function(){
            const res = await axios.post(URL_DATOS+"/materias/",{
            clavemateria: this.materias.clavemateria,
            nombre: this.materias.nombre,
            creditos: this.materias.creditos,
            estatus: this.materias.estatus
        });
        this.$router.push({name: 'MateriaLista', params: {}})
        console.log(res);}
    }
}
</script>
<style>
.NuevoMateria{
    margin: 0 auto;
    width: 30%;
    height: 566px;
    padding: 20px;
    background-color: lightgray;
    font-weight: bold;
}
</style>