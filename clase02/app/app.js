const app = new Vue({
    el: "#app",
    data: {
        titulo: "App en vue",
        cedula: ''
    },
    methods: {
        buscarPersona: function (){
            console.log("cedula", this.cedula)
        }
    }
})