const app = new Vue({
    el: '#app',
    data: {
        item: '',
        lista: [],
        flag: true
    },
    methods: {
        agregar: function (){
            this.lista.push({nombre: this.item, completado: false})
            this.item = ''
        },
        eliminar: function (indice){
            this.lista.splice(indice, 1)
        }, 
        completar: function (indice){
            this.lista[indice].completado = true
            console.log("this.lista: ", this.lista)
        }
    }
})