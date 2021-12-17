const CompMenu = Vue.component('menu', {
    data: function (){
        return {
            links: [
                {path: '/', name: 'Login'},
                {path: '/dashboard', name: 'Dashboard'},
                {path: '/todo', name: 'Todo List'}
            ]
        }
    },
    template: `
        <div id="menu--component">
            <ul>
                <li v-for="item in links">
                    <router-link v-bind:to="item.path">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    `
})