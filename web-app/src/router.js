import Vue from 'vue'
import Router from 'vue-router'
import Home from './app/Home.vue'
// Importe o componente aqui antes de criar o objeto da rota abaixo
// importar 'NOME DO COMPONENTE' de 'caminho do componente'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Para adicionar um novo elemento siga o modelo do objeto abaixo
    { path: '/', name: 'home', component: Home }
    // path => caminho | name => nome da rota | component:  => nome do componente
  ]
})
