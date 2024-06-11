document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.getElementById('cart-table-body');
    let empty = document.getElementById('empty');
    let btn=document.getElementById('button');
    if (cart.length === 0) {
        empty.innerText = 'Your cart is empty.';
        empty.classList.add('h1', 'text-center', 'text-danger');
    } else {
        cart.forEach((item, index) => {
            const row = cartTableBody.insertRow();
            row.insertCell(0).innerText = index + 1;
            row.insertCell(1).innerText = item.name;
            row.insertCell(2).innerText = item.quantity;
            row.insertCell(3).innerText = parseInt(item.cost.substring(1)) * item.quantity;
        });
        btn.innerHTML =`<div class="btn btn-lg btn-warning border-dark m-5">Buy Now</div>`;
        btn.addEventListener("click",()=>{
            window.location.href="bill.html";
        })
    }
});
