<!-- 
      <template>
        <div>
          <header class="main-header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
              <div class="container">
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
                    ><img src="../assets/images/logo/logo.png" class="logo" alt="Logo"
                  /></a>
                </div>
              </div>
            </nav>
          </header>
      
          
          <div class="container mt-4">
            <h2>User List</h2>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Residence</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.userId">
                  <td>{{ user.userId }}</td>
                  <td>{{ user.firstName }}</td>
                  <td>{{ user.lastName }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.phone }}</td>
                  <td>{{ user.residence }}</td>
                  <td>{{ user.role }}</td>
                  <td>
                    <button class="btn btn-primary" @click="editUser(user.userId)">Edit</button>
                    <button class="btn btn-danger" @click="deleteUser(user.userId)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
      
      <script>
      import axios from 'axios';
      
      export default {
        data() {
          return {
            users: [], // To store the list of users
          };
        },
        mounted() {
          // Fetch users when the component is mounted
          this.getAllUsers();
        },
        methods: {
          async getAllUsers() {
            try {
              const response = await axios.get('http://localhost:8080/edumarket/user/getall');
              this.users = response.data; // Store the response data in the 'users' array
            } catch (error) {
              console.error('Error fetching users:', error);
            }
          },
          editUser(userId) {
            // Redirect to AdminEditView with the userId as a route parameter
            this.$router.push({ name: 'AdminEditView', params: { userId: userId } });
          },
          async deleteUser(userId) {
            try {
              // Logic to delete the user (send a DELETE request to the backend)
              await axios.delete(`http://localhost:8080/edumarket/user/delete/${userId}`);
              // Filter out the deleted user from the list
              this.users = this.users.filter(user => user.userId !== userId);
              alert(`User with ID: ${userId} deleted successfully`);
            } catch (error) {
              console.error('Error deleting user:', error);
            }
          },
        },
      };
      </script>
      
      <style scoped>
      .container {
        padding-top: 20px;
      }
      
      table {
        width: 100%;
        margin-top: 20px;
      }
      
      th,
      td {
        padding: 10px;
        text-align: left;
      }
      
      button {
        margin-right: 10px;
      }
      </style>
      
      
      
       -->
       <template>
        <div>
          <header class="main-header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
              <div class="container">
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
                  <a class="navbar-brand">
                    <img src="../assets/images/logo/logo.png" class="logo" alt="Logo" />
                  </a>
                </div>
              </div>
            </nav>
          </header>
      
          <div class="container mt-4">
            <h2>User List</h2>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Residence</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.userId">
                  <td>{{ user.userId }}</td>
                  <td>{{ user.firstName }}</td>
                  <td>{{ user.lastName }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.phone }}</td>
                  <td>{{ user.residence }}</td>
                  <td>{{ user.role }}</td>
                  <td>
                    <button class="btn btn-primary" @click="editUser(user.userId)">Edit</button>
                    <button class="btn btn-danger" @click="deleteUser(user.userId)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
      
      <script>
      import axios from 'axios';
      
      export default {
        name: "AdminUserView",
        data() {
          return {
            users: [],
            userId: null,
          };
        },
        mounted() {
          this.userId = localStorage.getItem("user_id");
          console.log("User ID retrieved from localStorage:", this.userId);
          if (!this.userId) {
            alert("User not logged in. Redirecting to login page.");
            this.$router.push({ name: "LoginView" });
          } else {
            this.getAllUsers();
          }
        },
        methods: {
          async getAllUsers() {
            try {
              const response = await axios.get('http://localhost:8080/edumarket/user/getall');
              this.users = response.data; // Store the response data in the 'users' array
            } catch (error) {
              console.error('Error fetching users:', error);
            }
          },
          editUser(userId) {
            this.$router.push({ name: 'AdminEditView', params: { userId: userId } });
          },
          async deleteUser(userId) {
            try {
              await axios.delete(`http://localhost:8080/edumarket/user/delete/${userId}`);
              this.users = this.users.filter(user => user.userId !== userId);
              alert(`User with ID: ${userId} deleted successfully`);
            } catch (error) {
              console.error('Error deleting user:', error);
            }
          },
        },
      };
      </script>
      
      <style scoped>
      .container {
        padding-top: 20px;
      }
      
      table {
        width: 100%;
        margin-top: 20px;
      }
      
      th,
      td {
        padding: 10px;
        text-align: left;
      }
      
      button {
        margin-right: 10px;
      }
      </style>
      
      