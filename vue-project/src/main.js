import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import PaginaInicial from './pages/PaginaInicial.vue'
import Login from './pages/Login.vue'
import CadastroCliente from './pages/CadastroCliente.vue'
import CadastroProfissional from './pages/CadastroProfissional.vue'
import AreaProfissional from './pages/AreaProfissional.vue'
import Historico from './pages/Historico.vue'
import Agendamento from './pages/Agendamento.vue'
import "./assets/global.css"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: PaginaInicial
        },
        {
            path: '/Login',
            component: Login
        },
        {
            path:'/CadastroCliente',
            component: CadastroCliente
        },
        {
            path:'/CadastroProfissional',
            component: CadastroProfissional
        },
        {
            path:'/AreaProfissional',
            component: AreaProfissional
        },
        {
            path:'/Historico',
            component: Historico
        },
        {
            path:'/Agendamento',
            component: Agendamento
        }
    ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')