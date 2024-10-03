const beverages = [
  {
    code: "B1011",
    name: "Orange Juice",
    price: 120,
    discount: 0,
    stock: 10,
    manufacturedDate: "2024.10.01",
    expiredDate: "2024.10.10",
    qty: 1,
    img: "../assets/11.jpg",
  },
  {
    code: "B1012",
    name: "Ice coffee",
    price: 200,
    discount: 0,
    stock: 5,
    manufacturedDate: "2024.10.05",
    expiredDate: "2024.10.06",
    qty: 1,
    img: "../assets/12.jpg",
  },
  {
    code: "B1013",
    name: "Coffee",
    price: 150,
    discount: 0,
    stock: 8,
    manufacturedDate: "2024.10.05",
    expiredDate: "2024.10.06",
    qty: 1,
    img: "../assets/13.jpg",
  },
  {
    code: "B1014",
    name: "Lemon Tea",
    price: 100,
    discount: 0,
    stock: 0,
    manufacturedDate: "2024.10.05",
    expiredDate: "2024.10.06",
    qty: 1,
    img: "../assets/14.jpg",
  },
  {
    code: "B1015",
    name: "Coca Cola",
    price: 180,
    discount: 0,
    stock: 10,
    manufacturedDate: "2024.10.05",
    expiredDate: "2025.20.06",
    qty: 1,
    img: "../assets/15.jpg",
  },
];

const burgers = [
  {
    code: "B1001",
    name: "Classic Burger (Large)",
    price: 750,
    discount: 0,
    stock: 2,
    manufacturedDate: "2024.09.10",
    expiredDate: "2024.10.10",
    qty: 1,
    img: "../assets/1.jpg",
  },
  {
    code: "B1002",
    name: "Classic Burger (Regular)",
    price: 1500,
    discount: 15,
    stock: 0,
    manufacturedDate: "2024.09.15",
    expiredDate: "2024.10.12",
    qty: 1,
    img: "../assets/2.jpg",
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
    img: "../assets/3.jpg",
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
    img: "../assets/4.jpg",
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
    img: "../assets/5.jpg",
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
    img: "../assets/6.jpg",
  },
  {
    code: "B1007",
    name: "Cheese Burger (Regular)",
    price: 600,
    discount: 0,
    stock: 0,
    manufacturedDate: "2024.09.05",
    expiredDate: "2024.10.05",
    qty: 1,
    img: "../assets/7.jpg",
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
    img: "../assets/8.jpg",
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
    img: "../assets/9.jpg",
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
    img: "../assets/10.jpg",
  },
];

localStorage.setItem("burgers", JSON.stringify(burgers));
localStorage.setItem("beverages", JSON.stringify(beverages));

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
