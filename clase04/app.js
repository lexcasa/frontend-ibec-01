const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Sitio web!'
    },
    components: {
        'todo-list': CompTodoList,
        'persona': CompPersona
    },
    methods: {

    }
})