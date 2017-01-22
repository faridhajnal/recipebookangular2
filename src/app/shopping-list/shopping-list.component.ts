import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [];
  selectedItem : Ingredient = null; //no selected item initially
  constructor(private sls : ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems(); //all ingredients on shopping list
    console.log('items', this.items);
  }

  onSelect(item: Ingredient){
    this.selectedItem = item;
  }

  onCleared(){
    this.selectedItem = null; //reset,...
  }

}
