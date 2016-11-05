export class GenericService<T>
{
    constructor(private mockCollection: T[]) { }
    getEntitiesSync(): T[] {
        return this.mockCollection;
    };
    getEntitiesAsync(): Promise<T[]> {
        return new Promise<T[]>(resolve => {
            resolve(this.mockCollection);
        });
    };
}