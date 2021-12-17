const CompDashboard = Vue.component('dashboard', {
    data: function (){
        return {
            title: "Dashboard"
        }
    },
    components: {
        'menu-items': CompMenu
    },
    template: `
        <div id="dasboard--component">
            <menu-items></menu-items>
            <h2>{{title}}</h2>
        </div>
    `
})