// Defino el componente como una funcion
const CompMenu = Vue.component('menu', function (cb) {
    // Hago la peticion de tipo GET para el HTML de vista
    axios.get('./menu/menu.view.html').then( res => {
        // Cuando termina de resolver la peticion
        // Devuelvo un callback
        cb({
            data: function (){
                return {
                    links: [
                        {path: '/', name: 'Login'},
                        {path: '/dashboard', name: 'Dashboard'},
                        {path: '/todo', name: 'Todo List'}
                    ]
                }
            },
            // Cargar la respuesta del get de un HTML 
            // al template del componente
            template: res.data
        })
    })
})