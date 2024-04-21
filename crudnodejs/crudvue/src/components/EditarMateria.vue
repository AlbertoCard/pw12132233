<template>
    <div class="EditarMateria">
        Datos de la materia
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
        <button @click.prevent="actualizarMateria()" class="btn btn-primary btn-lg">
            Actualizar informacion
        </button>
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';

export default {
    name: "EditarMateria",
    components: {},
    props: {
        clavemateria: Number
    },
    data: function() {
        return{
            materias: []
        };
    },
    created(){
        this.traeDetalle();
    },
    methods:{
        traeDetalle: async function(){
            let m = [];
            await axios
                .get(URL_DATOS+"/materias/"+this.clavemateria)
                .then(function(response){
                    console.log(response.data[0])
                    m = response.data[0]
            })
            .catch(function(error){
                console.log(error);
            });
            this.materias = m;
        },
        actualizarMateria: async function(){
            const res = await axios.put(URL_DATOS+"/materias/"+this.clavemateria,{
                nombre: this.materias.nombre,
                creditos: this.materias.creditos,
                estatus: this.materias.estatus
            });
            console.log(res);
        }
    },
};
</script>
<style>
.EditarMateria{
    margin: 0 auto;
    width: 30%;
    height: 566px;
    padding: 20px;
    background-color: lightgray;
    font-weight: bold;
}
</style>