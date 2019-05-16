class CartHelper {
  addProduct(productId) {
    var cart = sessionStorage.getItem('cart');
    console.log(cart);
  }
}

export default new CartHelper();
