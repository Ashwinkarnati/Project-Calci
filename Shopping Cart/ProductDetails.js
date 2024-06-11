let products = [
    {
        img: "https://images.meesho.com/images/products/275904106/5yog5_512.webp",
        name: "Unique Men Ethnic Jackets",
        cost: "₹372",
        rating: "4.0★",
        fabric: "Cotton Blend",
        pattern: "Solid",
        country: "India"
    },
    {
        img: "https://images.meesho.com/images/products/417617593/ekbkh_512.webp",
        name: "Men Embroidered Pure Cotton A-line Dark Gajari Color Kurta",
        cost: "₹473",
        rating: "3.9★",
        fabric: "Cotton",
        pattern: "Embroidered",
        country: "India"
    },
    {
        img: "https://images.meesho.com/images/products/243675411/nyb8t_512.webp",
        name: "Cotton Blend Striped T-Shirt - Full Sleeves And Round Neck T-Shirt For Men And Boys",
        cost: "₹241",
        rating: "3.4★",
        fabric: "Cotton Blend",
        pattern: "Printed",
        country: "India"
    },
    {
        img: "https://images.meesho.com/images/products/332361102/yfyvu_512.webp",
        name: "Blezza Men's FORMAL PANT",
        cost: "₹504",
        rating: "3.6★",
        fabric: "Cotton Blend",
        pattern: "Solid",
        country: "India"
    },
    {
        img: "https://images.meesho.com/images/products/303266706/908j8_512.webp",
        name: "Chikankari kurti",
        cost: "₹287",
        rating: "4.1★",
        fabric: "Georgette",
        pattern: "Chikankari",
        country: "India"
    },
    {
        img: "https://images.meesho.com/images/products/393651306/eqmsc_512.webp",
        name: "Princess Fancy Kids Girls Lehanga Cholis",
        cost: "₹473",
        rating: "3.8★",
        fabric: "Polyester",
        pattern: "Solid",
        country: "India"
    },
    {
        img: "https://images.meesho.com/images/products/409876565/5w0i6_512.webp",
        name: "Princess Fancy Kids Girls Lehanga Cholis",
        cost: "₹420",
        rating: "3.8★",
        fabric: "Net",
        pattern: "Embroidered",
        country: "India"
    },
    {
        img: "https://images.meesho.com/images/products/153971548/xampf_512.webp",
        name: "Aura HathiPopat Silk Saree With Jacquard Blouse Piece",
        cost: "₹559",
        rating: "3.9★",
        fabric: "Aura Silk",
        pattern: "Zari Woven",
        country: "India"
    }
];

let isEmpty = true;
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productIndex = urlParams.get('productIndex');
    const product = products[productIndex];

    if (product) {
        document.getElementById('product-image').src = product.img;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-cost').textContent = `${product.cost}`;
        document.getElementById('product-rating').textContent = `Rating: ${product.rating}`;
        document.getElementById('product-fabric').textContent = `Fabric: ${product.fabric}`;
        document.getElementById('product-pattern').textContent = `Pattern: ${product.pattern}`;
        document.getElementById('product-country').textContent = `Country: ${product.country}`;
        isEmpty=false;
    }
    else{
        document.getElementById('content').innerHTML = `<p>Product not found</p>`;
    }
    if(!isEmpty){
        document.getElementById('button').innerHTML=`<button class="btn btn-info">Buy Now</button>`
    }
});

