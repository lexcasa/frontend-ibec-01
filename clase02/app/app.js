const app = new Vue({
    el: "#app",
    data: {
        titulo: "App en vue",
        cedula: '',
        persona: {}, 
        personas: [
            {
                nombre: "Alex",
                cedula: "123123"
            },
            {
                nombre: "Juan",
                cedula: "111111"
            }
        ]
    },
    methods: {
        buscarPersona: function (){
            console.log("cedula", this.cedula)
            for (let i = 0; i < this.personas.length; i++){
                if(this.cedula == this.personas[i].cedula){
                    this.persona = this.personas[i]
                    break
                }
            }
        }
    }
})