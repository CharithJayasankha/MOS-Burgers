// main.js
const cartProductList = JSON.parse(localStorage.getItem("array"));

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
            <p class="text-muted mb-0">10</p>
          </td>
          <td>
            <p class="text-muted mb-0">${element.price}</p>
          </td>
        </tr>`;

    tableBody.innerHTML += el;
  });
}

displayTable();
