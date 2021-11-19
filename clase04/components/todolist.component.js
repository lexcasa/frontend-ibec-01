const CompTodoList = Vue.component('todo-list', {
    data: function () {
        return {
            item: '',
            lista: [],
            flag: true,
            total: 0,
            completados: 0,
            compTodos: false,
            notRestablecer: true
        }
    },
    methods: {
        agregar: function () {
            this.lista.push({
                nombre: this.item,
                completado: false
            })
            this.item = ''

            this.totalizar()

        },
        eliminar: function (indice) {
            this.lista.splice(indice, 1)

            this.totalizar()
        },
        completar: function (indice) {
            this.lista[indice].completado = true
            console.log("this.lista: ", this.lista)
            this.notRestablecer = false
            this.totalizar()
        },
        totalizar: function () {
            this.total = this.lista.length
            let count = 0
            this.lista.map(item => {
                if (item.completado === true) {
                    count++
                }
            })
            this.completados = count

            // Controlo si estan todos completados
            this.compTodosControl()
        },
        restablecer: function () {
            this.lista.map(item => item.completado = false)
            this.compTodos = false
            this.completados = 0
            this.notRestablecer = true
        },
        completarTodos: function () {
            this.lista.map(item => item.completado = true)
            this.compTodos = true
            this.completados = this.lista.length
            this.notRestablecer = false
        },
        compTodosControl: function () {
            // Iniciamos siempre en false el boton de comp. todos
            this.compTodos = false
            let count = 0
            this.lista.map(item => {
                if (item.completado === true) {
                    count++
                }
            })

            // Verifico la cond. de la lista
            if (count === this.lista.length) {
                this.compTodos = true
            }
        }
    },
    template: `
        <div id="todo-list">
            <input type="text" v-model="item">
            <button v-on:click="agregar()">Agregar</button>
            <hr>
            <ul>
                <li v-for="(item, indice) in lista">
                    <span v-bind:class="{ tachado: item.completado }">{{item.nombre}}</span>
                    <button v-on:click="completar(indice)" v-bind:disabled="item.completado">Completar</button>
                    <button v-on:click="eliminar(indice)" v-bind:disabled="item.completado">Eliminar</button>
                </li>
            </ul>
            <div v-if="lista.length > 0">
                <hr>
                <p>Completados: {{completados}}/{{total}}</p>
                <hr>
                <button v-on:click="restablecer()" v-bind:disabled="notRestablecer">Restablecer</button>
                <button v-on:click="completarTodos()" v-bind:disabled="compTodos">Completar todos</button>
            </div>
        </div>
    `
})