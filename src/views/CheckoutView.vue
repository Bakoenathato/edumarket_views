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
                                <a href="#" class="photo"><img src="images/img-pro-01.jpg" class="cart-thumb"
                                        alt="" /></a>
                                <h6><a href="#">Delica omtantur </a></h6>
                                <p>1x - <span class="price">$80.00</span></p>
                            </li>
                            <li>
                                <a href="#" class="photo"><img src="images/img-pro-02.jpg" class="cart-thumb"
                                        alt="" /></a>
                                <h6><a href="#">Omnes ocurreret</a></h6>
                                <p>1x - <span class="price">$60.00</span></p>
                            </li>
                            <li>
                                <a href="#" class="photo"><img src="images/img-pro-03.jpg" class="cart-thumb"
                                        alt="" /></a>
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
                        <h2>Checkout</h2>
                        <!-- <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Shop</a></li>
                            <li class="breadcrumb-item active">Checkout</li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End All Title Box -->

        <!-- Start Cart  -->
        <div class="cart-box-main">
            <div class="container">
                <div class="row new-account-login">
                    <div class="col-sm-6 col-lg-6 mb-3"></div>
                    <div class="col-sm-6 col-lg-6 mb-3"></div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-lg-6 mb-3">
                        <div class="checkout-address">
                            <div class="title-left">
                                <h3>Billing address</h3>
                            </div>
                            <form class="needs-validation" novalidate>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName">First name *</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="" value=""
                                            required>
                                        <div class="invalid-feedback"> Valid first name is required. </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName">Last name *</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" value=""
                                            required>
                                        <div class="invalid-feedback"> Valid last name is required. </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="username">Username *</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="username" placeholder="" required>
                                        <div class="invalid-feedback" style="width: 100%;"> Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="email">Email Address *</label>
                                    <input type="email" class="form-control" id="email" placeholder="">
                                    <div class="invalid-feedback"> Please enter a valid email address for shipping
                                        updates. </div>
                                </div>
                                <div class="mb-3">
                                    <label for="address">Address *</label>
                                    <input type="text" class="form-control" id="address" placeholder="" required>
                                    <div class="invalid-feedback"> Please enter your shipping address. </div>
                                </div>
                                <div class="mb-3">
                                    <label for="address2">Address 2 *</label>
                                    <input type="text" class="form-control" id="address2" placeholder="">
                                </div>
                                <div class="row">
                                    <div class="col-md-5 mb-3">
                                        <label for="country">Country *</label>
                                        <select class="wide w-100" id="country">
                                            <option value="Choose..." data-display="Select">Choose...</option>
                                            <option value="United States">United States</option>
                                        </select>
                                        <div class="invalid-feedback"> Please select a valid country. </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="state">State *</label>
                                        <select class="wide w-100" id="state">
                                            <option data-display="Select">Choose...</option>
                                            <option>California</option>
                                        </select>
                                        <div class="invalid-feedback"> Please provide a valid state. </div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label for="zip">Zip *</label>
                                        <input type="text" class="form-control" id="zip" placeholder="" required>
                                        <div class="invalid-feedback"> Zip code required. </div>
                                    </div>
                                </div>
                                <hr class="mb-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="same-address">
                                    <label class="custom-control-label" for="same-address">Shipping address is the same
                                        as my billing address</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="save-info">
                                    <label class="custom-control-label" for="save-info">Save this information for next
                                        time</label>
                                </div>
                                <hr class="mb-4">
                                <div class="title"> <span>Payment</span> </div>
                                <div class="d-block my-3">
                                    <div class="custom-control custom-radio">
                                        <input id="credit" name="paymentMethod" type="radio"
                                            class="custom-control-input" checked required>
                                        <label class="custom-control-label" for="credit">Credit card</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input"
                                            required>
                                        <label class="custom-control-label" for="debit">Debit card</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input id="paypal" name="paymentMethod" type="radio"
                                            class="custom-control-input" required>
                                        <label class="custom-control-label" for="paypal">Paypal</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="cc-name">Name on card</label>
                                        <input type="text" class="form-control" id="cc-name" placeholder="" required>
                                        <small class="text-muted">Full name as displayed on card</small>
                                        <div class="invalid-feedback"> Name on card is required </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="cc-number">Credit card number</label>
                                        <input type="text" class="form-control" id="cc-number" placeholder="" required>
                                        <div class="invalid-feedback"> Credit card number is required </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 mb-3">
                                        <label for="cc-expiration">Expiration</label>
                                        <input type="text" class="form-control" id="cc-expiration" placeholder=""
                                            required>
                                        <div class="invalid-feedback"> Expiration date required </div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label for="cc-expiration">CVV</label>
                                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                                        <div class="invalid-feedback"> Security code required </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="payment-icon">
                                            <ul>
                                                <li><img class="img-fluid" src="images/payment-icon/1.png" alt=""></li>
                                                <li><img class="img-fluid" src="images/payment-icon/2.png" alt=""></li>
                                                <li><img class="img-fluid" src="images/payment-icon/3.png" alt=""></li>
                                                <li><img class="img-fluid" src="images/payment-icon/5.png" alt=""></li>
                                                <li><img class="img-fluid" src="images/payment-icon/7.png" alt=""></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mb-1">
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-6 mb-3">
                        <div class="row">
                            <div class="col-md-12 col-lg-12">
                                <div class="shipping-method-box">
                                    <div class="title-left">
                                        <h3>Shipping Method</h3>
                                    </div>
                                    <div class="mb-4">
                                        <div class="custom-control custom-radio">
                                            <input id="shippingOption1" name="shipping-option"
                                                class="custom-control-input" checked="checked" type="radio">
                                            <label class="custom-control-label" for="shippingOption1">Standard
                                                Delivery</label> <span class="float-right font-weight-bold">FREE</span>
                                        </div>
                                        <div class="ml-4 mb-2 small">(3-7 business days)</div>
                                        <div class="custom-control custom-radio">
                                            <input id="shippingOption2" name="shipping-option"
                                                class="custom-control-input" type="radio">
                                            <label class="custom-control-label" for="shippingOption2">Express
                                                Delivery</label> <span
                                                class="float-right font-weight-bold">$10.00</span>
                                        </div>
                                        <div class="ml-4 mb-2 small">(2-4 business days)</div>
                                        <div class="custom-control custom-radio">
                                            <input id="shippingOption3" name="shipping-option"
                                                class="custom-control-input" type="radio">
                                            <label class="custom-control-label" for="shippingOption3">Next Business
                                                day</label> <span class="float-right font-weight-bold">$20.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-12">
                                <div class="odr-box">
                                    <div class="title-left">
                                        <h3>Shopping cart</h3>
                                    </div>
                                    <div class="rounded p-2 bg-light">
                                        <div class="media mb-2 border-bottom">
                                            <div class="media-body"> <a href="detail.html"> Lorem ipsum dolor sit
                                                    amet</a>
                                                <div class="small text-muted">Price: $80.00 <span class="mx-2">|</span>
                                                    Qty: 1 <span class="mx-2">|</span> Subtotal: $80.00</div>
                                            </div>
                                        </div>
                                        <div class="media mb-2 border-bottom">
                                            <div class="media-body"> <a href="detail.html"> Lorem ipsum dolor sit
                                                    amet</a>
                                                <div class="small text-muted">Price: $60.00 <span class="mx-2">|</span>
                                                    Qty: 1 <span class="mx-2">|</span> Subtotal: $60.00</div>
                                            </div>
                                        </div>
                                        <div class="media mb-2">
                                            <div class="media-body"> <a href="detail.html"> Lorem ipsum dolor sit
                                                    amet</a>
                                                <div class="small text-muted">Price: $40.00 <span class="mx-2">|</span>
                                                    Qty: 1 <span class="mx-2">|</span> Subtotal: $40.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-12">
                                <div class="order-box">
                                    <div class="title-left">
                                        <h3>Your order</h3>
                                    </div>
                                    <div class="d-flex">
                                        <div class="font-weight-bold">Product</div>
                                        <div class="ml-auto font-weight-bold">Total</div>
                                    </div>
                                    <hr class="my-1">
                                    <div class="d-flex">
                                        <h4>Sub Total</h4>
                                        <div class="ml-auto font-weight-bold"> $ 440 </div>
                                    </div>
                                    <div class="d-flex">
                                        <h4>Discount</h4>
                                        <div class="ml-auto font-weight-bold"> $ 40 </div>
                                    </div>
                                    <hr class="my-1">
                                    <div class="d-flex">
                                        <h4>Coupon Discount</h4>
                                        <div class="ml-auto font-weight-bold"> $ 10 </div>
                                    </div>
                                    <div class="d-flex">
                                        <h4>Tax</h4>
                                        <div class="ml-auto font-weight-bold"> $ 2 </div>
                                    </div>
                                    <div class="d-flex">
                                        <h4>Shipping Cost</h4>
                                        <div class="ml-auto font-weight-bold"> Free </div>
                                    </div>
                                    <hr>
                                    <div class="d-flex gr-total">
                                        <h5>Grand Total</h5>
                                        <div class="ml-auto h5"> $ 388 </div>
                                    </div>
                                    <hr>
                                </div>
                            </div>
                            <div class="col-12 d-flex shopping-box"> <a href="checkout.html"
                                    class="ml-auto btn hvr-hover">Place Order</a> </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- End Cart -->

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
    name: "CheckoutView",

}
</script>

<style scoped></style>