const shoppingCart = [
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3600 },
    { name: 'shoes', price: 2600 },
    { name: 'belt', price: 700 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log(expense);