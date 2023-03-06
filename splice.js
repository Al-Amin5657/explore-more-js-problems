const friends = [12, 15, 23, 34, 45, 56, 41, 50, 88];
// Removes elements from an array and, if necessary, inserts new elements in their place,
//  returning the deleted elements.
// Will change the original array.
const partial = friends.splice(2, 5, 99, 88, 999, 777);
console.log(partial);
console.log(friends);