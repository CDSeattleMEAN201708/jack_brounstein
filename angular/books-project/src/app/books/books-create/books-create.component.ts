import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from "./../book"

@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.css']
})
export class BooksCreateComponent implements OnInit {
  new_book: Book = new Book
  @Output() create_book_event = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  create_book(){
    this.create_book_event.emit(this.new_book)
    this.new_book = new Book
  }

}
