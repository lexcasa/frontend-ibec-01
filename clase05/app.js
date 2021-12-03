const API = 'https://crudcrud.com/api/d82666a55a31472d97178bec6ea4796f'
const app = new Vue({
    el: '#app',
    data: {
        titulo: "CRUD de Productos",
        producto: {
            nombre: '',
            precio: 0,
            cantidad: 1
        },
        productos: []
    },
    methods: {
        // t=i
        guardaProducto: function (){
            // t=i+1
            let url = API + '/productos'
            let producto = this.producto
            // Hago una peticion de tipo POST 
            // A la API url.com/productos
            // Mando el obj de producto
            // Disparo la peticion: t=i+1
            // t=(i+1) + ts
            axios.post(url, producto).then( res => {
                // t=(i+1) + ts + ty
                console.log("res: ", res)
                this.cargaProductos()
            })
            console.log(this.producto)
        },
        cargaProductos: function (){
            let url = API + '/productos'
            axios.get(url).then( res => {
                this.productos = res.data
            })
        }
    },
    mounted: function (){
        console.log("ready :: ")
        this.cargaProductos()
    }
})