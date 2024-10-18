<template>

<body>
    <div class="cart-box-main">
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="row new-account-login w-100 justify-content-center">
                <div class="col-sm-6 col-lg-4">
                    <div class="title-left text-center">
                        <a href="shop-all-products.html" title="Go to Products"><h3>Add Product</h3></a>
                    </div>
                    <form class="mt-3 review-form-box" id="formLogin">
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="InputEmail" class="mb-0">Product Name</label>
                                <input type="email" class="form-control" id="InputEmail" placeholder="Enter Product Name">
                            </div>
                            <div class="form-group col-md-12">
                                <label for="InputPassword" class="mb-0">Price</label>
                                <input type="password" class="form-control" id="InputPassword" placeholder=" Enter Price">
                            </div>
                            <div class="form-group col-md-12">
                                <label for="InputPassword" class="mb-0">Condition</label>
                                <div class="input-group has-validation">
                                    <select
                                      id="condition"
                                      name="productcondition"
                                      class="form-control"
                                    >
                                      <option value="">Select Option</option>
                                      <option value="New">New</option>
                                      <option value="Like New">Like New</option>
                                      <option value="Good">Good</option>
                                      <option value="Fair">Fair</option>
                                    </select>
                                  </div>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="InputEmail" class="mb-0">Quantity</label>
                                <input
                                    type="number"
                                    min="1"
                                    value="1"
                                    name="productquantity"
                                    class="form-control"
                                    id="quantity"
                                    required
                               />
                            </div>
                            <div class="form-group col-md-12">
                                <label for="InputPassword" class="mb-0">Category</label>
                                <select
                                    id="category"
                                    name="productcategory"
                                    class="form-control"
                                    >
                                    <option value="">Select Option</option>
                                    <option value="Appliances">Appliances</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Books">Books</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="InputPassword" class="mb-0">Product Description</label>
                                <textarea
                                    id="description"
                                    name="productdescription"
                                    rows="5"
                                    class="form-control"
                                    required
                                ></textarea>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="InputPassword" class="mb-0">Product Image</label>
                                <div class="image-field">
                                    <input
                                      type="file"
                                      id="image"
                                      name="image"
                                      accept="image/*"
                                      class="form-control"
                                      title="choose File"
                                    />
                                  </div>
                            </div>
                        </div>
                        <button type="submit" class="btn-btn hvr-hover btn-block">Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</template>

<script>
export default {
    name: "UserAddProductView",

}
</script>

<style scoped></style>