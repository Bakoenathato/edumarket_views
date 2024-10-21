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
                    <router-link
                      :to="{
                        path: '/products',
                        query: { category: 'All', userId },
                      }"
                      >Shop All Products</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        path: '/products',
                        query: { category: 'ELECTRONICS', userId },
                      }"
                      >Electronics</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        path: '/products',
                        query: { category: 'BOOKS', userId },
                      }"
                      >Books</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        path: '/products',
                        query: { category: 'APPLIANCE', userId },
                      }"
                      >Appliances</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        path: '/products',
                        query: { category: 'FURNITURE', userId },
                      }"
                      >Furniture</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        path: '/products',
                        query: { category: 'OTHER', userId },
                      }"
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
                    <router-link
                      :to="{
                        path: '/services',
                        query: { serviceCategory: 'All', userId },
                      }"
                      >Shop All Services</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        path: '/services',
                        query: { serviceCategory: 'TUTORING', userId },
                      }"
                      >Tutoring</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        path: '/services',
                        query: { serviceCategory: 'WOMENHAIRSTYLING', userId },
                      }"
                      >Women Hairstyling</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        path: '/services',
                        query: { serviceCategory: 'MENHAIRCUTS', userId },
                      }"
                      >Men Hair Cuts</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        path: '/services',
                        query: { serviceCategory: 'OTHER', userId },
                      }"
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
                  :to="getRouteWithUserId('/account')"
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
              <li v-for="cartItem in cartItems" :key="cartItem.cartId">
                <router-link :to="getRouteWithUserId('#')">
                  <img
                    :src="cartItem.product.productImage"
                    class="cart-thumb"
                    alt=""
                  />
                </router-link>
                <h6>
                  <router-link :to="getRouteWithUserId('#')">{{
                    cartItem.product.productName
                  }}</router-link>
                </h6>
                <p>
                  {{ cartItem.quantity }}x -
                  <span class="price">{{ cartItem.product.productPrice }}</span>
                </p>
              </li>
              <li class="total">
                <router-link
                  :to="getRouteWithUserId('/cart')"
                  class="btn btn-default hvr-hover btn-cart"
                  >VIEW CART</router-link
                >
                <span class="float-right"
                  ><strong>Total</strong>: {{ cartTotal }}</span
                >
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
            <h2>Cart</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- End All Title Box -->

    <!-- Start Shop Page  -->
    <div class="cart-box-main" style="margin-top: 20px">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="table-main table-responsive">
              <table class="table">
                <thead style="background-color: #007bff">
                  <tr>
                    <th>Images</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cartItem in cartItems" :key="cartItem.cartId">
                    <td class="thumbnail-img">
                      <a href="#">
                        <img
                          class="img-fluid"
                          :src="`data:image/jpeg;base64,${cartItem.product.productImage}`"
                          alt=""
                        />
                      </a>
                    </td>
                    <td class="name-pr">
                      <a href="#">{{ cartItem.product.productName }}</a>
                    </td>
                    <td class="price-pr">
                      <p>R{{ cartItem.product.productPrice }}</p>
                    </td>
                    <td class="quantity-box">
                      <input
                        type="number"
                        size="4"
                        v-model="cartItem.quantity"
                        min="0"
                        step="1"
                        class="c-input-text qty text"
                      />
                      <!-- @change="updateCartItem(cartItem)" -->
                    </td>
                    <td class="total-pr">
                      <p>
                        R{{ cartItem.product.productPrice * cartItem.quantity }}
                      </p>
                    </td>
                    <td class="remove-pr">
                      <a
                        href="#"
                        @click.prevent="confirmRemoveCartItem(cartItem.cartId)"
                      >
                        <i class="fas fa-times" style="color: red"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="row my-5" style="display: flex; justify-content: center">
          <div>
            <div class="update-box">
              <input
                value="Update Cart"
                type="submit"
                style="background-color: #007bff"
                @click="updateCart"
              />
            </div>
          </div>
        </div>

        <div class="row my-5">
          <div class="col-lg-8 col-sm-12"></div>
          <div class="col-lg-4 col-sm-12">
            <div class="order-box">
              <h3>Order summary</h3>
              <hr />
              <div class="d-flex gr-total">
                <h5>Grand Total</h5>
                <div class="ml-auto h5">R{{ cartTotal }}</div>
              </div>
              <hr />
            </div>
          </div>
          <div class="col-12 d-flex shopping-box">
            <a
              href="checkout.html"
              class="ml-auto btn-primary"
              @click.prevent="confirmCheckout"
              >Checkout</a
            >
          </div>
        </div>
      </div>
    </div>
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
  name: "CartView",
  data() {
    return {
      userId: Number(this.$route.query.userId),
      cartItems: [],
      userDetails: null,
    };
  },
  mounted() {
    this.fetchCartItems();
    this.fetchUserDetails();
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce(
        (total, item) => total + item.product.productPrice * item.quantity,
        0
      );
    },
  },
  methods: {
    async fetchCartItems() {
      try {
        const userId = this.userId;
        const response = await fetch(
          `http://localhost:8080/edumarket/productcart/items?userId=${userId}`
        );
        const cartItems = await response.json();

        const productPromises = cartItems.map(async (cartItem) => {
          const productResponse = await fetch(
            `http://localhost:8080/edumarket/product/read/${cartItem.product.id}`
          );
          const product = await productResponse.json();
          cartItem.product = product;

          const productUserResponse = await fetch(
            `http://localhost:8080/edumarket/user/read/${product.user.userId}`
          );
          const productUser = await productUserResponse.json();
          cartItem.product.user = productUser;

          const cartUserResponse = await fetch(
            `http://localhost:8080/edumarket/user/read/${cartItem.user.userId}`
          );
          const cartUser = await cartUserResponse.json();
          cartItem.user = cartUser;

          // Convert binary data to base64 if necessary
          if (
            product.productImage &&
            product.productImage instanceof Uint8Array
          ) {
            cartItem.product.productImage = await this.convertBinaryToBase64(
              product.productImage
            );
          }

          return cartItem;
        });

        this.cartItems = await Promise.all(productPromises);
        console.log("Fetched cart items with products:", this.cartItems); // Debugging statement
      } catch (error) {
        console.error("Error fetching cart items:", error);
        alert("An error occurred while fetching the cart items.");
      }
    },
    async fetchUserDetails() {
      try {
        const userId = this.userId;
        const response = await fetch(
          `http://localhost:8080/edumarket/user/read/${userId}`
        );
        this.userDetails = await response.json();
      } catch (error) {
        console.error("Error fetching user details:", error);
        alert("An error occurred while fetching the user details.");
      }
    },
    async convertBinaryToBase64(binaryData) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(new Blob([binaryData]));
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
    async updateCartItem(cartItem) {
      try {
        const requestBody = {
          ...cartItem,
          quantity: cartItem.quantity,
        };

        const response = await fetch(
          `http://localhost:8080/edumarket/productcart/update`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (response.ok) {
          alert("Cart item updated!");
        } else {
          alert("Failed to update cart item.");
        }
      } catch (error) {
        console.error("Error updating cart item:", error);
        alert("An error occurred while updating the cart item.");
      }
    },
    async confirmRemoveCartItem(cartId) {
      if (
        window.confirm(
          "Are you sure you want to remove this item from the cart?"
        )
      ) {
        await this.removeCartItem(cartId);
      }
    },
    async removeCartItem(cartId) {
      try {
        const response = await fetch(
          `http://localhost:8080/edumarket/productcart/delete/${cartId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          this.cartItems = this.cartItems.filter(
            (item) => item.cartId !== cartId
          );
          alert("Cart item removed!");
        } else {
          alert("Failed to remove cart item.");
        }
      } catch (error) {
        console.error("Error removing cart item:", error);
        alert("An error occurred while removing the cart item.");
      }
    },
    async updateCart() {
      if (window.confirm("Are you sure you want to update the cart?")) {
        for (const cartItem of this.cartItems) {
          await this.updateCartItem(cartItem);
        }
      }
    },
    async validateCartQuantities() {
      const validationPromises = this.cartItems.map(async (cartItem) => {
        const response = await fetch(
          `http://localhost:8080/edumarket/product/read/${cartItem.product.id}`
        );
        const product = await response.json();
        if (cartItem.quantity > product.quantity) {
          throw new Error(`Insufficient stock for ${product.productName}`);
        }
      });

      return Promise.all(validationPromises);
    },
    async createOrder() {
      if (!this.userDetails) {
        alert("User details not loaded. Please try again.");
        return;
      }

      // Assuming the backend expects a single ProductCart object
      const productCart = this.cartItems.map((cartItem) => ({
        cartId: cartItem.cartId,
        user: cartItem.user,
        product: {
          id: cartItem.product.id,
          productName: cartItem.product.productName,
          productDescription: cartItem.product.productDescription,
          productPrice: cartItem.product.productPrice,
          quantity: cartItem.product.quantity,
          productImage: cartItem.product.productImage,
          category: cartItem.product.category,
          productCondition: cartItem.product.productCondition,
          user: cartItem.product.user,
        },
        quantity: cartItem.quantity,
      }));

      const order = {
        orderId: null, // Assuming the backend will generate the order ID
        user: this.userDetails,
        productCart: productCart[0], // Send the first cart item for now
        orderDate: new Date().toISOString().split("T")[0],
        orderTotal: this.cartTotal,
      };

      try {
        console.log("Order to be created:", order); // Debugging statement
        const response = await fetch(
          `http://localhost:8080/edumarket/orders/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to create order.");
        }

        const data = await response.json();
        await this.clearCart(); // Clear the cart in the database
        alert(
          "Your order has been placed and you will be contacted by the seller in due course."
        );
        this.cartItems = []; // Clear the cart on the page
      } catch (error) {
        console.error("Error creating order:", error);
        alert("An error occurred while creating the order.");
      }
    },
    async clearCart() {
      try {
        const deletePromises = this.cartItems.map(async (cartItem) => {
          const response = await fetch(
            `http://localhost:8080/edumarket/productcart/delete/${cartItem.cartId}`,
            {
              method: "DELETE",
            }
          );

          if (!response.ok) {
            throw new Error(
              `Failed to delete cart item with ID ${cartItem.cartId}`
            );
          }
        });

        await Promise.all(deletePromises);
      } catch (error) {
        console.error("Error clearing cart:", error);
        alert("An error occurred while clearing the cart.");
      }
    },
    async confirmCheckout() {
      try {
        await this.validateCartQuantities();
        if (window.confirm("Are you sure you want to proceed to checkout?")) {
          await this.createOrder();
        }
      } catch (error) {
        alert(error.message);
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
