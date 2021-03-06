import {Routes} from "@angular/router";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
/**
 * Created by Farid on 19/1/2017.
 */
export const RECIPE_ROUTES : Routes = [
  {path : '', component : RecipeStartComponent },
  {path : 'new', component : RecipeEditComponent},
  {path : ':id', component : RecipeDetailComponent },
  {path : ':id/edit', component : RecipeEditComponent}

]
