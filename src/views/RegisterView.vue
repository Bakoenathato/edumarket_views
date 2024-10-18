<template>

    <body>
        <div class="cart-box-main">
            <div class="container d-flex justify-content-center align-items-center vh-100">
                <div class="row new-account-login w-100 justify-content-center">
                    <div class="col-sm-6 col-lg-4">
                        <div class="title-left text-center">
                            <a href="index.html" title="Go to Landing page">
                                <h3>Register</h3>
                            </a>
                        </div>
                        <form class="mt-3 review-form-box" id="formLogin">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="InputEmail" class="mb-0">Firstname</label>
                                    <input type="email" class="form-control" id="InputEmail"
                                        placeholder="Enter Firstname">
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="InputPassword" class="mb-0">Lastname</label>
                                    <input type="password" class="form-control" id="InputPassword"
                                        placeholder=" Enter Lastname">
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="InputPassword" class="mb-0">Cell phone no</label>
                                    <input type="password" class="form-control" id="InputPassword"
                                        placeholder=" Enter Number">
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="InputEmail" class="mb-0">Email</label>
                                    <input type="email" class="form-control" id="InputEmail" placeholder="Enter Email">
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="InputPassword" class="mb-0">Password</label>
                                    <input type="password" class="form-control" id="InputPassword"
                                        placeholder="Password">
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="InputPassword" class="mb-0">Confirm Password</label>
                                    <input type="password" class="form-control" id="InputPassword"
                                        placeholder="Confirm Password">
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="InputPassword" class="mb-0">Residence</label>
                                    <input type="password" class="form-control" id="InputPassword"
                                        placeholder=" Enter Residence">
                                </div>
                            </div>
                            <button type="submit" class="btn-btn hvr-hover btn-block">Register</button>
                        </form>
                        <div class="to-register" style="margin-top: 10px; display: flex; justify-content: center;">
                            <p>Already registered? <a href="signin.html" style="color: blue;">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: "RegisterView",

}
</script>

<style scoped></style>