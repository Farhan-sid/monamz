let wishList = [];

function setup() {
console.log("window loaded")
const product = document.querySelectorAll(".wl");
for(let i=0; i<product.lenght; i++) {
product[i].onclick = function(e) {
    addItem(e);
}
}
}

function addItem(e) {
    const productid = e.target.getAttribute("id");
console.log("product;", productid);
}

function removeItem(productid) {

}

window.addEventListener("load",setup);

