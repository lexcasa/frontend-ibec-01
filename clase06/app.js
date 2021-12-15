const app = new Vue({
    el: '#app',
    data: {
        title: "App Vue"
    },
    components: {
        'todo-list':CompToDo
    }
})