const app = new Vue({
    el: '#app',
    data: {
        imagenes: [
            'https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg',
            'https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled.jpg',
            'https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg'
        ],
        image: 0
    },
    methods: {
        moveTo: function (indice){
            this.image = indice
        }
    }
})