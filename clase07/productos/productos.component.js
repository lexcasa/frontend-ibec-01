const API = 'https://crudcrud.com/api/70da43e155a140eab14095701e3cccc0'
const copy = function (item){
    return JSON.parse( JSON.stringify(item) )
}
const CompProductos = Vue.component('productos', function (cb) {
    // Hago la peticion de tipo GET para el HTML de vista
    axios.get('./productos/productos.view.html').then( res => {
        // Cuando termina de resolver la peticion
        // Devuelvo un callback
        cb({
            data: function (){
                return {
                    titulo: "CRUD de Productos",
                    producto: {
                        nombre: '',
                        precio: 0,
                        cantidad: 1
                    },
                    productos: []
                }
            },
            // Cargar la respuesta del get de un HTML 
            // al template del componente
            template: res.data,
            components: {
                'menu-items': CompMenu
            },
            methods: {
                // t=i
                guardaProducto: function (){
                    // t=i+1
                    let url = API + '/productos' // /pepe
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
                            this.producto =  {
                                nombre: '',
                                precio: 0,
                                cantidad: 1
                            }
                            this.cargaProductos()
                        })
                    } else {
        
                        url += '/' + producto._id // url + '/' + producto._id -> api.com/productos/asd12321asd123
                       
                        // Objeto anterior: {nombre, precio, cantidad, _id}
                        delete producto._id 
                        // Objeto ahora: {nombre, precio, cantidad}
                        
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
                //    this.producto = producto
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
    })
})