class CartHelper {
  addProduct(productId, piece = 1) {
    var cart = sessionStorage.getItem('cart');
    console.log(cart);
    if (!!cart) {
      cart = JSON.parse(cart);
      for (var prop in cart) {
        console.log(prop);
      }
      console.log(cart);
      if (cart[productId]) cart[productId] = cart[productId] + piece;
      else cart[productId] = piece;
    } else {
      cart = {};
      cart[productId] = piece;
    }
    console.log(cart);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  getProducts() {
    var cart = sessionStorage.getItem('cart');
    console.log(JSON.parse(cart));
  }

  deleteCart() {
    sessionStorage.removeItem('cart');
  }
}

export default new CartHelper();
