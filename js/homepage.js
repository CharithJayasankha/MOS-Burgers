import { beverages, burgers } from "./items.js";
const burgerUpdateList = JSON.parse(sessionStorage.getItem("burgers"));
const beverageUpdateList = JSON.parse(sessionStorage.getItem("beverages"));

const cartProductList = JSON.parse(sessionStorage.getItem("array")) || [];

let burgerList = document.getElementById("burgerList");
let drinkList = document.getElementById("drinkList");
let productCount = document.getElementById("productCount");

let count = 0;

function productDisplay() {
  createCards(
    beverageUpdateList == null ? beverages : beverageUpdateList,
    drinkList
  );
  createCards(
    burgerUpdateList == null ? burgers : burgerUpdateList,
    burgerList
  );
}

function createCards(array, parentElement) {
  array.forEach((element) => {
    let product = ` <div class="col">
        <div  class="card shadow-sm" data-bs-toggle="modal"
              data-bs-target="#${element.code}" >
          <img class="rounded-top" src="${element.img}" alt="${element.name}" />
          <h5 class="m-2" style="color:#d46f10;">${element.name}</h5>
          <p class="m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum
          </p>
          <div class="d-flex w-auto justify-content-between my-2 mx-2">
            <p>RS.${element.price}</p>
            <p class="text-danger">${
              element.discount == 0 ? "" : "-" + element.discount + "%"
            }</p>
             <p style="justify-self: end;"><strong>${
               element.stock <= 0
                 ? '<p class="text-danger">Out Stock</p>'
                 : '<p class="text-success">Available</p>'
             }</strong></p>
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
              <div class="d-flex">
                <p><strong>Price : </strong>${element.price}</p>
                <p class="text-danger">${
                  element.discount == 0 ? "" : "-" + element.discount + "%"
                }</p>
              </div>
              <div class="form-outline" data-mdb-input-init>
                <label class="form-label" for="quantity">Quantity</label>
                <input type="number" id="${
                  element.code
                }quantity" class="form-control" placeholder="0" />
              </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button  type="button"class="btn" style="background-color:#d46f10; color:white" data-bs-dismiss="modal" 
            data-code="${element.code}" >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
      `;

    parentElement.innerHTML += product;
  });
}

// execute add to cart btn in model.
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("btn")) {
    const productCode = e.target.getAttribute("data-code");
    addToCart(productCode);
  }
});

// navigation btn
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("categoryBtn")) {
    const num = e.target.getAttribute("tabNum");
    go(num);
  }
});

//set count to cart
productCount.textContent = cartProductList.length;

function addToCart(code) {
  let quantity = document.getElementById(code + "quantity");
  let allProducts = [
    ...(burgerUpdateList == null ? burgers : burgerUpdateList),
    ...(beverageUpdateList == null ? beverages : beverageUpdateList),
  ]; // Combine arrays

  for (let index = 0; index < allProducts.length; index++) {
    if (allProducts[index].code == code) {
      allProducts[index].qty = quantity.value; // set qty value
      cartProductList.push(allProducts[index]);
      sessionStorage.setItem("array", JSON.stringify(cartProductList));
      productCount.textContent = cartProductList.length;
    }
  }
}

// cart icon button
document.getElementById("cartBtn").onclick = function cartBtn() {
  window.location.href = "cartPage.html";
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
document.addEventListener("DOMContentLoaded", productDisplay);
