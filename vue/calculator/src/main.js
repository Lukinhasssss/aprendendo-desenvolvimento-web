import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App) // Faz o mesmo que a função render que está logo abaixo
    /* render(createElement) { // Essa função pega um componente do Vue e renderiza na página
        return createElement(App)
    } */
}).$mount("#app") // Faz o mesmo que o el: '#app'