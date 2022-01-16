import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
} from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    meta: {
      title: 'Fmcat Pen',
    },
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/grid-card',
    meta: {
      title: '数量不定的卡片区',
    },
    component: () => import('@/views/grid-card.vue'),
  },
  {
    path: '/lottery',
    meta: {
      title: '抽奖',
    },
    component: () => import('@/views/lottery.vue'),
  },
  {
    path: '/concise-dom',
    meta: {
      title: '精简 DOM 结构',
    },
    component: () => import('@/views/concise-dom.vue'),
  },
  {
    path: '/colors-icon',
    meta: {
      title: '百变图标',
    },
    component: () => import('@/views/colors-icon.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
    const title: string = String(to?.meta?.title ?? 'Fmcat Pen');
    document.title = title;
    next();
  }
);

export default router;
