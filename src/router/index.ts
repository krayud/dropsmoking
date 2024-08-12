import { createRouter, createWebHistory } from 'vue-router';
import { useHead } from '@vueuse/head';
import HomeView from '../pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'DropSmoking.ru: Бросайте курить и освободитесь от никотиновой зависимости',
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  useHead({
    title: to.meta.title,
    meta: [
      {
        name: 'description',
        content: 'DropSmoking.ru помогает вам бросить курить и вернуть здоровье. Наши методы и продукты помогут вам преодолеть никотиновую зависимость. Получите эффективную поддержку прямо сейчас.'
      },
      {
        name: 'description',
        content: 'DropSmoking.ru помогает вам бросить курить и вернуть здоровье. Наши методы и продукты помогут вам преодолеть никотиновую зависимость. Получите эффективную поддержку прямо сейчас.'
      }
    ],
  });
  next();
});

export default router
