import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(allProducts: any[], userWord: string): any[] {
    if (!allProducts) {
      return [];
    }

    if (!userWord) {
      return allProducts;
    }
    
    return allProducts.filter(product => product.title.toLowerCase().includes(userWord.toLowerCase()));
  }

}
