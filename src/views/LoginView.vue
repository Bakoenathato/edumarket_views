<template>
    <div class="top-container">
      <div class="top-left">
        <router-link to="/" class="home-button">
          Home
        </router-link>
      </div>
      <div class="center-container">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <router-link to="/"><h1 class="my-4" style="margin-top: 20px; margin-bottom: 20px">Login</h1></router-link>
              <p style="font-size: 13px; margin-top: 10px">
                Enter your credentials below
              </p>
            </div>
          </div>
          <div class="login-form">
            <div class="col-md-12">
              <form class="mt-3 review-form-box" id="formLogin" @submit.prevent="LoginData">
                <div>
                  <input
                    type="email"
                    class="new-style"
                    id="email"
                    v-model="user.email"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    class="new-style"
                    v-model="user.password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary w-50">
                    Login
                  </button>
                </div>
                <p class="mt-3 text-center" style="font-size: 11px">
                  Don't have an account?
                  <router-link
                    to="/register"
                    style="color: blue; text-decoration: underline"
                  >Register</router-link>
                </p>
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
  name: "LoginView",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async LoginData() {
      try {
        const response = await axios.post(
          "http://localhost:8080/edumarket/user/login",
          this.user
        );
        const { data } = response;
        if (data.message === "Email not exists") {
          alert("Email does not exists");
        } else if (data.message === "Login Success") {
          const response = await axios.get(
            "http://localhost:8080/edumarket/user/getall"
          );
         
          const loggedInUser = response.data.find(u => u.email === this.user.email && u.password === this.user.password);
          console.log(loggedInUser);

          if (loggedInUser.role === "ADMIN"){
            alert("Admin LogIn Successful");
            this.$router.push({ name: "UserAddProductView", query: { userId: loggedInUser.userId} });
          }
          else{
            alert("User LogIn Successful");
            this.$router.push({ name: "ShopAllProductsView", query: { userId: loggedInUser.userId } });
          }  
        } else {
          alert("Incorrect Email or Password not match");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("Error, please try again");
      }
    },
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
    padding-top: 20px;
    width: 35%;
    border-radius: 25px;
  }
  
  .login-form {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .col-md-12 {
    width: 100%;
    max-width: 600px;
  }
  
  .login-form input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    margin-top: 10px;
  }
  
  .login-form input::placeholder {
    color: #999;
  }
  
  .login-form button {
    width: 60%;
    padding: 0.75rem;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .login-form button:hover {
    background-color: #0056b3;
  }
  
  .new-style:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
  
  .new-style {
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  
  .new-style {
    display: block;
    margin: 0 auto;
    width: 75%;
  }
  </style>