import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Lasagna',
      'Try it at home!', 
      'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/The-Best-Ever-Lasagna_EXPS_THD18_233582_E08_01_2b.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Pastry', 4),
        new Ingredient('Tomato Sauce', 1),
        new Ingredient('Cheese', 1)
      ]),
    new Recipe(
      'Delicious Red Velvet',
      'You cannot miss this one!', 
      'https://spicysouthernkitchen.com/wp-content/uploads/Red-Velvet-Cake-18.jpg', 
      [
        new Ingredient('Flour', 1),
        new Ingredient('Cream', 1),
        new Ingredient('Butter', 1),
        new Ingredient('Eggs', 4),
        new Ingredient('Vanilla Extract', 1),
        new Ingredient('Red Food Coloring', 4) 
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}


  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
