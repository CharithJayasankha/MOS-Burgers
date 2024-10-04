import { burgers, beverages } from "./items.js";

let tableBody = document.getElementById("tbody");
let tableBody1 = document.getElementById("tbody1");

function productDisplay() {
  createRow(burgers, tableBody);
  createRow(beverages, tableBody1);
}

function createRow(array, parentTag) {
  array.forEach((item) => {
    let row = `<tr>
                  <th>${item.code}</th>
                  <td>${item.name}</td>
                  <td class="text-end">${item.price}</td>
                  <td class="text-center">${item.discount}</td>
                  <td>${item.stock}</td>
                  <td>${item.manufacturedDate}</td>
                  <td>${item.expiredDate}</td>
                  <td>
                    <div class="container">
                        <a class="me-2" href="#">Update</a>
                        <a  href="">
                            <i class="trash fa-solid fa-trash"></i>
                        </a>
                    </div>
                </td>
                </tr>`;
    parentTag.innerHTML += row;
  });
}

productDisplay();
