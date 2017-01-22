export class Ingredient { //RECIPE HAS INGREDIENT [] PROPERTY, INGREDIENT[] CAN BE ADDED TO SHOPLIST.
    constructor(public name: string, public amount: number)
    {
        console.log('name', name);
        console.log('amount', amount);
    }
}
