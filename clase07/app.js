// Definir los estados de mi aplicacion
const rutas = [
    {path: '/', component: CompLogin},
    {path: '/dashboard', component: CompDashboard},
    {path: '/todo', component: CompToDo}
]

const router = new VueRouter({
    routes: rutas
})

const app = new Vue({
    router: router,
    data: {}
}).$mount('#app')