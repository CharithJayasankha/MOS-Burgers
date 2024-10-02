const cartProductList = [];
const burgers = [
  {
    code: "B1001",
    name: "Classic Burger (Large)",
    price: 750,
    discount: 0,
    stock: 0,
    manufacturedDate: "2024.09.10",
    expiredDate: "2024.10.10",
    qty: 1,
    img: "assets/1.jpg",
  },
  {
    code: "B1002",
    name: "Classic Burger (Regular)",
    price: 1500,
    discount: 15,
    stock: 8,
    manufacturedDate: "2024.09.15",
    expiredDate: "2024.10.12",
    qty: 1,
    img: "assets/2.jpg",
  },
  {
    code: "B1003",
    name: "Turkey Burger",
    price: 1600,
    discount: 0,
    stock: 2,
    manufacturedDate: "2024.08.20",
    expiredDate: "2024.09.30",
    qty: 1,
    img: "assets/3.jpg",
  },
  {
    code: "B1004",
    name: "Chicken Burger (Large)",
    price: 1400,
    discount: 0,
    stock: 7,
    manufacturedDate: "2024.09.01",
    expiredDate: "2024.10.01",
    qty: 1,
    img: "assets/4.jpg",
  },
  {
    code: "B1005",
    name: "Chicken Burger (Regular)",
    price: 800,
    discount: 20,
    stock: 6,
    manufacturedDate: "2024.09.08",
    expiredDate: "2024.09.28",
    qty: 1,
    img: "assets/5.jpg",
  },
  {
    code: "B1006",
    name: "Cheese Burger (Large)",
    price: 1000,
    discount: 0,
    stock: 4,
    manufacturedDate: "2024.08.25",
    expiredDate: "2024.09.25",
    qty: 1,
    img: "assets/6.jpg",
  },
  {
    code: "B1007",
    name: "Cheese Burger (Regular)",
    price: 600,
    discount: 0,
    stock: 9,
    manufacturedDate: "2024.09.05",
    expiredDate: "2024.10.05",
    qty: 1,
    img: "assets/7.jpg",
  },
  {
    code: "B1008",
    name: "Bacon Burger",
    price: 650,
    discount: 15,
    stock: 3,
    manufacturedDate: "2024.08.30",
    expiredDate: "2024.09.30",
    qty: 1,
    img: "assets/8.jpg",
  },
  {
    code: "B1009",
    name: "Shawarma Burger",
    price: 800,
    discount: 0,
    stock: 5,
    manufacturedDate: "2024.09.12",
    expiredDate: "2024.10.12",
    qty: 1,
    img: "assets/9.jpg",
  },
  {
    code: "B1010",
    name: "Olive Burger",
    price: 1800,
    discount: 0,
    stock: 7,
    manufacturedDate: "2024.08.15",
    expiredDate: "2024.09.15",
    qty: 1,
    img: "assets/10.jpg",
  },
];

let burgerList = document.getElementById("burgerList");
let productCount = document.getElementById("productCount");

let count = 0;

function productDisplay() {
  burgers.forEach((element) => {
    let product = ` <div class="col">
          <div  class="card shadow-sm" data-bs-toggle="modal"
                data-bs-target="#${element.code}" >
            <img class="rounded-top" src="${element.img}" alt="hello" />
            <h5 class="m-2">${element.name}</h5>
            <p class="m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum
            </p>
            <div class="d-flex justify-content-between my-2 mx-2">
              <p>RS.${element.price}</p>
              <button
                  
                type="button"
                class="btn btn-sm btn-outline-secondary"
                style="height: 35px; width: 100px"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        
         <!-- Modal -->
      <div
        class="modal fade"
        id="${element.code}"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel" style="color:#d46f10">
              ${element.name}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container d-md-flex">
                <div class="container col-md-6 col-sm-12">
                <img  src="${element.img}" alt="hello" width="200px" />
              </div>
              <div class="container col-md-6 col-sm-12">
                <p><strong>Description :</strong><br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nisi.</p>
                <p><strong>Manufactured Date : </strong>${
                  element.manufacturedDate
                }</p>
                <p class="m-0"><strong>Expired Date Date : </strong>${
                  element.expiredDate
                }</p>
                <p><strong>${
                  element.stock <= 0
                    ? '<p class="text-danger">Out Stock</p>'
                    : '<p class="text-success">Available</p>'
                }</strong></p>
                <p><strong>Price : </strong>${element.price}</p>
                <div class="form-outline" data-mdb-input-init>
                  <label class="form-label" for="quantity">Quantity</label>
                  <input type="number" id="${
                    element.code
                  }quantity" class="form-control" placeholder="1" />
                </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button  type="button"class="btn" style="background-color:#d46f10; color:white" data-bs-dismiss="modal" onclick="addToCart('${
                element.code
              }')" >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
        `;

    burgerList.innerHTML += product;
  });
}

productDisplay();

function addToCart(code) {
  let quantity = document.getElementById(code + "quantity");
  console.log(quantity.value);

  productCount.textContent = ++count;

  for (let index = 0; index < burgers.length; index++) {
    if (burgers[index].code == code) {
      burgers[index].qty = quantity.value;
      cartProductList.push(burgers[index]);
    }
  }
}

document.getElementById("cartBtn").onclick = function cartBtn() {
  localStorage.setItem("array", JSON.stringify(cartProductList));
  window.location.href = "pages/cartPage.html";
};

let burgerBtn = document.getElementById("burgerBtn");
let drinkBtn = document.getElementById("drinkBtn");

function go(btn) {
  if (btn == 1) {
    burgerBtn.style = "background-color:#d46f10; color:white";
    drinkBtn.style = "background-color:white; color:#d46f10";
    window.location.href = "#";
  } else if (btn == 2) {
    burgerBtn.style = "background-color:white; color:#d46f10";
    drinkBtn.style = "background-color:#d46f10; color:white";
    window.location.href = "#drinks";
    console.log("drinks");
  }
}
