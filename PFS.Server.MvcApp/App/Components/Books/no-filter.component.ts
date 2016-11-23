import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from 'App/Model/book';


@Component({
    moduleId: module.id,
    selector: 'no-filter-component',
    templateUrl: './no-filter.component.html'
})
export class NoFilterComponent implements OnInit {
    constructor(private dataService: BooksService) { }

    books: Book[];

    getBooks(): void {
        this.dataService
            .getEntitiesAsync()
            .then(books => {
                this.books = books;
            });
    }

    ngOnInit(): void {
        this.getBooks();
    }
}