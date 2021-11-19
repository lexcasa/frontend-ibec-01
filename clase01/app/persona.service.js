let pers = [{
        nombre: "Alex",
        cedula: "123123"
    },
    {
        nombre: "Juan",
        cedula: "111111"
    }
]
const PersonaService = function (personas) {
    return {
        obtenerPersonas: function () {
            return personas
        },
        buscarPersona: function (ci) {
            for (let i = 0; i < personas.length; i++) {
                if (ci === personas[i].cedula) {
                    return personas[i]
                }
            }
            return false
        },
        nuevaPersona: function (persona) {
            console.log("referencia:", this)
            if (this.buscarPersona(persona.cedula) === false) {
                personas.push(persona)
            }
            return personas
        }
    }
}