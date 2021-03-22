var cartItem = /** @class */ (function () {
    function cartItem(name, price) {
        this.name = name;
        this.price = price;
    }
    return cartItem;
}());
function addToCart(name, price) {
    var item = new cartItem(name, price);
    storeItem(item);
    setCartTotal();
}
function storeItem(item) {
    // Load old items into var
    var oldCart = JSON.parse(sessionStorage.getItem("cartInfo"));
    // If there were no old items, make the var into an empty array
    if (oldCart == null) {
        oldCart = [];
    }
    oldCart.push(item);
    sessionStorage.setItem("cartInfo", JSON.stringify(oldCart));
}
function insertNewItem(item) {
    var table = document.getElementById("cartList");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = item.name;
    cell2.innerHTML = "$" + item.price;
}
// Repeatedly insert new rows into the table until all the items are added
function populateCart() {
    var obj = sessionStorage.getItem("cartInfo");
    var data = JSON.parse(obj);
    if (data == null) {
        alert("Cart is empty. Please return to the store page and add items to your cart.");
        location.href = "home.html";
        return;
    }
    data.forEach(function (element) {
        insertNewItem(element);
    });
    insertNewItem(getTotal(data));
}
// Return total object
function getTotal(obj) {
    var total = 0;
    obj.forEach(function (element) {
        total += element.price;
    });
    var totalObj = new cartItem("<b>Total</b>", total);
    return totalObj;
}
function setCartTotal() {
    var cart = JSON.parse(sessionStorage.getItem("cartInfo"));
    var total = document.getElementById("total");
    if (cart == null) {
        total.innerHTML = "Cart Total: Empty";
        return;
    }
    total.innerHTML = "Cart Total: $" + getTotal(cart).price;
}
function emptyCart() {
    var cart = null;
    sessionStorage.setItem("cartInfo", JSON.stringify(cart));
    setCartTotal();
}
