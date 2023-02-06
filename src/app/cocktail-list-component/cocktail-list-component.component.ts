import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})
export class CocktailListComponentComponent implements OnInit {
  cocktails: Cocktail [] = this.cocktailService.getCocktails()

  constructor(public cocktailService: CocktailService ) {}
  ngOnInit(): void {
    console.log(this.cocktails)
  }


  }
