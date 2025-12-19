const PRODUCTS = [
  {
    id: "si-items-001",
    name: "Idli",
    category: "Main",
    image: "./Images/Idli.jpg",
    price: "10",
    rating: 4.8,
    reviews: 2143,
    stock: 24,
    badge: "Bestseller",
    description: "Idli is a popular South Indian dish that is typically served as a breakfast or snack. It’s a savory, steamed cake made from a fermented batter of rice and urad dal (split black gram)."
  },
  {
    id: "si-items-002",
    name: "Dosa",
    category: "Main",
    image: "./Images/Plain-Dosa.webp",
    price: 15,
    rating: 4.7,
    reviews: 987,
    stock: 12,
    badge: "Pro Choice",
    description: "It is a popular South Indian dish that is similar to a thin, crispy crepe or pancake. It’s made from a fermented batter of rice and urad dal (split black gram)."
  },
  {
    id: "si-items-003",
    name: "Puttu",
    category: "Main",
    image: "./Images/puttu.jpeg",
    price: 10,
    rating: 4.9,
    reviews: 5321,
    stock: 8,
    badge: "Top Rated",
    description: "Putu (also known as Puttu) is a popular South Indian and Sri Lankan dish made from rice flour and coconut, typically served as a breakfast or snack."
  },
  {
    id: "si-items-004",
    name: "Masala Dosa",
    category: "Main",
    image: "./Images/Masala_Dosai.jpeg",
    price: 18,
    rating: 4.6,
    reviews: 764,
    stock: 18,
    badge: "New",
    description: "It is a crispy, thin crepe made from fermented rice and urad dal (split black gram) batter. What sets masala dosa apart is the spiced potato filling inside the dosa,."
  },
  {
    id: "si-items-005",
    name: "Upma",
    category: "Main",
    image: "./Images/Upma.jpg",
    price: 14,
    rating: 4.4,
    reviews: 432,
    stock: 30,
    badge: "Value",
    description: "It is a savory South Indian dish made primarily from semolina (also known as rava or sooji).."
  },
  {
    id: "si-items-006",
    name: "Adai with Aviyal",
    category: "Lifestyle",
    image: "./Images/Adai_Aviyal.webp",
    price: 45,
    rating: 4.7,
    reviews: 1890,
    stock: 50,
    badge: "Eco",
    description: "It is a traditional South Indian dish that’s both nutritious and delicious."
  }
];


function productCard(p) {
  return `
    <div class="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition duration-200">
      <div class="p-6 flex flex-col h-full">

        <!-- Badge -->
        <div class="flex justify-between items-start mb-3">
          <span class="text-xs text-slate-500">${p.category}</span>
          <span class="text-xs font-medium bg-slate-100 px-3 py-1 rounded-full">
            ${p.badge}
          </span>
        </div>

        <!-- Product image -->
        <div>
          <span>
            <img src=${p.image}>
          </span>
        </div>

        <!-- Product Name -->
        <h3 class="font-semibold text-lg leading-snug mb-2">
          ${p.name}
        </h3>

        <!-- Description -->
        <p class="text-sm text-slate-600 mb-4 line-clamp-2">
          ${p.description}
        </p>

        <!-- Rating -->
        <div class="flex items-center gap-2 text-sm text-slate-600 mb-4">
          <span>⭐ ${p.rating}</span>
          <span>(${p.reviews.toLocaleString()} reviews)</span>
        </div>

        <!-- Spacer -->
        <div class="flex-grow"></div>

        <!-- Price + Stock -->
        <div class="flex items-center justify-between mb-4">
          <span class="text-xl font-bold">$${p.price}</span>
          <span class="text-xs text-slate-500">
            ${p.stock > 10 ? "In stock" : "Limited stock"}
          </span>
        </div>

        <!-- CTA -->
        <button
          data-add="${p.id}"
          class="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:opacity-90">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

const productGrid = document.getElementById("productGrid");

function renderProducts() {
  productGrid.innerHTML = PRODUCTS.map(productCard).join("");
}

renderProducts();

// delegate to cart.js
productGrid.addEventListener("click", e => {
  const btn = e.target.closest("[data-add]");
  if (btn) addToCart(btn.dataset.add);
});