// Shared MINIMA utilities + cart (works on index/shop pages)
const CART_KEY = "minima_cart_v1";

function loadCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function cartCount(cart){
  return Object.values(cart).reduce((a,b)=>a+b,0);
}
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

// For pages with year
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
});
