import {Injectable} from '@angular/core';
import { GenericService } from '../Generic/generic-service';
import { Book, mockBooks } from '../../Model/book';

@Injectable()
export class BooksService extends GenericService<Book>  {
    constructor() {
        super(mockBooks);
    }
}