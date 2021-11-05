const app = new Vue({
    el: "#app",
    data: {
        titulo: "App en vue",
        cedula: '',
        persona: {},
        newPersona: {
            nombre: '',
            cedula: ''
        },
        showForm: false,
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
            let findPersona = false
            for (let i = 0; i < this.personas.length; i++){
                if(this.cedula == this.personas[i].cedula){
                    this.persona = this.personas[i]
                    findPersona = true
                    break
                }
            }
            if(!findPersona){
                this.showForm = true 
            }
        },
        nuevaPersona: function (){
            this.personas.push( this.newPersona )
            this.showForm = false
            this.newPersona = {
                nombre: '',
                cedula: ''
            }
            console.log(this.personas)
        }
    }
})