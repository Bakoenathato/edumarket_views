<template>

    <body>

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
                        <a class="navbar-brand" href="index.html"><img src="../assets/images/logo/logo.png" class="logo"
                                alt=""></a>
                    </div>
                    <!-- End Header Navigation -->

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
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
                                    <li><a href="shop-all-services.html">Shop All Services</a></li>
                                    <li><a href="#">Tutoring</a></li>
                                    <li><a href="#">Women Hairstyling</a></li>
                                    <li><a href="#">Men Hair Cuts</a></li>
                                    <li><a href="#">Other</a></li>
                                    <li><a href="#">Sell</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="wishlist.html">Wishlist</a></li>
                            <li class="nav-item"><a class="nav-link" href="my-account.html">My Account</a></li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->

                    <!-- Start Atribute Navigation -->
                    <div class="attr-nav">
                        <ul>
                            <!-- <li class="search" title="Search"><a href="#"><i class="fa fa-search"></i></a></li> -->
                            <li class="side-menu" title="Cart"><a href="#">
                                    <i class="fa fa-shopping-bag"></i>
                                </a></li>
                        </ul>
                    </div>
                </div>
                <div class="side">
                    <a href="#" class="close-side"><i class="fa fa-times"></i></a>
                    <li class="cart-box">
                        <ul class="cart-list">
                            <li>
                                <a href="#" class="photo"><img src="images/products/electronics/lenovo.jpg"
                                        class="cart-thumb" alt="" /></a>
                                <h6><a href="#">Delica omtantur </a></h6>
                                <p>1x - <span class="price">$80.00</span></p>
                            </li>
                            <li>
                                <a href="#" class="photo"><img src="images/products/electronics/lenovo.jpg"
                                        class="cart-thumb" alt="" /></a>
                                <h6><a href="#">Omnes ocurreret</a></h6>
                                <p>1x - <span class="price">$60.00</span></p>
                            </li>
                            <li>
                                <a href="#" class="photo"><img src="images/products/electronics/lenovo.jpg"
                                        class="cart-thumb" alt="" /></a>
                                <h6><a href="#">Agam facilisis</a></h6>
                                <p>1x - <span class="price">$40.00</span></p>
                            </li>
                            <li class="total">
                                <a href="cart.html" class="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                <span class="float-right"><strong>Total</strong>: $180.00</span>
                            </li>
                        </ul>
                    </li>
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
                        <h2>Wishlist</h2>
                        <!-- <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Shop</a></li>
                            <li class="breadcrumb-item active">Wishlist</li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End All Title Box -->

        <!-- Start Wishlist  -->
        <div class="wishlist-box-main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-main table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Images</th>
                                        <th>Product Name</th>
                                        <th>Unit Price </th>
                                        <th>Stock</th>
                                        <th>Add Item</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="thumbnail-img">
                                            <a href="#">
                                                <img class="img-fluid" src="../assets/images/products/electronics/lenovo.jpg"
                                                    alt="" />
                                            </a>
                                        </td>
                                        <td class="name-pr">
                                            <a href="#">
                                                Lorem ipsum dolor sit amet
                                            </a>
                                        </td>
                                        <td class="price-pr">
                                            <p>$ 80.0</p>
                                        </td>
                                        <td class="quantity-box">In Stock</td>
                                        <td class="add-pr">
                                            <a class="btn-btn hvr-hover" href="#">Add to Cart</a>
                                        </td>
                                        <td class="remove-pr">
                                            <a href="#">
                                                <i class="fas fa-times"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="thumbnail-img">
                                            <a href="#">
                                                <img class="img-fluid" src="../assets/images/products/electronics/lenovo.jpg"
                                                    alt="" />
                                            </a>
                                        </td>
                                        <td class="name-pr">
                                            <a href="#">
                                                Lorem ipsum dolor sit amet
                                            </a>
                                        </td>
                                        <td class="price-pr">
                                            <p>$ 60.0</p>
                                        </td>
                                        <td class="quantity-box">In Stock</td>
                                        <td class="add-pr">
                                            <a class="btn-btn hvr-hover" href="#">Add to Cart</a>
                                        </td>
                                        <td class="remove-pr">
                                            <a href="#">
                                                <i class="fas fa-times"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="thumbnail-img">
                                            <a href="#">
                                                <img class="img-fluid" src="../assets/images/products/electronics/lenovo.jpg"
                                                    alt="" />
                                            </a>
                                        </td>
                                        <td class="name-pr">
                                            <a href="#">
                                                Lorem ipsum dolor sit amet
                                            </a>
                                        </td>
                                        <td class="price-pr">
                                            <p>$ 30.0</p>
                                        </td>
                                        <td class="quantity-box">In Stock</td>
                                        <td class="add-pr">
                                            <a class="btn-btn hvr-hover" href="#">Add to Cart</a>
                                        </td>
                                        <td class="remove-pr">
                                            <a href="#">
                                                <i class="fas fa-times"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Wishlist -->

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
        <!-- End Footer  -->

        <a href="#" id="back-to-top" title="Back to top" style="display: none;"></a>
    </body>
</template>

<script>
export default {
    name: "WishlistView",

}
</script>

<style scoped></style>