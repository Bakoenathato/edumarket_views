<template>
    <div>
        <!-- Start Main Top -->
        <header class="main-header">
            <!-- Start Navigation -->
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                <div class="container">
                    <!-- Start Header Navigation -->
                    <div class="navbar-header">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu"
                            aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars"></i>
                        </button>
                        <a class="navbar-brand"><img src="../assets/images/logo/logo.png" class="logo" alt="" /></a>
                    </div>
                    <!-- End Header Navigation -->

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                            <li class="dropdown">
                                <a class="nav-link" to="#" data-toggle="dropdown" style="cursor: pointer">Products</a>
                                <ul class="dropdown-menu">
                                    <li><router-link :to="{ path: '/products', query: { userId } }">Shop All
                                            Products</router-link></li>
                                    <li><router-link
                                            :to="{ path: '/electronics', query: { userId } }">Electronics</router-link>
                                    </li>
                                    <li><router-link :to="{ path: '/books', query: { userId } }">Books</router-link>
                                    </li>
                                    <li><router-link
                                            :to="{ path: '/appliances', query: { userId } }">Appliances</router-link>
                                    </li>
                                    <li><router-link
                                            :to="{ path: '/furniture', query: { userId } }">Furniture</router-link></li>
                                    <li><router-link
                                            :to="{ path: '/product-others', query: { userId } }">Other</router-link>
                                    </li>
                                    <li><router-link :to="getRouteWithUserId('/add-product')">Sell</router-link></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="nav-link" to="#" data-toggle="dropdown" style="cursor: pointer">Services</a>
                                <ul class="dropdown-menu">
                                    <li><router-link :to="{ path: '/services', query: { userId } }">Shop All
                                            Services</router-link></li>
                                    <li><router-link
                                            :to="{ path: '/tutoring', query: { userId } }">Tutoring</router-link></li>
                                    <li><router-link :to="{ path: '/women-hairstyling', query: { userId } }">Women
                                            Hairstyling</router-link></li>
                                    <li><router-link :to="{ path: '/men-cuts', query: { userId } }">Men Hair
                                            Cuts</router-link></li>
                                    <li><router-link
                                            :to="{ path: '/service-others', query: { userId } }">Other</router-link>
                                    </li>
                                    <li><router-link :to="getRouteWithUserId('/add-service')">Sell</router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link :to="getRouteWithUserId('/wishlist')"
                                    class="nav-link">Wishlist</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="getRouteWithUserId('/my-account')" class="nav-link">My
                                    Account</router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->

                    <!-- Start Atribute Navigation -->
                    <div class="attr-nav">
                        <ul>
                            <li class="side-menu" title="Cart">
                                <router-link :to="getRouteWithUserId('/cart')">
                                    <i class="fa fa-shopping-bag" style="color: red"></i>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- End Navigation -->
        </header>
        <!-- End Main Top -->

        <!-- Start All Title Box -->
        <div class="all-title-box">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Service Details</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- End All Title Box -->

        <!-- Start Shop Detail  -->
        <div class="shop-detail-box-main" v-if="service">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-5 col-lg-5 col-md-5">
                        <div id="carousel-example-1" class="single-product-slider carousel slide" data-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" :src="`data:image/jpeg;base64,${service.serviceImage}`" style="margin-top: 30px;"
                                        alt="First slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7 col-md-6">
                        <div class="single-product-details">
                            <h2>{{ service.serviceName }}</h2>
                            <h5>R{{ service.servicePrice }}</h5>
                            <h4>Description:</h4>
                            <p>{{ service.serviceDescription }}</p>
                            <h4>Service Provider:</h4>
                            <p v-if="user">{{ user.firstName }} {{ user.lastName }}</p>
                            <p v-if="user">Email: {{ user.email }}</p>
                            <p v-if="user">Phone: {{ user.phone }}</p>
                            <p v-if="user">Residence: {{ user.residence }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Shop Detail -->

        <!-- Start Footer  -->
        <footer>
            <div class="footer-main">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="footer-widget">
                                <h4>About Freshshop</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="footer-link-contact">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li>
                                        <p><i class="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756
                                            <br>Preston Street Wichita,<br> KS 67213</p>
                                    </li>
                                    <li>
                                        <p><i class="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888
                                                705 770</a></p>
                                    </li>
                                    <li>
                                        <p><i class="fas fa-envelope"></i>Email: <a
                                                href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="footer-top-box footer-link-contact">
                                <h4>Product Updates</h4>
                                <form class="newsletter-box">
                                    <div class="form-group">
                                        <input class="" type="email" name="Email" placeholder="Email Address*" />
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    <button class="btn" type="submit" style="background-color: #007bff;">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- End Footer  -->
        <button class="scroll-button" @click="scrollToTop">Top</button>
        <button class="scroll-button" @click="scrollToBottom">Bottom</button>
    </div>
</template>

<script>
export default {
    name: "ServiceDetailsView",
    data() {
        return {
            userId: Number(this.$route.query.userId),
            service: null,
            user: null,
        };
    },
    mounted() {
    const serviceId = Number(this.$route.query.serviceId);
    console.log("Service ID:", serviceId); // Debugging statement
    // Fetch service details from the API
    fetch(`http://localhost:8080/edumarket/serviceproduct/read/${serviceId}`)
      .then((response) => response.json())
      .then((data) => {
        this.service = data;
        console.log("Fetched service:", this.service); // Debugging statement
        const serviceUserId = this.service.user.userId;
        // Fetch user details from the API
        return fetch(`http://localhost:8080/edumarket/user/read/${serviceUserId}`);
      })
      .then((response) => response.json())
      .then((data) => {
        this.user = data;
        console.log("Fetched user:", this.user); // Debugging statement
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
    methods: {
        getRouteWithUserId(path) {
            const userId = Number(this.$route.query.userId);
            if (userId) {
                return { path, query: { userId } };
            } else {
                // alert("Please login to view this page");
                return { path: "/login" };
            }
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        scrollToBottom() {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        },
    },
};
</script>

<style scoped>
/* General Styling */
body {
    line-height: 1.6;
}

.scroll-button {
    position: fixed;
    right: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;
    transition: background-color 0.3s ease;
}

.scroll-button:hover {
    background-color: #0056b3;
}

.scroll-button:first-of-type {
  bottom: 80px;
}

.scroll-button:last-of-type {
  bottom: 20px;
}

/* Shop Detail Box */
.shop-detail-box-main {
    padding: 50px 0;
}

.single-product-details {
    padding-left: 20px;
}

.single-product-details h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 15px;
}

.single-product-details h5 {
    font-size: 22px;
    color: #007bff;
    margin-bottom: 20px;
}

.single-product-details h4 {
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
}

.single-product-details p {
    font-size: 14px;
    margin-bottom: 10px;
}

/* Image Slider */
.single-product-slider img {
    object-fit: cover;
    border-radius: 10px;
    max-height: 400px;
}

.box-img-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.fixed-size {
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>