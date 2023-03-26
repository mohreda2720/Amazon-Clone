var shopItemsData;
// get products
let shopItemsData1 = async () => {
  var response = await fetch(
    `http://islam1998-001-site1.itempurl.com/api/GetProducts`
  );
  shopItemsData = await response.json();
  // console.log(shopItemsData);
  // display(result);
  TotalAmount();
  generateCartItems();
};
// window.onload = function () {
shopItemsData1();
// };

let ShoppingCart = document.getElementById('shopping-cart');
let label = document.getElementById('label');

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem('data')) || [];
console.log(basket);
/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById('cartAmount');
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

/**
 * ! Generates the Cart Page with product cards composed of
 * ! images, title, price, buttons, & Total price
 * ? When basket is blank -> show's Cart is Empty
 */

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((x) => x.no === id) || [];
        let { images2, price, name } = search;
        return `
      <div class="cart-item">
        <img width="100" src='http://eslam1998-001-site1.gtempurl.com/wwwroot/Images/${images2}' alt="" />

        <div class="details">
        
          <div class="title-price-x">
            <h4 class="title-price">
              <p>${name}</p>
              <p class="cart-item-price">$ ${price}</p>
            </h4>
            <i id="xmark" onclick="removeItem(${id})" class="bi bi-x"></i>
          </div>

          <div class="cart-buttons">
            <div class="buttons">
            <i onclick="increment(${id})" class="fa fa-solid fa-plus"></i>
            <div id=${id} class="quantity">${item}</div>
            <i onclick="decrement(${id})" class="fa fa-solid fa-minus"></i>
            </div>
          </div>

          <h3>$ ${item * price}</h3>
        
        </div>
      </div>
      `;
      })
      .join(''));
  } else {
    ShoppingCart.innerHTML = '';
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to Home</button>
    </a>
    `;
  }
};

// generateCartItems();

/**
 * ! used to increase the selected product item quantity by 1
 */

let increment = (id) => {
  let selectedItem = document.getElementById(id);
  let search = basket.find((x) => x.id === parseInt(selectedItem.id));

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();

  update(selectedItem.id);
  localStorage.setItem('data', JSON.stringify(basket));
};

/**
 * ! used to decrease the selected product item quantity by 1
 */

let decrement = (id) => {
  let selectedItem = document.getElementById(id);
  let search = basket.find((x) => x.id === parseInt(selectedItem.id));
  console.log(search);
  console.log(search.item);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(parseInt(selectedItem.id));
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem('data', JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

let update = (id) => {
  let selectedItem = document.getElementById(id);
  let search = basket.find((x) => x.id === parseInt(selectedItem.id));
  document.getElementById(id).innerHTML = search.item;
  console.log(id);
  calculation();
  TotalAmount();
};

/**
 * ! Used to remove 1 selected product card from basket
 * ! using the X [cross] button
 */

let removeItem = (id) => {
  let selectedItem = document.getElementById(id);
  console.log(selectedItem);
  basket = basket.filter((x) => x.id !== parseInt(selectedItem.id));
  calculation();
  generateCartItems();
  TotalAmount();
  localStorage.setItem('data', JSON.stringify(basket));
};

/**
 * ! Used to calculate total amount of the selected Products
 * ! with specific quantity
 * ? When basket is blank, it will show nothing
 */

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;
        let filterData = shopItemsData.find((x) => x.no === id);
        console.log(filterData);
        console.log(filterData.price);
        console.log(item);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);

    return (label.innerHTML = `
    <h2>Total Bill : $ ${amount}</h2>
    <button class="checkout"><a href="./sign.html">Checkout</a></button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `);
  } else return;
};

// TotalAmount();

/**
 * ! Used to clear cart, and remove everything from local storage
 */

let clearCart = () => {
  basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem('data', JSON.stringify(basket));
  console.log(basket);
};
