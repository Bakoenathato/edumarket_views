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
              <router-link to="/"><h1 class="my-4" style="margin-top: 20px;">Register</h1></router-link>
              <p style="font-size: 13px;">
                Create a new account below
              </p>
            </div>
          </div>
          <div class="registration-form">
            <div class="col-md-12">
              <form @submit.prevent="createUser">
                <div>
                  <input
                    type="text"
                    class="new-style"
                    v-model="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class="new-style"
                    v-model="surname"
                    id="surname"
                    placeholder="Surname"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class="new-style"
                    v-model="phone"
                    id="cellphone"
                    placeholder="Cellphone"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    class="new-style"
                    v-model="email"
                    id="email"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    class="new-style"
                    v-model="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    class="new-style"
                    v-model="confirmpassword"
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class="new-style"
                    v-model="residence"
                    id="residence"
                    placeholder="Residence"
                    required
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary w-50">
                    Register
                  </button>
                </div>
                <p class="mt-3 text-center" style="font-size: 11px">
                  Already have an account?
                  <router-link
                    to="/login"
                    style="color: blue; text-decoration: underline"
                  >Login</router-link>
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
    name: "RegisterView",
    data() {
      return {
        users: [],
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",
        confirmpassword: "",
        residence: "",
        role: "USER",
      };
    },
    methods: {
      async fetchUsers() {
        try {
          const res = await axios.get("http://localhost:8080/edumarket/user/getall");
          this.users = res.data;
          console.log(res.data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      },
      async createUser() {
        if (this.password !== this.confirmpassword) {
          alert("Passwords do not match!");
          return;
        }
  
        const usersData = {
          firstName: this.name,
          lastName: this.surname,
          phone: this.phone,
          email: this.email,
          password: this.password,
          residence: this.residence,
          role: this.role,
        };
  
        try {
          const res = await axios.post("http://localhost:8080/edumarket/user/create", usersData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          this.users = res.data;
          console.log(res.data);
          console.log(usersData);
          alert("Registration successful!");
          this.$router.push({ name: "LoginView" });
        } catch (error) {
          if (error.response && error.response.status === 400) {
            alert("Invalid Email");
          } else {
            console.error("Error creating user:", error);
            alert("An error occurred during registration. Please try again later.");
          }
        }
      },
    },
    mounted() {
      this.fetchUsers();
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
  
  .registration-form {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .col-md-12 {
    width: 100%;
    max-width: 600px;
  }
  
  .registration-form input,
  .registration-form select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    margin-top: 10px;
  }
  
  .registration-form input::placeholder {
    color: #999;
  }
  
  .registration-form button {
    width: 60%;
    padding: 0.75rem;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .registration-form button:hover {
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