<template>
  <div class="top-left">
    <router-link
      :to="{ path: '/account', query: { userId } }"
      class="home-button"
    >
      Back to MyAccount
    </router-link>
  </div>
  <div class="center-container">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <router-link to="/editProfile"
            ><h1 class="my-4" style="margin-top: 20px">
              Edit Profile
            </h1></router-link
          >
        </div>
      </div>
      <div class="registration-form">
        <div class="col-md-12">
          <form @submit.prevent="updateUser">
            <div>
              <input
                type="text"
                class="new-style"
                v-model="firstName"
                id="firstName"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                class="new-style"
                v-model="lastName"
                id="lastName"
                placeholder="Last Name"
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
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditProfileView",

  data() {
    return {
      userId: this.$route.query.userId,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmpassword: "",
      residence: "",
      role: "USER",
    };
  },

  created() {
    const userId = this.$route.query.userId;
    if (userId) {
      this.fetchUserData(userId);
    } else {
      this.$router.push("/login");
    }
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

    async fetchUserData(userId) {
      try {
        const res = await axios.get(
          `http://localhost:8080/edumarket/user/read/${userId}`
        );
        // this.user = res.data;

        const userData = res.data;

        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.phone = userData.phone;
        this.email = userData.email;
        this.residence = userData.residence;
        this.role = userData.role;

        // Don't populate password fields for security reasons
        this.password = "";
        this.confirmpassword = "";
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    },

    async updateUser() {
      try {
        const updatedUserData = {
          userId: this.$route.query.userId,
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          email: this.email,
          password: this.password,
          residence: this.residence,
          role: this.role,
        };

        const res = await axios.put(
          `http://localhost:8080/edumarket/user/update/${this.$route.query.userId}`,
          updatedUserData
        );
        console.log("User updated successfully:", res.data);
        this.$router.push("/account");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
  },
};

// export default {
//   name: "EditProfileView",

//   data() {
//     return {
//       user: {
//         name: "",
//         surname: "",
//         phone: "",
//         email: "",
//         password: "",
//         confirmpassword: "",
//         residence: "",
//         role: "USER",
//       },
//     };
//   },

//   methods: {
//     getRouteWithUserId(path) {
//       const userId = Number(this.$route.query.userId);
//       if (userId) {
//         return { path, query: { userId } };
//       } else {
//         return { path: "/login" };
//       }
//     }

//     async fetchUserData() {
//         try {
//             const res = await axios.get(
//                 `http://localhost/edumarket/user/read/${this.userId}`
//             );

//             const user = res.data;

//             this.name = user.firstName;
//             this.surname = user.lastName;
//             this.phone = user.phone
//             this.email = user.email;
//             this.password = user.password;
//             this.residence = user.residence;

//         } catch (error) {
//             console.error("Error fetching user details:", error);
//         }
//     }

//   },
// };
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
