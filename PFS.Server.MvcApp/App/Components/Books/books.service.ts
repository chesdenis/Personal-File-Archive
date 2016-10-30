import {Injectable} from '@angular/core';
import {Book} from 'App/Model/book';

export const BOOKS: Book[] = [
    { Id: 11, Name: 'Mr. Nice', Guid:"", Path: "", Tags:[] },
    { Id: 12, Name: 'Narco', Guid: "", Path: "", Tags: [] },
    { Id: 13, Name: 'Bombasto', Guid: "", Path: "", Tags: [] },
    { Id: 14, Name: 'Celeritas', Guid: "", Path: "", Tags: [] },
    { Id: 15, Name: 'Magneta', Guid: "", Path: "", Tags: [] },
    { Id: 16, Name: 'RubberMan', Guid: "", Path: "", Tags: [] },
    { Id: 17, Name: 'Dynama', Guid: "", Path: "", Tags: [] },
    { Id: 18, Name: 'Dr IQ', Guid: "", Path: "", Tags: [] },
    { Id: 19, Name: 'Magma', Guid: "", Path: "", Tags: [] },
    { Id: 20, Name: 'Tornado', Guid: "", Path: "", Tags: [] }
];

@Injectable()
export class BooksService {
    getAll(): Book[] {
        return BOOKS;
    }
}