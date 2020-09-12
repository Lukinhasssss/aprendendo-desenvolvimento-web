import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)
    // render(createElement) {
    //     return createElement(App)
    // }
}).$mount("#app") // É o mesmo que usar o el: "#app"