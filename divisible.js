/* 
1.Show output from: 1-50
2. If the number is divisible by 3 then instead of number show 'foo'.
2. If the number is divisible by 5 then instead of number show 'bar'.
2. If the number is divisible by both 3 & 5 then instead of number show 'foobar'.

*/

function numbers(number) {
    for (let i = 1; i <= 50; i++) {
        const number = i;
        if (number % 3 === 0 && number % 5 === 0) {
            console.log('foobar');
        }
        else if (number % 3 === 0) {
            console.log('foo');
        }
        else if (number % 5 === 0) {
            console.log('bar')
        }
        else {
            console.log(number);
        }

    }
    return number;
}
numbers(50);