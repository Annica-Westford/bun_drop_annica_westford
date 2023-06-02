export class localStorageManager {
  static addToLocalStorage(item) {
    let cartItems = localStorage.getItem("cartItems");

    if (!cartItems) {
      cartItems = [];
    } else {
      cartItems = JSON.parse(cartItems);
    }

    // Kolla om item:et redan finns i local storage (med namn)
    const foundItem = cartItems.find((i) => i.name === item.name);

    // Om det inte finns... Skapa ett nytt objekt med namn, price och quantity 1
    if (!foundItem) {
      const newItem = { name: item.name, price: item.price, quantity: 1 };

      cartItems.push(newItem);
    }
    // Om det finns... Öka quantity för det objektet med 1
    else {
      foundItem.quantity++;
    }

    // Spara i local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}
