<template>
    <div>
      <!-- Start Main Top -->
      <header class="main-header">
        <!-- Start Navigation -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
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
              <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                <li class="dropdown">
                  <a class="nav-link" to="#" data-toggle="dropdown" style="cursor: pointer">Products</a>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link :to="{ path: '/products', query: { category: 'All', userId } }">Shop All Products</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/products', query: { category: 'ELECTRONICS', userId } }">Electronics</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/products', query: { category: 'BOOKS', userId } }">Books</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/products', query: { category: 'APPLIANCE', userId } }">Appliances</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/products', query: { category: 'FURNITURE', userId } }">Furniture</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/products', query: { category: 'OTHER', userId } }">Other</router-link>
                    </li>
                    <li>
                      <router-link :to="getRouteWithUserId('/add-product')">Sell</router-link>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a class="nav-link" to="#" data-toggle="dropdown" style="cursor: pointer">Services</a>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link :to="{ path: '/services', query: { userId } }">Shop All Services</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/tutoring', query: { userId } }">Tutoring</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/women-hairstyling', query: { userId } }">Women Hairstyling</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/men-cuts', query: { userId } }">Men Hair Cuts</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/service-others', query: { userId } }">Other</router-link>
                    </li>
                    <li>
                      <router-link :to="getRouteWithUserId('/add-service')">Sell</router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link :to="getRouteWithUserId('/wishlist')" class="nav-link">Wishlist</router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="getRouteWithUserId('/account')" class="nav-link">My Account</router-link>
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
                    <img src="../assets/images/products/electronics/lenovo.jpg" class="cart-thumb" alt="" />
                  </router-link>
                  <h6>
                    <router-link :to="getRouteWithUserId('#')">Delica omtantur</router-link>
                  </h6>
                  <p>1x - <span class="price">$80.00</span></p>
                </li>
                <li>
                  <router-link :to="getRouteWithUserId('#')">
                    <img src="../assets/images/products/electronics/lenovo.jpg" class="cart-thumb" alt="" />
                  </router-link>
                  <h6>
                    <router-link :to="getRouteWithUserId('#')">Omnes ocurreret</router-link>
                  </h6>
                  <p>1x - <span class="price">$60.00</span></p>
                </li>
                <li>
                  <router-link :to="getRouteWithUserId('#')">
                    <img src="../assets/images/products/electronics/lenovo.jpg" class="cart-thumb" alt="" />
                  </router-link>
                  <h6>
                    <router-link :to="getRouteWithUserId('#')">Agam facilisis</router-link>
                  </h6>
                  <p>1x - <span class="price">$40.00</span></p>
                </li>
                <li class="total">
                  <router-link :to="getRouteWithUserId('/cart')" class="btn btn-default hvr-hover btn-cart">VIEW CART</router-link>
                  <span class="float-right"><strong>Total</strong>: $180.00</span>
                </li>
              </ul>
            </li>
          </div>
        </nav>
        <!-- End Navigation -->
      </header>
  
      <!-- Start All Title Box -->
      <div class="all-title-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Shop All Products</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- End All Title Box -->
  
      <!-- Start Shop Page  -->
      <div class="shop-box-inner">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
              <div class="right-product-box">
                <div class="product-item-filter row">
                  <div class="col-12 col-sm-7 text-center text-sm-left">
                    <p>Showing {{ filteredProducts.length }} results</p>
                  </div>
                </div>
  
                <!-- Display Selected Category -->
                <div class="selected-category">
                  <h4>Selected Category: {{ selectedCategory }}</h4>
                </div>
  
                <div class="product-categorie-box">
                  <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade show active" id="grid-view">
                      <div class="row">
                        <div
                          v-for="product in filteredProducts"
                          :key="product.id"
                          class="col-sm-6 col-md-6 col-lg-4 col-xl-4"
                        >
                          <div class="products-single fix">
                            <div class="box-img-hover">
                              <img
                                :src="`data:image/jpeg;base64,${product.productImage}`"
                                class="img-fluid"
                                :alt="product.productName"
                              />
                              <div class="mask-icon">
                                <ul>
                                  <li style="background-color: #007bff">
                                    <router-link
                                      :to="getProductDetailsRoute(product.id)"
                                      data-toggle="tooltip"
                                      data-placement="right"
                                      title="View"
                                      ><i class="fas fa-eye" style="background-color: #007bff"></i
                                    ></router-link>
                                  </li>
                                  <li style="background-color: #007bff">
                                    <router-link
                                      :to="getRouteWithUserId('/wishlist')"
                                      data-toggle="tooltip"
                                      data-placement="right"
                                      title="Add to Wishlist"
                                      ><i class="far fa-heart"></i
                                    ></router-link>
                                  </li>
                                </ul>
                                <router-link
                                  class="cart"
                                  :to="getRouteWithUserId('/cart')"
                                  style="background-color: #007bff"
                                  >Add to Cart</router-link
                                >
                              </div>
                            </div>
                            <div class="why-text">
                              <router-link :to="getProductDetailsRoute(product.id)">
                                <h4>{{ product.productName }}</h4>
                                <h5>R{{ product.productPrice }}</h5>
                              </router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
              <div class="product-categori">
                <div class="search-product">
                  <form @submit.prevent>
                    <input
                      class="form-control"
                      placeholder="Search here..."
                      type="text"
                      v-model="searchQuery"
                    />
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </form>
                </div>
                <div class="filter-sidebar-left">
                  <div class="title-left">
                    <h3>Categories</h3>
                  </div>
                  <div
                    class="list-group list-group-collapse list-group-sm list-group-tree"
                    id="list-group-men"
                    data-children=".sub-men"
                  >
                    <a
                      v-for="(count, category) in categoryCounts"
                      :key="category"
                      href="#"
                      @click.prevent="selectCategory(category)"
                      class="list-group-item list-group-item-action"
                      :class="{ active: selectedCategory === category }"
                      style="color: #007bff"
                    >
                      {{ category }}
                      <small class="text-muted">({{ count }})</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pagination Controls -->
      <div class="pagination-controls">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
      <!-- End Shop Page -->
  
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
                    <button
                      class="btn"
                      type="submit"
                      style="background-color: #007bff"
                    >
                      Submit
                    </button>
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
  name: "ShopAllProductsView",
  data() {
    return {
      userId: Number(this.$route.query.userId),
      products: [],
      searchQuery: "",
      selectedCategory: this.$route.query.category || "All",
      currentPage: 1,
      itemsPerPage: 6,
    };
  },
  mounted() {
    fetch("http://localhost:8080/edumarket/product/getall")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
        console.log("Fetched products:", this.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  },
  watch: {
    '$route.query.category'(newCategory) {
      this.selectedCategory = newCategory || "All";
    }
  },
  computed: {
    filteredProducts() {
      const userId = Number(this.$route.query.userId);
      const filtered = this.products.filter((product) => {
        const matchesCategory =
          this.selectedCategory === "All" ||
          product.category === this.selectedCategory;
        return (
          product.user.userId !== userId &&
          product.productName
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) &&
          matchesCategory
        );
      });

      this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return filtered.slice(start, end);
    },
    categoryCounts() {
      const counts = { All: this.products.length };
      this.products.forEach((product) => {
        const category = product.category || "Other";
        if (!counts[category]) {
          counts[category] = 0;
        }
        counts[category]++;
      });
      return counts;
    },
  },
  methods: {
    getRouteWithUserId(path) {
      const userId = Number(this.$route.query.userId);
      if (userId) {
        return { path, query: { userId } };
      } else {
        return { path: "/login" };
      }
    },
    getProductDetailsRoute(productId) {
      const userId = Number(this.$route.query.userId);
      return { path: `/product-details`, query: { id: productId, userId } };
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollToBottom() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    },
    selectCategory(category) {
      this.selectedCategory = category;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
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

.selected-category {
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.pagination-controls button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;
}

.pagination-controls button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>