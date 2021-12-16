const CompDashboard = Vue.component('dashboard', {
    data: function (){
        return {
            title: "Dashboard"
        }
    },
    template: `
        <div id="dasboard--component">
            <h2>{{title}}</h2>
        </div>
    `
})