<template>
   <body>
        <div class="cart-box-main">
            <div class="container d-flex justify-content-center align-items-center vh-100">
                <div class="row new-account-login w-100 justify-content-center">
                    <div class="col-sm-6 col-lg-4">
                        <div class="title-left text-center">
                            <a href="index.html" title="Go to Landing page">
                                <h3>LOGIN</h3>
                            </a>
                        </div>
                        <form class="mt-3 review-form-box" id="formLogin">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="InputEmail" class="mb-0">Email</label>
                                    <input type="email" class="form-control" id="InputEmail" placeholder="Enter Email">
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="InputPassword" class="mb-0">Password</label>
                                    <input type="password" class="form-control" id="InputPassword"
                                        placeholder="Password">
                                </div>
                            </div>
                            <button type="submit" class="btn-btn hvr-hover btn-block">Login</button>
                        </form>
                        <div class="to-register" style="margin-top: 10px; display: flex; justify-content: center;">
                            <p>Don't have an account? <a href="register.html" style="color: blue;">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </body>
</template>

<script>
export default {
    name: "LoginView",

}
</script>

<style scoped></style>