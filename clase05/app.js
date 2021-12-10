const API = 'https://crudcrud.com/api/3d7717844a4346ff99c056ca7453d307'
const copy = function (item){
    return JSON.parse( JSON.stringify(item) )
}
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
            if(!producto._id){
                axios.post(url, producto).then( res => {
                    // t=(i+1) + ts + ty
                    console.log("res: ", res)
                    this.cargaProductos()
                })
            } else {

                url += '/' + producto._id
                delete producto._id
                
                axios.put(url, producto).then( res => {
                    // t=(i+1) + ts + ty
                    console.log("res: ", res)
                    this.cargaProductos()
                })
            }
            console.log(this.producto)
        },
        cargaProductos: function (){
            let url = API + '/productos'
            axios.get(url).then( res => {
                this.productos = res.data
            })
        },
        seleccionarProducto: function (producto){
            this.producto = copy(producto)
        },
        eliminarProducto: function (id){
            let url = API + '/productos/' + id
            axios.delete(url).then( res => {
                this.cargaProductos()
            })
        }
    },
    mounted: function (){
        console.log("ready :: ")
        this.cargaProductos()
    }
})