const shoppingCart = [
    { name: 'shirt', price: 2200, quantity: 2 },
    { name: 'pant', price: 3600, quantity: 5 },
    { name: 'shoes', price: 2600, quantity: 3 },
    { name: 'belt', price: 700, quantity: 7 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const totalProduct = product.price * product.quantity;
        sum = sum + totalProduct;
        // console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log(expense);