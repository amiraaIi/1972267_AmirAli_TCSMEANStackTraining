class cartItem {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

function addToCart(name: string, price: number) {
    let item = new cartItem(name, price);

    storeItem(item);
}

function storeItem(item: object) {
    // Load old items into var
    let oldCart = JSON.parse(sessionStorage.getItem("cartInfo"));

    // If there were no old items, make the var into an empty array
    if(oldCart == null) {
        oldCart = [];
    }

    oldCart.push(item);

    sessionStorage.setItem("cartInfo", JSON.stringify(oldCart));
}