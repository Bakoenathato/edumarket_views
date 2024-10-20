<template>
  <div class="top-container">
    <div class="top-left">
      <button @click="goBack" class="home-button">Back</button>
    </div>
    <div class="center-container">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <router-link to="/shop-all-products">
              <h1 class="my-4" style="margin-top: 20px">Add Product</h1>
            </router-link>
          </div>
        </div>
        <div class="product-form">
          <div class="col-md-12">
            <form @submit.prevent="createProduct" class="mt-3 review-form-box">
              <div>
                <input
                  type="text"
                  class="new-style"
                  v-model="productName"
                  id="productName"
                  placeholder="Enter Product Name"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  class="new-style"
                  v-model="price"
                  id="price"
                  placeholder="Enter Price"
                  required
                />
              </div>
              <div>
                <select
                  id="condition"
                  v-model="condition"
                  class="new-style"
                  required
                >
                  <option value="">Select Condition</option>
                  <option value="NEW">New</option>
                  <option value="LIKENEW">Like New</option>
                  <option value="GOOD">Good</option>
                  <option value="FAIR">Fair</option>
                </select>
              </div>
              <div>
                <input
                  type="number"
                  min="1"
                  v-model="quantity"
                  class="new-style"
                  id="quantity"
                  placeholder="Enter Quantity"
                  required
                />
              </div>
              <div>
                <select
                  id="category"
                  v-model="category"
                  class="new-style"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="APPLIANCE">Appliances</option>
                  <option value="ELECTRONICS">Electronics</option>
                  <option value="FURNITURE">Furniture</option>
                  <option value="BOOKS">Books</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  id="description"
                  v-model="description"
                  rows="5"
                  class="new-style"
                  placeholder="Enter Product Description"
                  required
                ></textarea>
              </div>
              <div>
                <input
                  type="file"
                  id="image"
                  @change="handleImageChange"
                  accept="image/*"
                  class="new-style-file"
                />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary w-50">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserAddProductView",
  data() {
    return {
      userId: Number(this.$route.query.userId),
      productName: "",
      price: "",
      condition: "",
      quantity: 1,
      category: "",
      description: "",
      image: null,
    };
  },
  methods: {
    async fetchUserDetails() {
      try {
        const res = await axios.get(`http://localhost:8080/edumarket/user/read/${this.userId}`);
        this.user = res.data;
        console.log("Fetched user details:", this.user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    },
    handleImageChange(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    convertToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    },
    async createProduct(event) {
      let hexImage = null;
      if (this.image) {
        hexImage = await this.convertToBase64(this.image);
      }

      const productData = {
        productName: this.productName,
        productPrice: this.price,
        productCondition: this.condition,
        quantity: this.quantity,
        category: this.category,
        productDescription: this.description,
        productImage: hexImage,
        user: this.user,
      };
      console.log("Product added:", productData);
      try {
        const response = await axios.post(
          "http://localhost:8080/edumarket/product/create",
          productData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Product added:", productData);
        const userId = response.data.user.userId;
        alert("Produuct Added successful!");
        this.$router.push({ name: "ShopAllProductsView" , query: { userId  } });
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert("Invalid Product");
        } else {
          console.error("Error adding product:", error);
          alert(
            "An error occurred during adding. Please try again later."
          );
        }
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.fetchUserDetails();
  },
};
</script>

<style scoped>
.top-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height to center vertically */
  position: relative;
}

.top-left {
  position: absolute;
  top: 20px;
  left: 20px;
}

.home-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.home-button:hover {
  background-color: #0056b3;
}

.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.container {
  background-color: #fff;
  padding: 20px;
  width: 35%;
  border-radius: 25px;
}

.product-form {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-md-12 {
  width: 100%;
  max-width: 600px;
}

.product-form input,
.product-form select,
.product-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  margin-top: 10px;
}

.product-form input::placeholder,
.product-form textarea::placeholder {
  color: #999;
}

.product-form button {
  width: 60%;
  padding: 0.75rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.product-form button:hover {
  background-color: #0056b3;
}

.new-style:focus,
.new-style-file:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

.new-style,
.new-style-file {
  transition: border-color 0.3s, box-shadow 0.3s;
}

.new-style,
.new-style-file {
  display: block;
  margin: 0 auto;
  width: 75%;
}
</style>
