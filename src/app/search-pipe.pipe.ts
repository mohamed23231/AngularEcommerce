import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products';
@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(allProducts: Product[], userWord: string): Product[] {
    if (!allProducts) {
      return [];
    }

    if (!userWord) {
      return allProducts;
    }
    
    return allProducts.filter(product => product.title.toLowerCase().includes(userWord.toLowerCase()));
  }

}
