const names = ['Abul', 'Babul', 'Kabul', 'Chabul', 'Abul', 'Gabul', 'Chabul', 'Babul', 'Abul', 'Abul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueName = removeDuplicate(names)
console.log(uniqueName);