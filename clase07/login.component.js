const CompLogin = Vue.component('login', {
    data: function (){
        return {
            title: "Login"
        }
    },
    methods: {
        ingresar: function (){
            app.$router.push('/dashboard')
        }
    },
    template: `
        <div id="login--component">
            <h2>{{title}}</h2>
            <button v-on:click="ingresar()">Ingresar</button>
        </div>
    `
})