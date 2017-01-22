import {Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {RecipeService} from "../recipe.service";
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  private subscription: Subscription; //for detecting changes on a route param.
  private recipeId : number;
  selectedRecipe : Recipe;

  constructor(private sls: ShoppingListService, private route : ActivatedRoute,
              private recSer : RecipeService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => { this.recipeId=  params['id'];
                         this.selectedRecipe = this.recSer.getRecipe(this.recipeId);
                         //get specific recipe every time id param changes on route
      }
    )
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeId, 'edit']); // / slash at beginning for absolute route ( we are on child)
  }

  onDelete(){
    this.recSer.deleteRecipe(this.selectedRecipe); //global array => reflected instantly in all app
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //avoid memory leaks.
  }

  addToSL(){
      this.sls.addItems(this.selectedRecipe.ingredients); //add current's recipe ingredients to shoplist.
  }



}
