import {Ingredient} from '../shared/ingredient'; //ENTITY FOR RECIPE
export class Recipe {
    constructor(public name : string, public description: string, public imagePath: string, public ingredients: Ingredient[])
    {
        console.log('ingredients,recipe constructor', ingredients);

    }
}
