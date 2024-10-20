<template>
    <div>
      <!-- Start Main Top -->
      <header class="main-header">
        <!-- Start Navigation -->
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav"
        >
          <div class="container">
            <!-- Start Header Navigation -->
            <div class="navbar-header">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fa fa-bars"></i>
              </button>
              <a class="navbar-brand"
                ><img src="../assets/images/logo/logo.png" class="logo" alt=""
              /></a>
            </div>
            <!-- End Header Navigation -->
  
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbar-menu">
              <ul
                class="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li class="dropdown">
                  <a
                    class="nav-link"
                    to="#"
                    data-toggle="dropdown"
                    style="cursor: pointer"
                    >Products</a
                  >
                  <ul class="dropdown-menu">
                    <li>
                      <router-link :to="{ path: '/products', query: { userId } }"
                        >Shop All Products</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ path: '/electronics', query: { userId } }"
                        >Electronics</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ path: '/books', query: { userId } }"
                        >Books</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ path: '/appliances', query: { userId } }"
                        >Appliances</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ path: '/furniture', query: { userId } }"
                        >Furniture</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ path: '/product-others', query: { userId } }"
                        >Other</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="getRouteWithUserId('/add-product')"
                        >Sell</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a
                    class="nav-link"
                    to="#"
                    data-toggle="dropdown"
                    style="cursor: pointer"
                    >Services</a
                  >
                  <ul class="dropdown-menu">
                    <li>
                      <router-link :to="{ path: '/services', query: { userId } }"
                        >Shop All Services</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ path: '/tutoring', query: { userId } }"
                        >Tutoring</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ path: '/women-hairstyling', query: { userId } }"
                        >Women Hairstyling</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ path: '/men-cuts', query: { userId } }"
                        >Men Hair Cuts</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ path: '/service-others', query: { userId } }"
                        >Other</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="getRouteWithUserId('/add-service')"
                        >Sell</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link
                    :to="getRouteWithUserId('/wishlist')"
                    class="nav-link"
                    >Wishlist</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    :to="getRouteWithUserId('/my-account')"
                    class="nav-link"
                    >My Account</router-link
                  >
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
          <div class="side">
            <a href="#" class="close-side"><i class="fa fa-times"></i></a>
            <li class="cart-box">
              <ul class="cart-list">
                <li>
                  <router-link :to="getRouteWithUserId('#')">
                    <img
                      src="../assets/images/products/electronics/lenovo.jpg"
                      class="cart-thumb"
                      alt=""
                    />
                  </router-link>
                  <h6>
                    <router-link :to="getRouteWithUserId('#')"
                      >Delica omtantur</router-link
                    >
                  </h6>
                  <p>1x - <span class="price">$80.00</span></p>
                </li>
                <li>
                  <router-link :to="getRouteWithUserId('#')">
                    <img
                      src="../assets/images/products/electronics/lenovo.jpg"
                      class="cart-thumb"
                      alt=""
                    />
                  </router-link>
                  <h6>
                    <router-link :to="getRouteWithUserId('#')"
                      >Omnes ocurreret</router-link
                    >
                  </h6>
                  <p>1x - <span class="price">$60.00</span></p>
                </li>
                <li>
                  <router-link :to="getRouteWithUserId('#')">
                    <img
                      src="../assets/images/products/electronics/lenovo.jpg"
                      class="cart-thumb"
                      alt=""
                    />
                  </router-link>
                  <h6>
                    <router-link :to="getRouteWithUserId('#')"
                      >Agam facilisis</router-link
                    >
                  </h6>
                  <p>1x - <span class="price">$40.00</span></p>
                </li>
                <li class="total">
                  <router-link
                    :to="getRouteWithUserId('/cart')"
                    class="btn btn-default hvr-hover btn-cart"
                    >VIEW CART</router-link
                  >
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
              <h2>Product Details</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- End All Title Box -->
  
      <!-- Start Shop Detail  -->
      <div class="shop-detail-box-main" v-if="product">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 col-lg-5 col-md-6">
              <div
                id="carousel-example-1"
                class="single-product-slider carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      :src="`data:image/jpeg;base64,${product.productImage}`"
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-6">
              <div class="single-product-details">
                <h2>{{ product.productName }}</h2>
                <h5>R{{ product.productPrice }}</h5>
                <span class="available-stock"> Condition: {{ product.productCondition }}</span>
                <p class="available-stock">
                  <span> Quantity : {{ product.quantity }} available</span>
                </p>
                <h4>Short Description:</h4>
                <p>{{ product.productDescription }}</p>
                <ul>
                  <li>
                    <div class="form-group quantity-box">
                      <label class="control-label">Quantity</label>
                      <input
                        class="form-control"
                        v-model="quantity"
                        :max="product.quantity"
                        type="number"
                      />
                    </div>
                  </li>
                </ul>
  
                <div class="price-box-bar">
                  <div class="cart-and-bay-btn">
                    <router-link class="btn-primary" data-fancybox-close="" :to="getRouteWithUserId('/cart')"
                      >Add to cart</router-link>
                    <br>
                    <br>
                    <router-link class="btn-primary" :to="getRouteWithUserId('/wishlist')"
                      ><i class="fas fa-heart"></i> Add to wishlist</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="row my-5">
            <div class="card card-outline-secondary my-4">
              <div class="card-header">
                <h2>Product Reviews</h2>
              </div>
              <div class="card-body">
                <div class="media mb-3" v-for="review in product.reviews" :key="review.id">
                  <div class="mr-2">
                    <img
                      class="rounded-circle border p-1"
                      :src="review.userImage"
                      alt="Generic placeholder image"
                    />
                  </div>
                  <div class="media-body">
                    <p>{{ review.comment }}</p>
                    <small class="text-muted"
                      >Posted by {{ review.userName }} on {{ review.date }}</small
                    >
                  </div>
                </div>
                <hr />
                <a href="#" class="btn" style="background-color: #007bff;">Leave a Review</a>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="footer-link-contact">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p>
                        <i class="fas fa-map-marker-alt"></i>Address: Michael I.
                        Days 3756 <br />Preston Street Wichita,<br />
                        KS 67213
                      </p>
                    </li>
                    <li>
                      <p>
                        <i class="fas fa-phone-square"></i>Phone:
                        <a href="tel:+1-888705770">+1-888 705 770</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i class="fas fa-envelope"></i>Email:
                        <a href="mailto:contactinfo@gmail.com"
                          >contactinfo@gmail.com</a
                        >
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="footer-top-box footer-link-contact">
                  <h4>Product Updates</h4>
                  <form class="newsletter-box">
                    <div class="form-group">
                      <input
                        class=""
                        type="email"
                        name="Email"
                        placeholder="Email Address*"
                      />
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
    name: "ProductDetailsView",
    data() {
      return {
        userId: Number(this.$route.query.userId),
        product: null,
        quantity: 1,
      };
    },
    mounted() {
      const productId = this.$route.query.id;
      // Fetch product details from the API
      fetch(`http://localhost:8080/edumarket/product/read/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          this.product = data;
          console.log("Fetched product:", this.product); // Debugging statement
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
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
  
  .box-img-hover {
    width: 100%;
    height: 300px; /* Set a fixed height for the image container */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Hide any overflow */
  }
  
  .fixed-size {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>