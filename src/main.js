import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import "./assets/js/jquery-3.2.1.min.js";
// import "./assets/js/bootsnav.js";
// import "./assets/js/bootstrap-select.js";
// import "./assets/js/contact-form-script.js";
// import "./assets/js/custom.js";


// import "./assets/js/inewsticker.js";
// import "./assets/js//jquery-ui.js";


// import "./assets/js/bootstrap.min.js";
// import "./assets/js/popper.min.js";

// import "./assets/js/jquery.superslides.min.js";
// import "./assets/js/images-loded.min.js";
// import "./assets/js/isotope.min.js";

// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/baguetteBox.min.js";
// import "./assets/js/form-validator.min.js";
// import "./assets/js/contact-form-script.js";


// import 'popper.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
// import 'jquery';

createApp(App).use(store).use(router).mount('#app')
