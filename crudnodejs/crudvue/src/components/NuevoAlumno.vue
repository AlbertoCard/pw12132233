<template>
    <div class="NuevoAlumno">
        <h1>Nuevo alumno</h1>
        <br/>
        <label for="txtncontrol">Numero de control</label>
        <input 
            type="text" 
            name="txtncontrol" 
            id="txtncontrol" 
            v-model="alumnos.ncontrol"
            class="form-control"/>
        <br/>
        <label for="txtnombre">Nombre del alumno</label>
        <input 
            type="text" 
            name="txtnombre" 
            id="txtnombre" 
            v-model="alumnos.nombre"
            class="form-control"/>
        <br/>
        <label for="txtcarrera">Carrrera del alumno:</label>
        <input 
            type="text" 
            name="txtcarrera" 
            id="txtcarrera" 
            v-model="alumnos.carrera"
            class="form-control"/>
        <br/>
        <label for="txtestatus">Estatus del alumno</label>
        <input 
            type="text" 
            name="txtestatus" 
            id="txtestatus" 
            v-model="alumnos.estatus"
            class="form-control"/>
        <br>
        <br>
        <button @click.prevent="nuevoAlumno()" class="btn btn-primary btn-lg">
            Agregar alumno
        </button>
    </div>
</template>
<script>
    import { URL_DATOS } from '../utils/constantes';
    import axios from 'axios';  

    export default {
    name: "NuevoAlumno",
    components: {},
    data() {
        return {
            alumnos: {
                ncontrol: '',
                nombre: '',
                carrera: '',
                estatus: ''
            }
        };
    },
    methods: {
        nuevoAlumno: async function () {
                const res = await axios.post(URL_DATOS+"/alumnos/", {
                    ncontrol: this.alumnos.ncontrol,
                    nombre: this.alumnos.nombre,
                    carrera: this.alumnos.carrera,
                    estatus: this.alumnos.estatus
                });
                console.log(res);
                this.$router.push({name: 'AlumnosLista', params: {}})
        }
    }
};
</script>
<style>
.NuevoAlumno{
    margin: 0 auto;
    width: 30%;
    height: 566px;
    padding: 20px;
    background-color: lightgray;
    font-weight: bold;
}
</style>