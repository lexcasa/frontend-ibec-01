const app = new Vue({
    el: "#app",
    data: {
        titulo: "App en vue",
        cedula: '',
        resultado: ''
    },
    methods: {
        buscarPersona: function (){
            console.log("cedula", this.cedula)
            for (let i = 0; i < personas.length; i++) {
                if (this.cedula === personas[i].cedulaPer) {
                    this.resultado = this.cedula
                }
            }
        }
    }
})

const personas = [
    {nombre: 'Juan',
    cedulaPer: '123'}
]