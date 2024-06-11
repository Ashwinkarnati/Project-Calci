document.addEventListener("DOMContentLoaded",() => {
    var currentDate = new Date();

document.querySelector(".date").innerText=`Date: ${currentDate.toLocaleDateString()}`;

document.querySelector(".orderId").innerText=`OrderId: ${Math.floor(Math.random()*100000000)}`;

const cartTableBody = document.getElementById('cart-table-body');
let sum=0;
const cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.forEach((item, index) => {
    const row = cartTableBody.insertRow();
    let amt=parseInt(item.cost.substring(1)) * item.quantity;
    row.insertCell(0).innerText = index + 1;
    row.insertCell(1).innerText = item.name;
    row.insertCell(2).innerText = amt;
    sum+=amt;
});
document.querySelector("#total").innerText=`The Total Price Of All Products You Have Purshaced is ₹${sum}/-`;

var deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + 3));

var formattedDeliveryDate = deliveryDate.toDateString();

document.querySelector(".deliverdate").innerText = `Expected Delivery Date is ${formattedDeliveryDate}`;

localStorage.removeItem("cart");
});