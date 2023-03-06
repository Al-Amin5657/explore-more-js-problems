const country = 'Bangladesh';
const age = 50;
const isIndependent = true;
const student = { id: 121, class: 11, name: 'Agun' };
const friends = [13, 24, 35, 56, 67, 69];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof add);
// Check array using Array.isArray()
console.log(Array.isArray(friends));

// -----------------------
console.log(friends.includes(24));
console.log(friends.includes(22));

if (friends.indexOf(25) !== -1) {
    console.log('Number is present')
}
else {
    console.log('Number is absent');
}

// concat
const newFriendsAge = [12, 15, 34, 22];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);