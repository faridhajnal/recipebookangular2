import { Ingredient } from '../shared/ingredient';
export class ShoppingListService {

  private items : Ingredient[] = [];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(items: Ingredient[]){
    Array.prototype.push.apply(this.items, items);
    //push multiple items at once in one line
  }

  addIndividual(item : Ingredient){
    this.items.push(item);
  }

  editItem(item: Ingredient, ni: Ingredient){
    this.items[this.items.indexOf(item)] = ni; //changing array
  }

  deleteItem(item: Ingredient){
    this.items.splice(this.items.indexOf(item),1);
  }

}
