/* ============================================================
   BUSHEL & BIN — shared product catalog + cart (localStorage)
   ============================================================ */
const PRODUCTS = [
  { id:"p01", cat:"produce",   catLabel:"Produce",          img:"https://loremflickr.com/600/600/avocado?lock=1", name:"Turkey-Day Avocados, 5-pack", unit:"5-pack", price:3.99, was:7.29, badge:"SAVE 45%", desc:"Ready-to-eat Hass avocados, hand-picked for the holiday spread. Great for guacamole or sliced over toast." },
  { id:"p02", cat:"produce",   catLabel:"Produce",          img:"https://loremflickr.com/600/600/potato,russet?lock=2", name:"Russet Potatoes, 10lb bag",   unit:"10lb bag", price:3.49, was:4.99, badge:"SAVE 30%", desc:"Farm-fresh russets, the classic mashed-potato potato. Stores well for a week or more in a cool pantry." },
  { id:"p03", cat:"produce",   catLabel:"Produce",          img:"https://loremflickr.com/600/600/sweetpotato?lock=3", name:"Sweet Potatoes, per lb",      unit:"per lb", price:0.59, was:0.99, badge:"SAVE 40%", desc:"Naturally sweet and roast-ready. A holiday table staple, sold loose so you can grab exactly what you need." },
  { id:"p04", cat:"produce",   catLabel:"Produce",          img:"https://loremflickr.com/600/600/cranberry?lock=4", name:"Fresh Cranberries, 12oz",     unit:"12oz bag", price:1.99, was:2.69, badge:"SAVE 25%", desc:"Tart, firm cranberries for sauce, relish, or baking. Rinse and simmer with sugar and orange zest." },
  { id:"p05", cat:"meat",      catLabel:"Meat & Seafood",   img:"https://loremflickr.com/600/600/turkey?lock=5", name:"Whole Butterball Turkey, per lb", unit:"per lb", price:0.79, was:1.59, badge:"SAVE 50%", desc:"A fresh, never-frozen whole turkey. Ask our butcher counter for a free brining bag with purchase." },
  { id:"p06", cat:"meat",      catLabel:"Meat & Seafood",   img:"https://loremflickr.com/600/600/ham?lock=6", name:"Spiral-Cut Ham, per lb",      unit:"per lb", price:2.29, was:3.49, badge:"SAVE 35%", desc:"Hickory-smoked and pre-sliced for effortless serving, with a brown-sugar glaze packet included." },
  { id:"p07", cat:"meat",      catLabel:"Meat & Seafood",   img:"https://loremflickr.com/600/600/shrimp?lock=7", name:"Wild-Caught Shrimp, 1lb bag", unit:"1lb bag", price:6.99, was:9.99, badge:"SAVE 30%", desc:"Peeled, deveined, and flash-frozen at sea. Perfect for a shrimp cocktail starter." },
  { id:"p08", cat:"meat",      catLabel:"Meat & Seafood",   img:"https://loremflickr.com/600/600/beef,ground?lock=8", name:"Ground Beef 80/20, per lb",   unit:"per lb", price:3.99, was:4.99, badge:"SAVE 20%", desc:"Freshly ground in-store daily. A pantry-week workhorse for weeknight dinners." },
  { id:"p09", cat:"bakery",    catLabel:"Bakery",           img:"https://loremflickr.com/600/600/pumpkin,pie?lock=9", name:"Fresh Pumpkin Pie, 9\u2033",  unit:"9-inch", price:5.49, was:10.98, badge:"BOGO", desc:"Baked in-house daily with real pumpkin and warm spice. Buy one, get one free through the sale." },
  { id:"p10", cat:"bakery",    catLabel:"Bakery",           img:"https://loremflickr.com/600/600/bread,rolls?lock=10", name:"Dinner Roll Dozen",           unit:"dozen", price:2.79, was:3.99, badge:"SAVE 30%", desc:"Soft, buttery rolls baked fresh each morning. Great warmed with butter alongside the main course." },
  { id:"p11", cat:"bakery",    catLabel:"Bakery",           img:"https://loremflickr.com/600/600/apple,pie?lock=11", name:"Apple Crumb Pie, 9\u2033",    unit:"9-inch", price:5.99, was:11.98, badge:"BOGO", desc:"Tart baking apples under a brown-sugar crumb topping. Buy one, get one free through the sale." },
  { id:"p12", cat:"pantry",    catLabel:"Pantry",           img:"https://loremflickr.com/600/600/stuffing,thanksgiving?lock=12", name:"Stuffing & Gravy Bundle",     unit:"bundle", price:4.29, was:6.59, badge:"SAVE 35%", desc:"A boxed stuffing mix paired with a jar of turkey gravy, bundled for one easy checkout scan." },
  { id:"p13", cat:"pantry",    catLabel:"Pantry",           img:"https://loremflickr.com/600/600/pumpkin,can?lock=13", name:"Canned Pumpkin, 4-pack",      unit:"4-pack", price:5.49, was:7.29, badge:"SAVE 25%", desc:"100% pure pumpkin puree, no added sugar. Stock up for pies, breads, and soups." },
  { id:"p14", cat:"pantry",    catLabel:"Pantry",           img:"https://loremflickr.com/600/600/broth,soup?lock=14", name:"Broth, 32oz, all varieties",  unit:"32oz", price:1.79, was:2.99, badge:"SAVE 40%", desc:"Chicken, beef, or vegetable broth. The base for gravy, stuffing, and next-day soup." },
  { id:"p15", cat:"dairy",     catLabel:"Dairy & Frozen",   img:"https://loremflickr.com/600/600/butter?lock=15", name:"Salted Butter, 4-stick",      unit:"4-stick", price:2.99, was:4.29, badge:"SAVE 30%", desc:"Creamy salted butter for baking, basting, and everything in between." },
  { id:"p16", cat:"dairy",     catLabel:"Dairy & Frozen",   img:"https://loremflickr.com/600/600/icecream,vanilla?lock=16", name:"Vanilla Ice Cream, 1.5qt",    unit:"1.5qt", price:3.99, was:4.99, badge:"SAVE 20%", desc:"Classic vanilla bean, the perfect scoop alongside a slice of warm pie." },
  { id:"p17", cat:"dairy",     catLabel:"Dairy & Frozen",   img:"https://loremflickr.com/600/600/piecrust,pastry?lock=17", name:"Frozen Pie Crusts, 2-pack",   unit:"2-pack", price:2.29, was:3.49, badge:"SAVE 35%", desc:"Pre-rolled, ready to fill and bake. A shortcut that still tastes homemade." },
  { id:"p18", cat:"beverages", catLabel:"Beverages",        img:"https://loremflickr.com/600/600/cider,apple?lock=18", name:"Sparkling Cider, 4-pack",     unit:"4-pack", price:6.99, was:9.29, badge:"SAVE 25%", desc:"A festive, kid-friendly toast for the table. Served chilled." },
  { id:"p19", cat:"beverages", catLabel:"Beverages",        img:"https://loremflickr.com/600/600/coffee,beans?lock=19",   name:"Ground Coffee, 12oz",         unit:"12oz", price:5.59, was:6.99, badge:"SAVE 20%", desc:"Medium roast, ground for drip machines. Fuel for the early Black Friday doorbusters." }
];

