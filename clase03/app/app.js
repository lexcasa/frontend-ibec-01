const app = new Vue({
    el: '#app',
    data: {
        item: '',
        lista: [],
        flag: true,
        total: 0,
        completados: 0
    },
    methods: {
        agregar: function (){
            this.lista.push({nombre: this.item, completado: false})
            this.item = ''

            this.totalizar()
        },
        eliminar: function (indice){
            this.lista.splice(indice, 1)

            this.totalizar()
        }, 
        completar: function (indice){
            this.lista[indice].completado = true
            console.log("this.lista: ", this.lista)

            this.totalizar()
        },
        totalizar: function (){
            this.total = this.lista.length
            let count = 0
            this.lista.map( item => {
                if(item.completado === true){
                    count++
                }
            })
            this.completados = count
        }
    }
})