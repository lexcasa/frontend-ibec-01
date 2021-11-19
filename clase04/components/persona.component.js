const CompPersona = Vue.component('persona', {
    data: function (){
        return {
            persona: {
                nombre: "Alex",
                apellido: "Casadevall"
            }
        }
    },
    template: `
        <ul>
            <li>{{persona.nombre}}</li>
            <li>{{persona.apellido}}</li>
        </ul>
    `
})