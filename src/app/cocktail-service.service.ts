import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {


  getCocktails() {
  const monaco = new Cocktail ("monaco", 8, "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Monaco_bi%C3%A8re.jpeg/1200px-Monaco_bi%C3%A8re.jpeg")
  const mojito = new Cocktail ("mojito", 5, "https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg")
  const the = new Cocktail ("the", 3, "https://m.bettybossi.ch/static/rezepte/x/bb_bbzc090315_0023b_x.jpg")
  return [monaco, mojito, the]
  }
}
