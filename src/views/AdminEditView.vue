<template>
    <div class="top-container">
      <div class="top-left">
        <router-link to="/" class="home-button">Home</router-link>
      </div>
      <div class="center-container">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <router-link to="/"><h1 class="my-4" style="margin-top: 20px;">Edit User</h1></router-link>
              <p style="font-size: 13px;">Update user details below</p>
            </div>
          </div>
          <div class="registration-form">
            <div class="col-md-12">
              <form @submit.prevent="updateUser">
                <div>
                  <input type="text" class="new-style" v-model="name" id="name" placeholder="Name" required />
                </div>
                <div>
                  <input type="text" class="new-style" v-model="surname" id="surname" placeholder="Surname" required />
                </div>
                <div>
                  <input type="text" class="new-style" v-model="phone" id="cellphone" placeholder="Cellphone" required />
                </div>
                <div>
                  <input type="email" class="new-style" v-model="email" id="email" placeholder="E-mail" required />
                </div>
                <div>
                  <input type="password" class="new-style" v-model="password" id="password" placeholder="Password" />
                </div>
                <div>
                  <input type="password" class="new-style" v-model="confirmpassword" id="confirmpassword" placeholder="Confirm Password" />
                </div>
                <div>
                  <input type="text" class="new-style" v-model="residence" id="residence" placeholder="Residence" required />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary w-50">Update</button>
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
    name: "AdminEditView",
    data() {
      return {
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",
        confirmpassword: "",
        residence: "",
        role: "USER",
        userId: localStorage.getItem("user_id"), // Get userId from local storage
      };
    },
    methods: {
      async fetchUser() {
        try {
          const res = await axios.get(`http://localhost:8080/edumarket/user/read/${this.userId}`);
          const userData = res.data;
          this.name = userData.firstName;
          this.surname = userData.lastName;
          this.phone = userData.phone;
          this.email = userData.email;
          this.residence = userData.residence;
          this.role = userData.role;
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      },
      async updateUser() {
        if (this.password !== this.confirmpassword) {
          alert("Passwords do not match!");
          return;
        }
  
        const userData = {
          userId: this.userId,
          firstName: this.name,
          lastName: this.surname,
          phone: this.phone,
          email: this.email,
          password: this.password || null,
          residence: this.residence,
          role: this.role,
        };
  
        try {
          const res = await axios.put(`http://localhost:8080/edumarket/user/update/${this.userId}`, userData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          alert("User updated successfully!");
          this.$router.push({ name: "UserListView" });
        } catch (error) {
          console.error("Error updating user:", error);
          alert("An error occurred while updating the user. Please try again later.");
        }
      },
    },
    mounted() {
      this.fetchUser(); // Fetch user details when the component is mounted
    },
  };
  </script>
  
  <style scoped>
  /* Same styles as RegisterView */
  </style>
  