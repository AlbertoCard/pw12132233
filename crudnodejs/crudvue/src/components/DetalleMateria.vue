<template>
    <div class="DetalleMateria">
        Clave de la materia: {{ clave  }}
        <br>
        Nombre: {{ materias.nombre }}
        <br>
        Carrera: {{ materias.carrera }}
        <br>
        Estatus: {{ materias.estatus }}
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';

export default {
    name: "DetalleMateria",
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
    },
};
</script>