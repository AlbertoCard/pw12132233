<template>
    <div class="DetalleMaestro">
        Clave: {{ clavemaestro  }}
        <br>
        Nombre: {{ maestros.nombre }}
        <br>
        Departamento: {{ maestros.departamento }}
        <br>
        Estatus: {{ maestros.estatus }}
    </div>
</template>
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';    

export default {
        name: "DetalleMaestro",
        components:{ },
        props: {
            clavemaestro: Number
        },
        data: function() {
            return{
                maestros: []
            }
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
        }
    }
</script>