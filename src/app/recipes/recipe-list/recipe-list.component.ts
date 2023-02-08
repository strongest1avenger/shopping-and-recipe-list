import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Tis but a test', "https://media.istockphoto.com/id/517168031/photo/delicious-gourmet-food.jpg?s=612x612&w=is&k=20&c=f70jZF5dXrVl-E-mEBk8PploQ3HXL2FQiaKhYR80MUY=")
  ];

}
