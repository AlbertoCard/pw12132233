<template>
    <div class="DetalleGrupo">
        <br>
        Clave del maestro: {{ grupos.clavemaestros }}
        <br>
        Limite de alumnos: {{ grupos.limitealumnos }}
        <br>
        Inscritos: {{ grupos.inscritos }}
        <br>
        Horario lunes: {{ grupos.horariolunes }}
        <br>
        Horario martes: {{ grupos.horariomartes }}
        <br>
        Horario miercoles: {{ grupos.horariomiercoles }}
        <br>
        Horario jueves: {{ grupos.horariojueves }}
        <br>
        Horario viernes: {{ grupos.horarioviernes }}
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';

export default {
    name: "DetalleGrupo",
    components: {},
    props: {
        clavegrupo: Number
    },
    data: function() {
        return{
            grupos: []
        };
    },
    created(){
        this.traeDetalle();
    },
    methods:{
        traeDetalle: async function(){
            let g = [];
            await axios
                .get(URL_DATOS+"/grupos/"+this.clavegrupo)
                .then(function(response){
                    console.log(response.data[0])
                    g = response.data[0]
            })
            .catch(function(error){
                console.log(error);
            });
            this.grupos = g;
        },
    },
};
</script>