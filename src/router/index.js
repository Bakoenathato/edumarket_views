import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import UserAddProductView from '../views/UserAddProductView.vue'
import UserAddServiceView from '../views/UserAddServiceView.vue'
import ContactView from '../views/ContactView.vue'
import ShopAllProductsView from '../views/ShopAllProductsView.vue'
import ShopAllServicesView from '../views/ShopAllServicesView.vue'
import WishlistView from '../views/WishlistView.vue'
import ServiceDetailsView from '../views/ServiceDetailsView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'
import MyAccountView from '../views/MyAccountView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import EditProfileView from '@/views/EditProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/register",
    name: "RegisterView",
    component: RegisterView,
  },
  {
    path: "/add-product",
    name: "UserAddProductView",
    component: UserAddProductView,
  },
  {
    path: "/add-service",
    name: "UserAddServiceView",
    component: UserAddServiceView,
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/products",
    name: "ShopAllProductsView",
    component: ShopAllProductsView,
  },
  {
    path: "/services",
    name: "ShopAllServicesView",
    component: ShopAllServicesView,
  },
  {
    path: "/wishlist",
    name: "WishlistView",
    component: WishlistView,
  },
  {
    path: "/service-details",
    name: "ServiceDetailsView",
    component: ServiceDetailsView,
  },
  {
    path: "/product-details",
    name: "ProductDetailsView",
    component: ProductDetailsView,
  },
  {
    path: "/account",
    name: "MyAccountView",
    component: MyAccountView,
  },
  {
    path: "/cart",
    name: "CartView",
    component: CartView,
  },
  {
    path: "/checkout",
    name: "CheckoutView",
    component: CheckoutView,
  },

  {
    path: "/editProfile",
    name: "EditProfileView",
    component: EditProfileView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
