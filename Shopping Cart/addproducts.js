document.getElementById('add-to-cart-button').addEventListener('click', function() {
    const productName = document.getElementById('product-name').innerText;
    const productCost = document.getElementById('product-cost').innerText;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        const product = {
            name: productName,
            cost: productCost,
            quantity: 1
        };
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
});
