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
      const newItem = {
        name: item.name,
        totalPrice: item.price,
        quantity: 1,
        pricePerUnit: item.price,
      };

      cartItems.push(newItem);
    }
    // Om det finns... Öka quantity för det objektet med 1
    else {
      foundItem.quantity++;
      foundItem.totalPrice += item.price;
    }

    // Spara i local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  static handlePlusClick(item) {
    let cartItems = localStorage.getItem("cartItems");

    if (cartItems) {
      cartItems = JSON.parse(cartItems);
      const foundItem = cartItems.find((i) => i.name === item.name);
      foundItem.quantity++;
      foundItem.totalPrice += item.pricePerUnit;

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }

  static handleMinusClick(item) {
    let cartItems = localStorage.getItem("cartItems");

    if (cartItems) {
      cartItems = JSON.parse(cartItems);
      const foundItem = cartItems.find((i) => i.name === item.name);
      foundItem.quantity--;
      foundItem.totalPrice -= item.pricePerUnit;
      if (foundItem.quantity <= 0) {
        cartItems = cartItems.filter((i) => i.name !== item.name);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }
}
