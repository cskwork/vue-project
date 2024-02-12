import { createRouter, createWebHistory } from "vue-router";
import Tab1MenuHome from '@/pages/Home/App.vue';
import Tab2MenuHome from '@/pages/About/App.vue';
import Tab1MenuPosts from '@/pages/Post/Posts.vue';

const routes = [
    {
        path: '/',
        name: "tab1",
        component: Tab1MenuHome
    },
    {
        path: '/about',
        name: "tab2",
        component: Tab2MenuHome
    },
    {
        path: '/posts',
        name: "tab1post",
        component: Tab1MenuPosts
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;