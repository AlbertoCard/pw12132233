import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Maestros from '../views/Maestros.vue'
import DetalleMaestro from '../components/DetalleMaestro.vue'
import EditarMaestro from '../components/EditarMaestro.vue'
import NuevoMaestro from '../components/NuevoMaestro.vue'
import Alumnos from '../views/Alumnos.vue'
import DetalleAlumno from '../components/DetalleAlumno.vue'
import EditarAlumno from '../components/EditarAlumno.vue'
import NuevoAlumno from '../components/NuevoAlumno.vue'
import Materias from '../views/Materias.vue'
import DetalleMateria from '../components/DetalleMateria.vue'
import EditarMateria from '../components/EditarMateria.vue'
import NuevoMateria from '../components/NuevoMateria.vue'
import Grupos from '../views/Grupos.vue'
import DetalleGrupo from '../components/DetalleGrupo.vue'
import EditarGrupo from '../components/EditarGrupo.vue'
import NuevoGrupo from '../components/NuevoGrupo.vue'
import Cargas from '../views/Cargas.vue'
import NuevoCarga from '../components/NuevoCarga.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/maestros',
    name: 'maestros',
    component: Maestros
  },
  {
    path: '/DetalleMaestro',
    name: 'DetalleMaestro',
    component: DetalleMaestro,
    props: true
  },
  {
    path: '/EditarMaestro',
    name: 'EditarMaestro',
    component: EditarMaestro,
    props: true
  },
  {
    path: '/NuevoMaestro',
    name: 'NuevoMaestro',
    component: NuevoMaestro,
  },
  {
    path: '/alumnos',
    name: 'alumnos',
    component: Alumnos
  },
  {
    path: '/DetalleAlumno',
    name: 'DetalleAlumno',
    component: DetalleAlumno,
    props: true
  },
  {
    path: '/EditarAlumno',
    name: 'EditarAlumno',
    component: EditarAlumno,
    props: true
  },
  {
    path: '/NuevoAlumno',
    name: 'NuevoAlumno',
    component: NuevoAlumno,
  },
  {
    path: '/materias',
    name: 'materias',
    component: Materias
  },
  {
    path: '/DetalleMateria',
    name: 'DetalleMateria',
    component: DetalleMateria,
    props: true
  },
  {
    path: '/EditarMateria',
    name: 'EditarMateria',
    component: EditarMateria,
    props: true
  },
  {
    path: '/NuevoMateria',
    name: 'NuevoMateria',
    component: NuevoMateria,
  },
  {
    path: '/grupos',
    name: 'grupos',
    component: Grupos
  },
  {
    path: '/DetalleGrupo',
    name: 'DetalleGrupo',
    component: DetalleGrupo,
    props: true
  },
  {
    path: '/EditarGrupo',
    name: 'EditarGrupo',
    component: EditarGrupo,
    props: true
  },
  {
    path: '/NuevoGrupo',
    name: 'NuevoGrupo',
    component: NuevoGrupo,
  },
  {
    path: '/Cargas',
    name: 'Cargas',
    component: Cargas
  },
  {
    path: '/NuevoCarga',
    name: 'NuevoCarga',
    component: NuevoCarga,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
