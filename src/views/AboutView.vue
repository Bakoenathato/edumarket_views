<template>
    <div>
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
                        <router-link class="navbar-brand" to="/"><img src="../assets/images/logo/logo.png" class="logo" alt=""></router-link>
                    </div>
                    <!-- End Header Navigation -->

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                            <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                            <li class="nav-item active"><router-link class="nav-link" to="/about">About Us</router-link></li>
                            <li class="dropdown">
                                <a class="nav-link" to="#" data-toggle="dropdown" style="cursor: pointer;">SHOP</a>
                                <ul class="dropdown-menu">
                                    <li><router-link class="nav-link" to="products" data-toggle="dropdown">Products</router-link></li>
                                    <li><router-link class="nav-link" to="services" data-toggle="dropdown">Services</router-link></li>
                                    <li><router-link to="/login">Wishlist</router-link></li>
                                    <li><router-link to="/login">My Account</router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item"><router-link class="nav-link" to="/contact">Contact Us</router-link></li>
                            <li class="login-box" style="margin-top: 25px;">
                                <select class="form-control custom-select" @change="handleSelect">
                                    <option value="">Select</option>
                                    <option value="RegisterView">Register</option>
                                    <option value="LoginView">Sign In</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->

                    <!-- Start Atribute Navigation -->
                    <div class="attr-nav">
                        <ul>
                            <li>
                                <router-link to="/login" title="Cart">
                                    <i class="fa fa-shopping-bag" style="color: red;"></i>
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
                        <h2>ABOUT US</h2>
                        <!-- <ul class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                            <li class="breadcrumb-item active">ABOUT US</li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End All Title Box -->

        <!-- Start About Page  -->
        <div class="about-box-main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="banner-frame" style="margin-top: 120px; margin-right: 50px;">
                            <img class="img-fluid rounded shadow" src="../assets/images/about/cover.jpg" alt="About Us Cover" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h2 class="noo-sh-title-top">Discover the Story Behind <span class="text-primary">EduMarket</span></h2>
                        <p class="text-justify">
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,<br><br> 
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start Footer  -->
        <footer>
            <div class="footer-main">
                <div class="container">
                    <!-- <hr> -->
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="footer-widget">
                                <h4>About EduMarket</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="footer-link-contact">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li>
                                        <p><i class="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756
                                            <br>Preston Street Wichita,<br> KS 67213 </p>
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

        <button class="scroll-button" @click="scrollToTop">Top</button>
        <button class="scroll-button" @click="scrollToBottom">Bottom</button>
    </div>
</template>

<script>
export default {
    name: "AboutView",
    methods: {
        handleSelect(event) {
            const value = event.target.value;
            if (value) {
                this.$router.push({ name: value });
            }
        },
        scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        scrollToBottom() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }
}
</script>

<style scoped>
.custom-select {
  background-color: #007bff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.custom-select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
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
}

.scroll-button:first-of-type {
  bottom: 80px;
}

.scroll-button:last-of-type {
  bottom: 20px;
}

.about-box-main {
    padding: 60px 0;
    background-color: #f9f9f9;
}

.banner-frame {
    border: 1px solid #ddd;
    padding: 10px;
    background-color: #fff;
}

.noo-sh-title-top {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.noo-sh-title-top span {
    color: #007bff;
}

.text-justify {
    text-align: justify;
    line-height: 1.6;
    margin-bottom: 20px;
}
</style>