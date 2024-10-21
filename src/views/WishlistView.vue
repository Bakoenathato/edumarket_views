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
              <a class="navbar-brand"><img src="../assets/images/logo/logo.png" class="logo" alt="" /></a>
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
                      <router-link :to="{ path: '/services', query: { serviceCategory: 'All', userId } }">Shop All Services</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/services', query: { serviceCategory: 'TUTORING', userId } }">Tutoring</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/services', query: { serviceCategory: 'WOMENHAIRSTYLING', userId } }">Women Hairstyling</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/services', query: { serviceCategory: 'MENHAIRCUTS', userId } }">Men Hair Cuts</router-link>
                    </li>
                    <li>
                      <router-link :to="{ path: '/services', query: { serviceCategory: 'OTHER', userId } }">Other</router-link>
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
        </nav>
        <!-- End Navigation -->
      </header>
  
      <!-- Start All Title Box -->
      <div class="all-title-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Wishlist</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- End All Title Box -->
  
      <!-- Start Shop Page  -->
      <div class="wishlist-box-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="table-main table-responsive">
                <table class="table">
                  <thead style="background-color: #007bff;">
                    <tr>
                      <th>Images</th>
                      <th>Product Name</th>
                      <th>Unit Price</th>
                      <th>Add Item</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in wishlistItems" :key="item.product.id">
                      <td class="thumbnail-img">
                        <a :href="`/product-details?id=${item.product.id}&userId=${userId}`">
                          <img class="img-fluid" :src="`data:image/jpeg;base64,${item.product.productImage}`" alt="" />
                        </a>
                      </td>
                      <td class="name-pr">
                        <a :href="`/product-details?id=${item.product.id}&userId=${userId}`">{{ item.product.productName }}</a>
                      </td>
                      <td class="price-pr">
                        <p>R{{ item.product.productPrice }}</p>
                      </td>
                      <td class="add-pr">
                        <button class="btn-btn hvr-hover" @click="addToCart(item)" style="background-color: #007bff;">Add to Cart</button>
                      </td>
                      <td class="remove-pr">
                        <button @click="removeFromWishlist(item.wishlistId)">
                          <i class="fas fa-times" style="color: red;"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="footer-link-contact">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p><i class="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br>Preston Street Wichita,<br> KS 67213</p>
                    </li>
                    <li>
                      <p><i class="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                    </li>
                    <li>
                      <p><i class="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
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
    name: "WishlistView",
    data() {
      return {
        userId: Number(this.$route.query.userId),
        wishlistItems: [],
      };
    },
    mounted() {
      this.fetchWishlistItems();
    },
    methods: {
      fetchWishlistItems() {
        const userId = this.userId;
        fetch(`http://localhost:8080/edumarket/wishlist/wishlistitems?userId=${userId}`)
          .then((response) => response.json())
          .then((wishlistItems) => {
            const productPromises = wishlistItems.map((wishlistItem) =>
              fetch(`http://localhost:8080/edumarket/product/read/${wishlistItem.product.id}`)
                .then((response) => response.json())
                .then((product) => {
                  wishlistItem.product = product;
                  return wishlistItem;
                })
            );
            return Promise.all(productPromises);
          })
          .then((wishlistItemsWithProducts) => {
            this.wishlistItems = wishlistItemsWithProducts;
            console.log("Fetched wishlist items with products:", this.wishlistItems); // Debugging statement
          })
          .catch((error) => {
            console.error("Error fetching wishlist items:", error);
            alert("An error occurred while fetching the wishlist items.");
          });
      },
      getRouteWithUserId(path) {
        const userId = Number(this.$route.query.userId);
        if (userId) {
          return { path, query: { userId } };
        } else {
          return { path: "/login" };
        }
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      scrollToBottom() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      },
      addToCart(item) {
        const userId = this.userId;
        const product = item.product;
        const quantity = 1; // Default quantity to add to cart
  
        if (!userId) {
          this.$router.push({ path: "/login" });
          return;
        }
  
        if (!window.confirm("Are you sure you want to add this product to the cart?")) {
          return;
        }
  
        // Fetch the cart records for the user
        fetch(`http://localhost:8080/edumarket/productcart/items?userId=${userId}`)
          .then((response) => response.json())
          .then((cartItems) => {
            const existingCartItem = cartItems.find((cartItem) => cartItem.product.id === product.id);
  
            if (existingCartItem) {
              // Update the quantity of the existing cart item
              const updatedQuantity = existingCartItem.quantity + quantity;
              const requestBody = {
                ...existingCartItem,
                quantity: updatedQuantity,
              };
  
              fetch(`http://localhost:8080/edumarket/productcart/update`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
              })
                .then((response) => {
                  if (response.ok) {
                    alert("Product quantity updated in cart!");
                    this.removeFromWishlist(item.wishlistId); // Remove from wishlist after adding to cart
                  } else {
                    alert("Failed to update product quantity in cart.");
                  }
                })
                .catch((error) => {
                  console.error("Error updating product quantity in cart:", error);
                  alert("An error occurred while updating the product quantity in the cart.");
                });
            } else {
              // Add a new cart item
              const requestBody = {
                user: { userId: this.userId },
                product: product,
                quantity: quantity,
              };
  
              fetch("http://localhost:8080/edumarket/productcart/create", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
              })
                .then((response) => {
                  if (response.ok) {
                    alert("Product added to cart!");
                    this.removeFromWishlist(item.wishlistId); // Remove from wishlist after adding to cart
                  } else {
                    alert("Failed to add product to cart.");
                  }
                })
                .catch((error) => {
                  console.error("Error adding product to cart:", error);
                  alert("An error occurred while adding the product to the cart.");
                });
            }
          })
          .catch((error) => {
            console.error("Error fetching cart items:", error);
            alert("An error occurred while fetching the cart items.");
          });
      },
      removeFromWishlist(wishlistItemId) {
        if (!window.confirm("Are you sure you want to remove this item from the wishlist?")) {
          return;
        }
  
        fetch(`http://localhost:8080/edumarket/wishlist/delete/${wishlistItemId}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              this.wishlistItems = this.wishlistItems.filter((item) => item.wishlistId !== wishlistItemId);
              alert("Wishlist item removed!");
            } else {
              alert("Failed to remove wishlist item.");
            }
          })
          .catch((error) => {
            console.error("Error removing wishlist item:", error);
            alert("An error occurred while removing the wishlist item.");
          });
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
    height: 300px;
    /* Set a fixed height for the image container */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* Hide any overflow */
  }
  
  .fixed-size {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>