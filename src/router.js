import Vue from 'vue'
import VueRouter from 'vue-router'

import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import singleBlog from './components/singleBlog.vue';


Vue.use(VueRouter)

const routes = [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlog },
    { path: '/blog/:id', component: singleBlog }

]

export default new VueRouter({mode: 'history', routes})
