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
            <router-link class="navbar-brand" to="/"><img src="../assets/images/logo/logo.png" class="logo" alt=""></router-link>
          </div>
          <!-- End Header Navigation -->

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
              <li class="nav-item active"><router-link class="nav-link" to="/">Home</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/about">About Us</router-link></li>
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

    <!-- Start Slider -->
    <div id="slides-shop" class="cover-slides">
      <div class="slides-container">
        <li class="text-center position-relative">
          <img src="../assets/images/banners/banner-01.jpg" class="my-style w-100 h-100">
          <div class="overlay"></div>
          <div class="overlay-content">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="m-b-20"><strong>Welcome To <br> EduMarket</strong></h1>
                  <p class="m-b-40">Your one-stop shop for trade between students. <br> Join our community
                    to buy and sell any of your used belongings.</p>
                  <p><router-link class="btn" to="/register" style="background-color: #007bff;">Get Started</router-link></p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
    <!-- End Slider -->

    <!-- Start Categories  -->
    <div class="categories-shop" style="margin-top: 240px;">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-all text-center">
              <h1>Some Of Our Categories & Services</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a style="background-color: #007bff; color: #ffff;">Electronics</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a style="background-color: #007bff; color: #ffff;">Appliances</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a style="background-color: #007bff; color: #ffff;">Books</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a style="background-color: #007bff; color: #ffff;">Tutoring</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a style="background-color: #007bff; color: #ffff;">Women HairStyling</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="shop-cat-box">
              <img class="img-fluid" src="../assets/images/categories/products/electronics.jpg" alt="" />
              <a style="background-color: #007bff; color: #ffff;">Men HairStyling</a>
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
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="special-menu text-center">
              <div class="button-group filter-button-group">
                <button class="active" data-filter="*">Top Picks For The Week</button>
                <!-- <button data-filter=".top-featured">Top Picks</button>
                <button data-filter=".best-seller">Best Price</button> -->
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
                    <li style="background-color: #007bff;"><router-link to="#" data-toggle="tooltip" data-placement="right" title="View"><i
                          class="fas fa-eye"></i></router-link></li>
                    <li style="background-color: #007bff;"><router-link to="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                          class="far fa-heart"></i></router-link></li>
                  </ul>
                  <router-link class="cart" to="#" style="background-color: #007bff;">Add to Cart</router-link>
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
                    <li style="background-color: #007bff;"><router-link to="#" data-toggle="tooltip" data-placement="right" title="View"><i
                          class="fas fa-eye"></i></router-link></li>
                    <li style="background-color: #007bff;"><router-link to="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                          class="far fa-heart"></i></router-link></li>
                  </ul>
                  <router-link class="cart" to="#" style="background-color: #007bff;">Add to Cart</router-link>
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
                    <li style="background-color: #007bff;"><router-link to="#" data-toggle="tooltip" data-placement="right" title="View"><i
                          class="fas fa-eye"></i></router-link></li>
                    <li style="background-color: #007bff;"><router-link to="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                          class="far fa-heart"></i></router-link></li>
                  </ul>
                  <router-link class="cart" to="#" style="background-color: #007bff;">Add to Cart</router-link>
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
                    <li style="background-color: #007bff;"><router-link to="#" data-toggle="tooltip" data-placement="right" title="View"><i
                          class="fas fa-eye"></i></router-link></li>
                    <li style="background-color: #007bff;"><router-link to="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                          class="far fa-heart"></i></router-link></li>
                  </ul>
                  <router-link class="cart" to="#" style="background-color: #007bff;">Add to Cart</router-link>
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
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="footer-widget">
                <h4>About EduMarket</h4>
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
                  <button class="btn" type="submit" style="background-color: #007bff;">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer  -->

    <!-- Scroll Buttons -->
    <button class="scroll-button" @click="scrollToTop">Top</button>
    <button class="scroll-button" @click="scrollToBottom">Bottom</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handleSelect(event) {
      const selectedValue = event.target.value;
      if (selectedValue) {
        this.$router.push({ name: selectedValue });
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
.cover-slides {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
}

.overlay-content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}

.my-style {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

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
</style>