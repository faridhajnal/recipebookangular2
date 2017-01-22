import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit, OnChanges {

  @Input ()item: Ingredient; //item from outside (when clicking on an ingredient)
  @Output () cleared = new EventEmitter();
  isAdd : boolean = true;
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    console.log("changes", changes);
    if(changes.item.currentValue === null){
      this.isAdd = true;
      this.item = { name : null, amount: null}; //avoid errors
    }
    else{
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient){
    if(!this.isAdd) {
      this.sls.editItem(this.item, ingredient);
      this.onClear();
    }
    else{
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.sls.addIndividual(this.item);
    }

  }

  onDelete(){
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear(){
    this.isAdd = true;
    this.cleared.emit(); //no need to actualy emit a value
  }

}
