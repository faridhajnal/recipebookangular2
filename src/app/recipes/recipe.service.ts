import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
@Injectable() //for being able to inject this service into others
export class RecipeService {
  private recipes : Recipe[] = [ //initialization (should come over http)
    new Recipe('Dummy', 'desc','http://www.elpopular.pe/sites/default/files/images/ms6ieiewzdorh8sygrbx.jpg',
    [
      new Ingredient('FF', 2),
      new Ingredient('PM', 1)
    ]),
    new Recipe('Otro', 'Chido', 'https://pbs.twimg.com/media/ClwtLRuUoAADevN.jpg:large', [])
    ];
  constructor() { }

  getRecipes(){ //all
    console.log('recipes', this.recipes);
    return this.recipes;
  }

  getRecipe(id: number){ //by id
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
