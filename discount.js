/* 
1. If ticket numbers is less than 100, per ticket price: 100tk.
2. If ticket number is more than 100, but less than 200. first 100 ticket will be 100tk/ rest will be 90 taka.per piece.
3. If you purchase more than 200 tickets
first 100 ----> 100tk
101 200 ----> 90tk
200+ -----> 70tk.
*/

function ticketPrice(ticketQuantity) {
    const first100rate = 100;
    const second100rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100price = first100rate * 100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100rate;
        const totalCost = first100price + restTicketPrice;
        return totalCost;
    }
    else {
        const first100price = 100 * first100rate;
        const second100price = 100 * second100rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100price + second100price + restTicketPrice;
        return totalCost;
    }
}
const totalPrice = ticketPrice(250);
console.log(totalPrice);