const CART_KEY = "bnb_cart_v1";

function getCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(id, qty){
  qty = qty || 1;
  const cart = getCart();
  cart[id] = (cart[id] || 0) + qty;
  saveCart(cart);
}
function setQty(id, qty){
  const cart = getCart();
  qty = Math.max(0, parseInt(qty) || 0);
  if(qty === 0){ delete cart[id]; } else { cart[id] = qty; }
  saveCart(cart);
}
function removeFromCart(id){
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
}
function cartCount(){
  const cart = getCart();
  return Object.values(cart).reduce((a,b) => a+b, 0);
}
function cartItems(){
  const cart = getCart();
  return Object.keys(cart).map(id => {
    const product = PRODUCTS.find(p => p.id === id);
    if(!product) return null;
    const qty = cart[id];
    return { product, qty, lineTotal: +(product.price * qty).toFixed(2) };
  }).filter(Boolean);
}
function cartSubtotal(){
  return +cartItems().reduce((sum,item) => sum + item.lineTotal, 0).toFixed(2);
}
function updateCartBadge(){
  document.querySelectorAll(".cart-badge").forEach(el => {
    const count = cartCount();
    el.textContent = count;
    el.classList.toggle("d-none", count === 0);
  });
}
function wireAddToCartButtons(){
  document.querySelectorAll(".btn-add-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      const stepper = btn.closest("[data-product-wrap]")?.querySelector(".qty-input");
      const qty = stepper ? parseInt(stepper.value) || 1 : 1;
      addToCart(id, qty);
      const original = btn.textContent;
      btn.textContent = "Added!";
      btn.classList.add("added");
      setTimeout(() => { btn.textContent = original; btn.classList.remove("added"); }, 1200);
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  wireAddToCartButtons();
});
