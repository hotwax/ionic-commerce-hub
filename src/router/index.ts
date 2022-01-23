import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
<<<<<<< HEAD
import Order from '@/views/Orders.vue'
import Login from '@/views/Login.vue'
=======
import FindOrder from '@/views/FindOrder.vue'
import Order from '@/views/Order.vue'
import FindProductInventory from '@/views/FindProductInventory.vue'
import ProductInventory from '@/views/ProductInventory.vue'
import FindPurchaseOrder from '@/views/FindPurchaseOrder.vue'
import PurchaseOrder from '@/views/PurchaseOrder.vue'
>>>>>>> 1d9c0382dac7dcb2433c687e46917e9cd3abe5ff
import Settings from "@/views/Settings.vue"
import store from '@/store'

const authGuard = (to: any, from: any, next: any) => {
  if (store.getters['user/isAuthenticated']) {
      next()
  } else {
    next("/login")
  }
};

const loginGuard = (to: any, from: any, next: any) => {
  if (!store.getters['user/isAuthenticated']) {
      next()
  } else {
    next("/")
  }
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/settings'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: loginGuard
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: '/find-order',
    name: 'FindOrder',
    component: FindOrder,
    beforeEnter: authGuard
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    beforeEnter: authGuard
  },
  {
<<<<<<< HEAD
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: authGuard
=======
    path: '/find-product-inventory',
    name: 'FindProductInventory',
    component:FindProductInventory,
    beforeEnter: authGuard
  },
  {
    path: '/product-inventory',
    name: 'ProductInventory',
    component: ProductInventory,
>>>>>>> 1d9c0382dac7dcb2433c687e46917e9cd3abe5ff
  },
  {
    path: '/find-purchase-order',
    name: 'FindPurchaseOrder',
    component:FindPurchaseOrder,
  },
  {  
    path: '/purchase-order',
    name: 'PurchaseOrder',
    component: PurchaseOrder,
    beforeEnter: authGuard
  },  
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    beforeEnter: authGuard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router