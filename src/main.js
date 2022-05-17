import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/headers_footers/Header.vue';
import Footer from './components/headers_footers/Footer.vue';
import Maincontent from './components/headers_footers/Maincontent.vue';
import Sidebar from './components/headers_footers/Sidebar.vue';
import Courses from './components/courses/Courses.vue';
import Classroom from './components/Classroom/Classroom.vue';
import Assignment from './components/assignment/Assignment.vue';
import Home from './components/index/index.vue'

const app = createApp(App);

const routes = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: Home},
        { path: '/courses', component: Courses},
        { path: '/classroom', component: Classroom},
        { path: '/assignment', component: Assignment},
    ]   
});

app.component('app-sidebar', Sidebar);
app.component('app-maincontent', Maincontent);
app.component('app-footer', Footer)
app.component('app-header', Header);
app.use(routes);
app.mount('#app')
