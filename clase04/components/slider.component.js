const CompSlider = Vue.component('slider', {
    data: function (){
        return {
            imagenes: [
                'https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg',
                'https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled.jpg',
                'https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg'
            ],
            image: 0
        }
    },
    methods: {
        moveTo: function (indice){
            this.image = indice
        },
        moveIzq: function (){
            // ln: Largo del array
            // El ultimo elemento ln-1
            // Pos actual: image
            if(this.image == 0){
                this.image = this.imagenes.length -1
            } else {
                this.image = this.image -1
            }
        },
        moveDer: function (){
            // ln: Largo del array
            // El ultimo elemento ln-1
            // Pos actual: image
            if(this.image == this.imagenes.length -1){
                this.image = 0
            } else {
                this.image = this.image +1
            }
        }
    },
    template: `
        <div id="slider">
            <div class="img-container">
                <img v-bind:src="imagenes[ image ]" alt="" width="200px">
            </div>
            <hr>
            <ul>
                <li><a href="#" v-on:click="moveIzq()"><</a></li>
                <li v-for="(item, i) in imagenes">
                    <a href="#" v-on:click="moveTo(i)">{{i+1}}</a>
                </li>
                <li><a href="#" v-on:click="moveDer()">></a></li>
            </ul>       
        </div>
    `
})