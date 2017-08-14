import { Pipe, PipeTransform } from '@angular/core';

import { Book } from "./book"

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(book_array: Array<Book>, search_text: string): any {
    if(!search_text){ return book_array }

    search_text = search_text.toLowerCase()

    return book_array.filter(book => book.title.toLowerCase().includes(search_text) || book.author.toLowerCase().includes(search_text))
  }

  original_transform(book_array: Array<Book>, search_text: string): any {
    if(!search_text){ return book_array }

    let output: Array<Book> = []

    search_text = search_text.toLowerCase()

    for(let book of book_array){
      if(book.title.toLowerCase().includes(search_text) || book.author.toLowerCase().includes(search_text)){
        output.push(book)
      }
    }

    return output
  }

}
