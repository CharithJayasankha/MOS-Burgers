const cartProductList = JSON.parse(sessionStorage.getItem("array"));
const ordersList = JSON.parse(sessionStorage.getItem("ordersList")) || [];
let total = document.getElementById("total");
let discount = document.getElementById("discount");
let netPriceTag = document.getElementById("netPrice");

let totalPrice = 0;
let totalDiscount = 0;
let netPrice = 0;
function displayTable() {
  cartProductList.forEach((element) => {
    let el = `<tr>
          <td>
            <p class="text-muted mb-0">${element.code}</p>
          </td>
          <td>
            <p class="text-muted mb-0">${element.name}</p>
          </td>
          <td>
            <p class="text-muted mb-0">${element.price}</p>
          </td>
          <td><p class="text-muted mb-0">${element.discount}%</p></td>
          <td>
            <p class="text-muted mb-0">${element.qty}</p>
          </td>
          <td>
            <p class="text-muted mb-0">${element.price * element.qty}</p>
          </td>
        </tr>`;

    tableBody.innerHTML += el;
    totalPrice += element.price * element.qty;
    totalDiscount += (element.price * element.discount) / 100;
    total.textContent = totalPrice;
    discount.textContent = "-" + totalDiscount + ".00";
    netPriceTag.textContent = totalPrice - totalDiscount + ".00";
  });
}

document.querySelector(".payBtn").addEventListener("click", placeOrder);

function placeOrder() {
  ordersList.push(cartProductList);
  sessionStorage.setItem("ordersList", JSON.stringify(ordersList));
  alert("Successfully Place Order...");
  window.location.href = "../pages/homePage.html";
  sessionStorage.removeItem("array");
}

displayTable();
