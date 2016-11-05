import {Injectable} from '@angular/core';
import { GenericService } from '../Generic/generic-service';
import { Book, mockBooks } from 'App/Model/book';

@Injectable()
export class BooksService extends GenericService<Book>  {
    constructor() {
        super(mockBooks);
    }
}