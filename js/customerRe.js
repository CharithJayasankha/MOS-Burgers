let customerList = getSessionArray("customers") || [];

// Table body element for customers
let customerTableBody = document.getElementById("tbody");

// Main function to render the customer table
function customerDisplay() {
  createCustomerRow(customerList, customerTableBody);
}

// Create rows for the customer table
function createCustomerRow(array, parentTag) {
  parentTag.innerHTML = ""; // Clear the table before adding new rows
  array.forEach((customer, index) => {
    let row = `
      <tr>
        <th>${customer.id}</th>
        <td>${customer.name}</td>
        <td>${customer.phone}</td>
        <td>${customer.email}</td>
        <td>${customer.address}</td>
        <td>
          <div class="container">
            <a 
            data-bs-toggle="modal"
            data-bs-target="#updateModel"
            class="update me-2" href="#"
            data-index="${index}">
            Update
            </a>
            <a href="#" class="delete" data-index="${index}">
              <i class="trash fa-solid fa-trash"></i>
            </a>
          </div>
        </td>
      </tr>
    `;
    parentTag.innerHTML += row;
  });
}

// Add a new customer
function addCustomer() {
  const customer = {
    id: document.getElementById("addCustomerId").value,
    name: document.getElementById("addCustomerName").value,
    phone: document.getElementById("addCustomerPhone").value,
    email: document.getElementById("addCustomerEmail").value,
    address: document.getElementById("addCustomerAddress").value,
  };

  customerList.push(customer);
  saveToSession("customers", customerList);
  clearCustomerForm();
  customerDisplay(); // Re-render the updated customer table

  // Close the modal
  const modal = document.getElementById("addCustomerForm");
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
  alert("Successfully Added New Customer.");
}

// Event Listener for Add Customer Button
document.querySelector(".addBtn").addEventListener("click", addCustomer);

// Event Listener for Delete Customer
document.addEventListener("click", function (e) {
  if (e.target.closest(".delete")) {
    const deleteLink = e.target.closest(".delete");
    const index = deleteLink.getAttribute("data-index");

    customerList.splice(index, 1);
    saveToSession("customers", customerList);
    customerDisplay(); // Re-render the updated customer table
    alert("Successfully Deleted Customer.");
  }
});

let currentCustomerIndex = -1;

// Event Listener for Update Customer
document.addEventListener("click", function (e) {
  if (e.target.closest(".update")) {
    const updateLink = e.target.closest(".update");
    currentCustomerIndex = updateLink.getAttribute("data-index");
    updateCustomerFormFill(customerList[currentCustomerIndex]);
  }
});

function updateCustomer() {
  const customer = {
    id: document.getElementById("updateCustomerID").value,
    name: document.getElementById("updateCustomerName").value,
    phone: document.getElementById("updateNumber").value,
    email: document.getElementById("updateEmail").value,
    address: document.getElementById("updateAddress").value,
  };

  customerList[currentCustomerIndex] = customer;
  saveToSession("customers", customerList);
  customerDisplay(); // Re-render the updated customer table

  // Close the modal
  const modal = document.getElementById("updateModel");
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
  alert("Successfully Updated Customer.");
}

// Fill update form with customer details
function updateCustomerFormFill(customer) {
  document.getElementById("updateCustomerID").value = customer.id;
  document.getElementById("updateCustomerName").value = customer.name;
  document.getElementById("updateNumber").value = customer.phone;
  document.getElementById("updateEmail").value = customer.email;
  document.getElementById("updateAddress").value = customer.address;
}

// Clear the add customer form fields
function clearCustomerForm() {
  document.getElementById("addCustomerId").value = "";
  document.getElementById("addCustomerName").value = "";
  document.getElementById("addCustomerPhone").value = "";
  document.getElementById("addCustomerEmail").value = "";
  document.getElementById("addCustomerAddress").value = "";
}

// Helper function to save array to sessionStorage
function saveToSession(key, array) {
  sessionStorage.setItem(key, JSON.stringify(array));
}

// Helper function to get array from sessionStorage
function getSessionArray(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

// Initial render of the customer display
customerDisplay();

// Event Listener for Save Update Button
document
  .getElementById("saveUpdateBtn")
  .addEventListener("click", updateCustomer);
