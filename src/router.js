import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './components/MainPage.vue'
import ChatBoard from './components/ChatBoard.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'hoge',
            component: MainPage
        },
        {
            path: '/room/:id',
            name: 'room',
            component: ChatBoard
        }
    ]
})