// Demo product data
const products = [
  {
    id: 1,
    title: "Smartphone X1",
    category: "electronics",
    price: 29999,
    desc: "Latest 5G smartphone with AMOLED display and 128GB storage.",
    img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg"
  },
  {
    id: 2,
    title: "Wireless Headphones",
    category: "electronics",
    price: 2499,
    desc: "Noise-cancelling, 30-hour battery life, Bluetooth 5.0.",
    img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
  },
  {
    id: 3,
    title: "Men's Casual Shirt",
    category: "fashion",
    price: 799,
    desc: "100% cotton, regular fit, available in multiple colors.",
    img: "https://m.media-amazon.com/images/I/71w7b5U3VbL._AC_UL320_.jpg"
  },
  {
    id: 4,
    title: "Women's Handbag",
    category: "fashion",
    price: 1499,
    desc: "Trendy handbag with spacious compartments.",
    img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UL320_.jpg"
  },
  {
    id: 5,
    title: "Bestselling Novel",
    category: "books",
    price: 399,
    desc: "Award-winning fiction novel, paperback edition.",
    img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg"
  },
  {
    id: 6,
    title: "Cookbook",
    category: "books",
    price: 299,
    desc: "100+ easy recipes for home cooks.",
    img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY218_.jpg"
  },
  {
    id: 7,
    title: "Non-stick Frying Pan",
    category: "home",
    price: 699,
    desc: "Durable, easy to clean, 28cm diameter.",
    img: "https://m.media-amazon.com/images/I/61nF2rM4AQL._AC_UL320_.jpg"
  },
  {
    id: 8,
    title: "LED Table Lamp",
    category: "home",
    price: 499,
    desc: "Adjustable brightness, USB charging.",
    img: "https://m.media-amazon.com/images/I/61n6g2QeYGL._AC_UL320_.jpg"
  },
  {
    id: 9,
    title: "Football",
    category: "sports",
    price: 599,
    desc: "Standard size, suitable for all ages.",
    img: "https://m.media-amazon.com/images/I/81wFMYl6FHL._AC_UL320_.jpg"
  },
  {
    id: 10,
    title: "Yoga Mat",
    category: "sports",
    price: 799,
    desc: "Non-slip, 6mm thick, lightweight.",
    img: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UL320_.jpg"
  },
  // More demo products
  {
    id: 11,
    title: "Bluetooth Speaker",
    category: "electronics",
    price: 1599,
    desc: "Portable, waterproof, 10-hour playtime.",
    img: "https://m.media-amazon.com/images/I/71l2rGZ3pZL._AC_UY218_.jpg"
  },
  {
    id: 12,
    title: "Smart Watch",
    category: "electronics",
    price: 3499,
    desc: "Fitness tracking, heart rate monitor, notifications.",
    img: "https://m.media-amazon.com/images/I/61nPiOO2wzL._AC_UY218_.jpg"
  },
  {
    id: 13,
    title: "Women's Dress",
    category: "fashion",
    price: 1299,
    desc: "Elegant evening dress, soft fabric, regular fit.",
    img: "https://m.media-amazon.com/images/I/71pVZHhQZGL._AC_UL320_.jpg"
  },
  {
    id: 14,
    title: "Men's Sneakers",
    category: "fashion",
    price: 1999,
    desc: "Comfortable, stylish, available in all sizes.",
    img: "https://m.media-amazon.com/images/I/71v6iGQhQML._AC_UL320_.jpg"
  },
  {
    id: 15,
    title: "Children's Story Book",
    category: "books",
    price: 249,
    desc: "Illustrated stories for kids, paperback.",
    img: "https://m.media-amazon.com/images/I/81WcnNQ-TBL._AC_UY218_.jpg"
  },
  {
    id: 16,
    title: "Science Encyclopedia",
    category: "books",
    price: 599,
    desc: "Comprehensive science reference for students.",
    img: "https://m.media-amazon.com/images/I/81AFxF1N6tL._AC_UY218_.jpg"
  },
  {
    id: 17,
    title: "Wall Clock",
    category: "home",
    price: 349,
    desc: "Silent, modern design, easy to hang.",
    img: "https://m.media-amazon.com/images/I/61p5lKQ2lGL._AC_UL320_.jpg"
  },
  {
    id: 18,
    title: "Cushion Cover Set",
    category: "home",
    price: 499,
    desc: "Set of 5, soft fabric, stylish prints.",
    img: "https://m.media-amazon.com/images/I/81QpkIctqPL._AC_UL320_.jpg"
  },
  {
    id: 19,
    title: "Badminton Racket",
    category: "sports",
    price: 899,
    desc: "Lightweight, high tension, for all levels.",
    img: "https://m.media-amazon.com/images/I/71Q0Qb5U6GL._AC_UL320_.jpg"
  },
  {
    id: 20,
    title: "Dumbbell Set",
    category: "sports",
    price: 1299,
    desc: "Pair of 5kg dumbbells, anti-slip grip.",
    img: "https://m.media-amazon.com/images/I/71pWzhdJNwL._AC_UL320_.jpg"
  }
];

function renderProducts(category = "all") {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  if (filtered.length === 0) {
    productList.innerHTML = '<p style="text-align:center;">No products found in this category.</p>';
    return;
  }
  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}" />
      <div class="product-title">${product.title}</div>
      <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
      <div class="product-price">₹${product.price}</div>
      <div class="product-desc">${product.desc}</div>
      <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
  this.reset();
});

// Category filter
const categoryBtns = document.querySelectorAll(".category-btn");
categoryBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.category);
    attachCartEvents();
  });
});

// Cart logic
let cart = [];
function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function addToCart(productId) {
  const prod = products.find(p => p.id == productId);
  if (prod) {
    cart.push(prod);
    updateCartCount();
    renderCart();
  }
}

function attachCartEvents() {
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.onclick = function() {
      addToCart(this.dataset.id);
    };
  });
}

function renderCart() {
  const cartSection = document.getElementById('cart-section');
  if (!cartSection) return;
  if (cart.length === 0) {
    cartSection.innerHTML = '<p style="text-align:center;">Your cart is empty.</p>';
    return;
  }
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  cartSection.innerHTML = `
    <div style="max-height:220px;overflow-y:auto;">
      ${cart.map(item => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.title}" />
          <div>
            <div class="cart-title">${item.title}</div>
            <div class="cart-price">₹${item.price}</div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="cart-total">Total: ₹${total}</div>
  `;
}

// Show all products by default
renderProducts();
attachCartEvents();

// Contact form (demo only)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
  this.reset();
});

// Cart link scroll
document.getElementById('cart-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('cart').scrollIntoView({behavior:'smooth'});
});
