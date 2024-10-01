const cartProductList = [];
burgers = [
  {
    code: "B1001",
    name: "Classic Burger (Large)",
    price: 750,
    discount: 0,
    img: "assets/1.jpg",
  },
  {
    code: "B1002",
    name: "Classic Burger (Regular)",
    price: 1500,
    discount: 15,
    img: "assets/2.jpg",
  },
  {
    code: "B1003",
    name: "Turkey Burger ",
    price: 1600,
    discount: 0,
    img: "assets/3.jpg",
  },
  {
    code: "B1004",
    name: "Chicken Burger (Large)",
    price: 1400,
    discount: 0,
    img: "assets/4.jpg",
  },
  {
    code: "B1005",
    name: "Chicken Burger (Regular)",
    price: 800,
    discount: 20,
    img: "assets/5.jpg",
  },
  {
    code: "B1006",
    name: "Cheese Burger (Large)",
    price: 1000,
    discount: 0,
    img: "assets/6.jpg",
  },
  {
    code: "B1007",
    name: "Cheese Burger (Regular)",
    price: 600,
    discount: 0,
    img: "assets/7.jpg",
  },
  {
    code: "B1008",
    name: "Bacon Burger ",
    price: 650,
    discount: 15,
    img: "assets/8.jpg",
  },
  {
    code: "B1009",
    name: "Shawarma Burger",
    price: 800,
    discount: 0,
    img: "assets/9.jpg",
  },
  {
    code: "B1010",
    name: "Olive Burger ",
    price: 1800,
    discount: 0,
    img: "assets/10.jpg",
  },
];

let burgerList = document.getElementById("burgerList");
let productCount = document.getElementById("productCount");
let count = 0;

function productDisplay() {
  burgers.forEach((element) => {
    let product = ` <div class="col">
          <div class="card shadow-sm">
            <img class="rounded-top" src="${element.img}" alt="hello" />
            <h5 class="m-2">${element.name}</h5>
            <p class="m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum
            </p>
            <div class="d-flex justify-content-between my-2 mx-2">
              <p>RS.${element.price}</p>
              <button
                onclick="addToCart('${element.code}')"  
                type="button"
                class="btn btn-sm btn-outline-secondary"
                style="height: 35px; width: 100px"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>`;

    burgerList.innerHTML += product;
  });
}

productDisplay();

function addToCart(code) {
  productCount.textContent = ++count;

  for (let index = 0; index < burgers.length; index++) {
    if (burgers[index].code == code) cartProductList.push(burgers[index]);
  }
}

document.getElementById("cartBtn").onclick = function cartBtn() {
  localStorage.setItem("array", JSON.stringify(cartProductList));
  window.location.href = "pages/cartPage.html";
};
