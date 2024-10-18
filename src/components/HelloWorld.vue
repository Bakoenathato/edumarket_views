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
            <a class="navbar-brand" href="index.html"><img src="../assets/images/logo/logo.png" class="logo" alt=""></a>
          </div>
          <!-- End Header Navigation -->

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
              <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
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
                      <li><a href="shop-all-services.html">Shop All Services</a></li>
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
              <li class="login-box" style="margin-top: 25px;">
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

    <!-- Start Slider -->
    <div id="slides-shop" class="cover-slides">
      <div class="slides-container">
        <li class="text-center">
          <img src="../assets/images/banners/banner-01.jpg" alt="">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="m-b-20"><strong>Welcome To <br> EduMarket</strong></h1>
                <p class="m-b-40">Your one-stop shop for trade between students. <br> Join our community
                  to buy and sell any of your used belongings.</p>
                <p><a class="btn hvr-hover" href="#">Get Started</a></p>
              </div>
            </div>
          </div>
        </li>
        <!-- <li class="text-center">
          <img src="../assets/images/banners/banner-01.jpg" alt="">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="m-b-20"><strong>Welcome To <br> EduMarket</strong></h1>
                <p class="m-b-40">Your one-stop shop for trade between students. <br> Join our community
                  to buy and sell any of your used belongings.</p>
                <p><a class="btn hvr-hover" href="#">Get Started</a></p>
              </div>
            </div>
          </div>
        </li>
        <li class="text-center">
          <img src="../assets/images/banners/banner-03.jpg" alt="">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="m-b-20"><strong>Welcome To <br> EduMarket</strong></h1>
                <p class="m-b-40">Your one-stop shop for trade between students. <br> Join our community
                  to buy and sell any of your used belongings.</p>
                <p><a class="btn hvr-hover" href="#">Get Started</a></p>
              </div>
            </div>
          </div>
        </li> -->
      </div>
      <!-- <div class="slides-navigation">
        <a href="#" class="next"><i class="fa fa-angle-right" aria-hidden="true" title="navigate forward"></i></a>
        <a href="#" class="prev"><i class="fa fa-angle-left" aria-hidden="true" title="navigate back"></i></a>
      </div> -->
    </div>
    <!-- End Slider -->

    <!-- Start Categories  -->
    <div class="categories-shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-all text-center">
              <h1>Some Of Our Categories & Services</h1>
              <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p> -->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a class="btn hvr-hover" href="#">Electronics</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a class="btn hvr-hover" href="#">Books</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a class="btn hvr-hover" href="#">Appliances</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a class="btn hvr-hover" href="#">Tutoring</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a class="btn hvr-hover" href="#">Women Hairstyling</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a class="btn hvr-hover" href="#">Men Hair Cuts</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Categories -->

    <!-- Start Products  -->
    <div class="products-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-all text-center">
              <h1>Products</h1>
              <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p> -->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="special-menu text-center">
              <div class="button-group filter-button-group">
                <button class="active" data-filter="*">All</button>
                <button data-filter=".top-featured">Top Picks</button>
                <button data-filter=".best-seller">Best Price</button>
              </div>
            </div>
          </div>
        </div>

        <div class="row special-list">
          <div class="col-lg-3 col-md-6 special-grid best-seller">
            <div class="products-single fix">
              <div class="box-img-hover">
                <img src="../assets/images/products/electronics/lenovo.jpg" class="img-fluid" alt="Image">
                <div class="mask-icon">
                  <ul>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i
                          class="fas fa-eye"></i></a></li>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                          class="far fa-heart"></i></a></li>
                  </ul>
                  <a class="cart" href="#">Add to Cart</a>
                </div>
              </div>
              <div class="why-text">
                <h4>Name of the product</h4>
                <h5> R7.79</h5>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 special-grid top-featured">
            <div class="products-single fix">
              <div class="box-img-hover">
                <img src="../assets/images/products/electronics/lenovo.jpg" class="img-fluid" alt="Image">
                <div class="mask-icon">
                  <ul>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i
                          class="fas fa-eye"></i></a></li>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                          class="far fa-heart"></i></a></li>
                  </ul>
                  <a class="cart" href="#">Add to Cart</a>
                </div>
              </div>
              <div class="why-text">
                <h4>Name of the product</h4>
                <h5> R9.79</h5>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 special-grid top-featured">
            <div class="products-single fix">
              <div class="box-img-hover">
                <img src="../assets/images/products/electronics/lenovo.jpg" class="img-fluid" alt="Image">
                <div class="mask-icon">
                  <ul>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i
                          class="fas fa-eye"></i></a></li>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                          class="far fa-heart"></i></a></li>
                  </ul>
                  <a class="cart" href="#">Add to Cart</a>
                </div>
              </div>
              <div class="why-text">
                <h4>Name of the product</h4>
                <h5> R10.79</h5>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 special-grid best-seller">
            <div class="products-single fix">
              <div class="box-img-hover">
                <img src="../assets/images/products/electronics/lenovo.jpg" class="img-fluid" alt="Image">
                <div class="mask-icon">
                  <ul>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i
                          class="fas fa-eye"></i></a></li>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                          class="far fa-heart"></i></a></li>
                  </ul>
                  <a class="cart" href="#">Add to Cart</a>
                </div>
              </div>
              <div class="why-text">
                <h4>Name of the product</h4>
                <h5> R15.79</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Products  -->

    <!-- Start Footer  -->
    <footer>
      <div class="footer-main">
        <div class="container">
          <!-- <hr> -->
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="footer-widget">
                <h4>About Freshshop</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="footer-link-contact">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <p><i class="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br>Preston Street
                      Wichita,<br> KS 67213 </p>
                  </li>
                  <li>
                    <p><i class="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
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
  </body>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
</style>
