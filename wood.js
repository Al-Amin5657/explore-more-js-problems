function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWod = bedQuantity * perBedWood;
    const totalWood = chairWood + tableWood + bedWod;
    return totalWood;
}
const totalWood = woodCalculator(2, 0, 0);
console.log(totalWood);
