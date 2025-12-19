const PRODUCTS = [
  {
    id: "ph-elec-001",
    name: "Naan",
    category: "Breads",
    price: 2,
    rating: 4.8,
    reviews: 2143,
    stock: 24,
    badge: "Bestseller",
    description: "Naan bread is a type of leavened Indian flatbread, typically served with curries, stews, and other dishes in South Asian cuisine. It's soft, fluffy, and often slightly chewy, with a characteristic charred, slightly crispy texture on the outside."
  },
  {
    id: "ph-elec-002",
    name: "Chapathi",
    category: "Breads",
    price: 3,
    rating: 4.7,
    reviews: 987,
    stock: 12,
    badge: "Pro Choice",
    description: "It's made from whole wheat flour, water, and a pinch of salt, and it's unleavened."
  },
  {
    id: "ph-elec-003",
    name: "Poori",
    category: "Breads",
    price: 2,
    rating: 4.9,
    reviews: 5321,
    stock: 8,
    badge: "Top Rated",
    description: "Indian bread made from unleavened wheat flour dough that is deep-fried until it puffs up. It’s typically round, soft, and slightly crispy on the outside. The dough is simple, consisting mainly of wheat flour, a little salt, and water."
  },
  {
    id: "ph-life-001",
    name: "Paneer Butter Masala",
    category: "Gravy- Sidedish",
    price: 12,
    rating: 4.6,
    reviews: 764,
    stock: 18,
    badge: "New",
    description: "It is a rich and creamy North Indian dish made from paneer (Indian cottage cheese) cooked in a delicious tomato-based gravy with butter, cream, and a blend of aromatic spices."
  },
  {
    id: "ph-home-001",
    name: "Dal Fry (tadka)",
    category: "Home",
    price: 11,
    rating: 4.4,
    reviews: 432,
    stock: 30,
    badge: "Value",
    description: "Dal Fry is a popular Indian dish made from lentils (dal) cooked with onions, tomatoes, and a variety of spices."
  },
  {
    id: "ph-life-002",
    name: "Rajma Masala",
    category: "Lifestyle",
    price: 14,
    rating: 4.7,
    reviews: 1890,
    stock: 50,
    badge: "Eco",
    description: "Rajma Masala is a popular North Indian dish made with red kidney beans cooked in a flavorful, spiced tomato gravy."
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