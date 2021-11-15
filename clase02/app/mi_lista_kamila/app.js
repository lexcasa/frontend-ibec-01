const app = new Vue ({
    el: '#app',
    data: {
        agregados: [],
        agregado: '',
        showTable: false
    },
    methods: {
        agregarPersona: function () {
            this.agregados.push(this.agregado);
            showTable = true
            this.agregado = ''
            console.log(this.agregados);
        }
    }
})