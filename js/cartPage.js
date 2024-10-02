const cartProductList = JSON.parse(localStorage.getItem("array"));
let total = document.getElementById("total");

let totalPrice = 0;
function displayTable() {
  console.log("hello");
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
          <td><p class="text-muted mb-0">${element.discount}</p></td>
          <td>
            <p class="text-muted mb-0">${element.qty}</p>
          </td>
          <td>
            <p class="text-muted mb-0">${element.price * element.qty}</p>
          </td>
        </tr>`;

    tableBody.innerHTML += el;
    totalPrice += element.price * element.qty;
    total.textContent = "RS. " + totalPrice + ".00";
  });
}

displayTable();
