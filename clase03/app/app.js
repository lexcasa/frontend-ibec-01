const app = new Vue({
    el: '#app',
    data: {
        item: '',
        lista: [],
        flag: true,
        total: 0,
        completados: 0,
        compTodos: false,
        notRestablecer: true 
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
            this.notRestablecer = false
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

            // Controlo si estan todos completados
            this.compTodosControl()
        }, 
        restablecer: function (){
            this.lista.map( item => item.completado = false)
            this.compTodos = false
            this.completados = 0
            this.notRestablecer = true
        },
        completarTodos: function (){
            this.lista.map( item => item.completado = true)
            this.compTodos = true
            this.completados = this.lista.length
            this.notRestablecer = false
        },
        compTodosControl: function (){
            // Iniciamos siempre en false el boton de comp. todos
            this.compTodos = false
            let count = 0
            this.lista.map( item => {
                if(item.completado === true){
                    count++
                }
            })

            // Verifico la cond. de la lista
            if(count === this.lista.length){
                this.compTodos = true
            }
        }
    }
})