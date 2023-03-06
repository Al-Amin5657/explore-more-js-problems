const phones = [
    { name: 'Samsung', storage: '32gb', price: 36000, color: 'silver' },
    { name: 'walton', storage: '32gb', price: 30000, color: 'silver' },
    { name: 'iphone', storage: '32gb', price: 98000, color: 'silver' },
    { name: 'Xoami', storage: '32gb', price: 46000, color: 'silver' },
    { name: 'oppo', storage: '32gb', price: 22000, color: 'silver' },
    { name: 'vivo', storage: '32gb', price: 28000, color: 'silver' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);