export class localStorageManager {
  static addToLocalStorage(item) {
    let cartItems = localStorage.getItem("cartItems");

    if (!cartItems) {
      cartItems = [];
    } else {
      cartItems = JSON.parse(cartItems);
    }

    cartItems.push(item);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}
