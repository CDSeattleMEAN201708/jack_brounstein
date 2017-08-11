import { Component, OnInit } from '@angular/core';

import { Book } from "./book"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Array<Book>
  
  constructor() { }

  ngOnInit() {
    this.books = [
      {title: "And Then There Were None", author: "Agatha Christie"},
      {title: "Dune", author: "Frank Herbert"},
      {title: "Gone Girl", author: "Gillian Flynn"},
    ]
  }

  create_book(new_book: Book){
    this.books.push(new_book)
  }

}
