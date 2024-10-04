const ordersList = JSON.parse(sessionStorage.getItem("ordersList"));
const tableBody = document.getElementById("tbody");

function displayTable() {
  tableBody.innerHTML = ""; // Clear existing rows if any

  for (let index = 0; index < ordersList.length; index++) {
    const order = ordersList[index];

    // Loop through each item in the current order
    for (let j = 0; j < order.length; j++) {
      let row = "";

      if (j === 0) {
        // First row in this order, includes rowspan for the order number
        row = `
            <tr>
              <td rowspan="${order.length}">${index + 1}</td>
              <td>${order[j].name}</td>
              <td>${order[j].price}</td>
              <td>${order[j].quantity}</td>
              <td>${order[j].total}</td>
            </tr>
          `;
      } else {
        // Subsequent rows in the same order, no rowspan
        row = `
            <tr>
              <td>${order[j].name}</td>
              <td>${order[j].qty}</td>
              <td>${order[j].price == undefined ? 0 : order[j].price}</td>
              <td>${order[j].total}</td>
              <td><a>done</a></td>
            </tr>
          `;
      }

      tableBody.innerHTML += row;
    }
  }
}

displayTable();
