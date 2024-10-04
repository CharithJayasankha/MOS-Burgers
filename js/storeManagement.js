import { burgers, beverages } from "./items.js";

const updateBurgerList = getSessionArray("burgers") || burgers;
const updateBeverageList = getSessionArray("beverages") || beverages;

let tableBody = document.getElementById("tbody");
let tableBody1 = document.getElementById("tbody1");

// Main function to render the table
function productDisplay() {
  createRow(updateBurgerList, tableBody);
  createRow(updateBeverageList, tableBody1);
}

// Create rows for the table
function createRow(array, parentTag) {
  parentTag.innerHTML = ""; // Clear the table before adding new rows
  array.forEach((item, index) => {
    let row = `
      <tr>
        <th>${item.code}</th>
        <td>${item.name}</td>
        <td class="text-end">${item.price}</td>
        <td class="text-center">${item.discount}</td>
        <td>${item.stock}</td>
        <td>${item.manufacturedDate}</td>
        <td>${item.expiredDate}</td>
        <td>
          <div class="container">
            <a 
            data-bs-toggle="modal"
            data-bs-target="#updateModel"
            class="update me-2" href=""
            data-index="${index}"
            data-array="${parentTag.id === "tbody" ? "burgers" : "beverages"}">
            Update
            </a>
            <a  href=""
            class="delete"
            data-index="${index}"
            data-array="${parentTag.id === "tbody" ? "burgers" : "beverages"}">
              <i class="trash fa-solid fa-trash"></i>
            </a>
          </div>
        </td>
      </tr>
    
      `;
    parentTag.innerHTML += row;
  });
}

// Add new items to the respective array (burger or beverage)

function addItem() {
  const category = document.getElementById("category").value;
  const item = {
    code: document.getElementById("itemCode").value,
    name: document.getElementById("productName").value,
    price: document.getElementById("price").value,
    discount: document.getElementById("discount").value,
    stock: document.getElementById("stock").value,
    manufacturedDate: document.getElementById("manufacturedDate").value,
    expiredDate: document.getElementById("expiredDate").value,
    qty: 1,
    img: "../assets/blank.jpg", // Default image
  };

  if (category === "burger") {
    updateBurgerList.push(item);
    saveToSession("burgers", updateBurgerList);
  } else if (category === "beverages") {
    updateBeverageList.push(item);
    saveToSession("beverages", updateBeverageList);
  }
  clearForm();
  productDisplay(); // Re-render the updated table
  // Close the modal
  const modal = document.getElementById("staticBackdrop");
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
  alert("Successfully Add New Item..");
}

// Helper function to save array to sessionStorage
function saveToSession(key, array) {
  sessionStorage.setItem(key, JSON.stringify(array));
}

// Helper function to get array from sessionStorage
function getSessionArray(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

// Event Listener for Add Button
document.querySelector(".addBtn").addEventListener("click", addItem);

// Event Listener for Delete (using event delegation)
document.addEventListener("click", function (e) {
  if (e.target.closest(".delete")) {
    const deleteLink = e.target.closest(".delete");
    const index = deleteLink.getAttribute("data-index");
    const arrayName = deleteLink.getAttribute("data-array");

    if (arrayName === "burgers") {
      updateBurgerList.splice(index, 1);
      saveToSession("burgers", updateBurgerList);
    } else if (arrayName === "beverages") {
      updateBeverageList.splice(index, 1);
      saveToSession("beverages", updateBeverageList);
    }

    productDisplay(); // Re-render the updated table
    alert("Successfully Delete Item");
  }
});

let currentCategory = [];

document.addEventListener("click", function (e) {
  if (e.target.closest(".update")) {
    const updateLink = e.target.closest(".update");
    const index = updateLink.getAttribute("data-index");
    const arrayName = updateLink.getAttribute("data-array");

    if (arrayName === "burgers") {
      updateFormFill(updateBurgerList[index]);
      currentCategory = ["burgers", index, updateBurgerList[index].img];
    } else if (arrayName === "beverages") {
      updateFormFill(updateBeverageList[index]);
      currentCategory = ["beverages", index, updateBeverageList[index].img];
    }
  }
});

function update() {
  const item = {
    code: document.getElementById("updateItemCode").value,
    name: document.getElementById("updateProductName").value,
    price: document.getElementById("updatePrice").value,
    discount: document.getElementById("updateDiscount").value,
    stock: document.getElementById("updateStock").value,
    manufacturedDate: document.getElementById("updateManufacturedDate").value,
    expiredDate: document.getElementById("updateExpiredDate").value,
    qty: 1,
    img: currentCategory[2], // not change image
  };

  if (currentCategory[0] === "burgers") {
    updateBurgerList[currentCategory[1]] = item;
    saveToSession("burgers", updateBurgerList);
  } else if (currentCategory[0] === "beverages") {
    updateBeverageList[currentCategory[1]] = item;
    saveToSession("beverages", updateBeverageList);
  }

  productDisplay(); // Re-render the updated table

  // Close the modal
  const modal = document.getElementById("updateModel");
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
  alert("Successfully update..");
}

// fill form selected product details
function updateFormFill(item) {
  document.getElementById("updateItemCode").value = item.code;
  document.getElementById("updateProductName").value = item.name;
  document.getElementById("updatePrice").value = item.price;
  document.getElementById("updateDiscount").value = item.discount;
  document.getElementById("updateStock").value = item.stock;
  document.getElementById("updateManufacturedDate").value =
    item.manufacturedDate;
  document.getElementById("updateExpiredDate").value = item.expiredDate;
}

// Clear the form fields
function clearForm() {
  document.getElementById("itemCode").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("price").value = "";
  document.getElementById("discount").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("manufacturedDate").value = "";
  document.getElementById("expiredDate").value = "";
}

// Initial render of the product display
productDisplay();
document.getElementById("saveUpdateBtn").addEventListener("click", update);
