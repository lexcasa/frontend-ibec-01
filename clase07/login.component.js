const CompLogin = Vue.component('login', {
    data: function (){
        return {
            title: "Login"
        }
    },
    template: `
        <div id="login--component">
            <h2>{{title}}</h2>
        </div>
    `
})