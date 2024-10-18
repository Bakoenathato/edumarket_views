<template>

    <body>
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
                        <a class="navbar-brand" href="index.html"><img src="../assets/images/logo/logo.png" class="logo"
                                alt=""></a>
                    </div>
                    <!-- End Header Navigation -->

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item active"><a class="nav-link" href="about.html">About Us</a></li>
                            <li class="dropdown">
                                <a href="#" class="nav-link" data-toggle="dropdown">SHOP</a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown">
                                        <a href="#" class="nav-link" data-toggle="dropdown">Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="shop-all-products.html">Shop All Products</a></li>
                                            <li><a href="#">Electronics</a></li>
                                            <li><a href="#">Books</a></li>
                                            <li><a href="#">Appliances</a></li>
                                            <li><a href="#">Furniture</a></li>
                                            <li><a href="#">Other</a></li>
                                            <li><a href="#">Sell</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#" class="nav-link" data-toggle="dropdown">Services</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#">Shop All Services</a></li>
                                            <li><a href="#">Tutoring</a></li>
                                            <li><a href="#">Women Hairstyling</a></li>
                                            <li><a href="#">Men Hair Cuts</a></li>
                                            <li><a href="#">Other</a></li>
                                            <li><a href="#">Sell</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="contact-us.html">Contact Us</a></li>
                            <li class="login-box" style="margin-top: 10px;">
                                <select id="basic" class="selectpicker form-control" onchange="handleSelect(this)">
                                    <option value="">Select Option</option>
                                    <option value="register.html">Register Here</option>
                                    <option value="signin.html">Sign In</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->

                    <!-- Start Atribute Navigation -->
                    <div class="attr-nav">
                        <ul>
                            <li>
                                <a href="signin.html" title="Cart">
                                    <i class="fa fa-shopping-bag"></i>
                                </a>
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
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
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
                        <div class="banner-frame" style="margin-top: 80px; margin-right: 50px;"> <img class="img-fluid"
                                src="../assets/images/about/cover.jpg" alt="" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h2 class="noo-sh-title-top">We are <span>EduMarket</span></h2>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                            consequatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                                <h4>About Freshshop</h4>
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
                                    <button class="btn hvr-hover" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <a href="#" id="back-to-top" title="Back to top" style="display: none;"></a>
    </body>
</template>

<script>
export default {
    name: "AboutView",

}
</script>

<style scoped></style>