export interface IPromise<T> extends Object {
    then: {
        (handler: (args: T) => void): IPromise<any>;
        (handler: (args: T) => any): IPromise<any>;
    };
    fail: {
        (handler: (args: T) => void): IPromise<any>;
        (handler: (args: T) => any): IPromise<any>;
    };
    valueOf(): any;
}

export interface Base extends Object {
    constructor(...params: any[]);
    getType: () => Base;
}

interface Event extends Object {
    attach(eventHandler: (sender: any, event: any) => void): void;
    detach(eventHandler: () => void): void;
    fire(e: any, sender: any): void;
}

export interface Entity extends Base {
    constructor();
    constructor(initData: {});

    entityState: number;
    changedProperties: any[];

    propertyChanging: Event;
    propertyChanged: Event;
    propertyValidationError: Event;
    isValid: boolean;
}

export interface Queryable<T extends Entity> extends Object {
    filter(predicate: (it: T) => boolean): Queryable<T>;
    filter(predicate: (it: T) => boolean, thisArg: any): Queryable<T>;

    map(projection: (it: T) => any): Queryable<any>;

    length(): IPromise<Number>;
    length(handler: (result: number) => void): IPromise<Number>;
    length(handler: { success?: (result: number) => void; error?: (result: any) => void; }): IPromise<Number>;

    forEach(handler: (it: any) => void): IPromise<T>;

    toArray(): IPromise<T[]>;
    toArray(handler: (result: T[]) => void): IPromise<T[]>;
    toArray(handler: { success?: (result: T[]) => void; error?: (result: any) => void; }): IPromise<T[]>;

    single(predicate: (it: T) => boolean, params?: any, handler?: (result: T) => void): IPromise<T>;
    single(predicate: (it: T) => boolean, params?: any, handler?: { success?: (result: T) => void; error?: (result: any) => void; }): IPromise<T>;

    take(amout: number): Queryable<T>;
    skip(amout: number): Queryable<T>;

    order(selector: string): Queryable<T>;
    orderBy(predicate: (it: any) => any): Queryable<T>;
    orderByDescending(predicate: (it: any) => any): Queryable<T>;

    first(predicate: (it: T) => boolean, params?: any, handler?: (result: T) => void): IPromise<T>;
    first(predicate: (it: T) => boolean, params?: any, handler?: { success?: (result: T) => void; error?: (result: any) => void; }): IPromise<T>;

    include(selector: string): Queryable<T>;

    removeAll(): IPromise<Number>;
    removeAll(handler: (count: number) => void): IPromise<Number>;
    removeAll(handler: { success?: (result: number) => void; error?: (result: any) => void; }): IPromise<Number>;
}

export interface EntitySet<T extends Entity> extends Queryable<T> {
    tableName: string;
    collectionName: string;

    add(item: T): T;
    add(initData: {}): T;

    attach(item: T): void;
    attach(item: {}): void;
    attachOrGet(item: T): T;
    attachOrGet(item: {}): T;

    detach(item: T): void;
    detach(item: {}): void;

    remove(item: T): void;
    remove(item: {}): void;

    elementType: T;
}

export interface EntityContext extends Object {
    constructor(config: any);
    constructor(config: { name: string; oDataServiceHost: string; MaxDataServiceVersion: string; });
    constructor(config: { name: string; oDataServiceHost?: string; databaseName?: string; localStoreName?: string; user?: string; password?: string; });

    onReady(): IPromise<EntityContext>;
    onReady(handler: (currentContext: EntityContext) => void): IPromise<EntityContext>;
    saveChanges(): IPromise<Number>;
    saveChanges(handler: (result: number) => void): IPromise<Number>;
    saveChanges(cb: { success?: (result: number) => void; error?: (result: any) => void; }): IPromise<Number>;

    add(item: Entity): Entity;
    attach(item: Entity): void;
    attachOrGet(item: Entity): Entity;
    detach(item: Entity): void;
    remove(item: Entity): void;
}

export interface Blob extends Object {

}
export interface Guid extends Object {
    constructor(value: string);
    value: string;
}


export interface SimpleBase extends Object {
    constructor(initData: any);
}
export interface Geospatial extends SimpleBase {
    constructor(initData: any);
    type: String;
}
export interface Geography extends Geospatial {
    constructor(initData: any);
}

export interface GeographyPoint extends Geography {
    constructor(initData: any);
    constructor(coordinates: any[]);
    constructor(longitude: number, latitude: number);
    longitude: number;
    latitude: number;
    coordinates: any[];
}
export interface GeographyLineString extends Geography {
    constructor(initData: any);
    constructor(coordinates: any[]);
    coordinates: any[];
}
export interface GeographyPolygon extends Geography {
    constructor(initData: any);
    constructor(coordinates: any[]);
    coordinates: any[];
}
export interface GeographyMultiPoint extends Geography {
    constructor(initData: any);
    constructor(coordinates: any[]);
    coordinates: any[];
}
export interface GeographyMultiLineString extends Geography {
    constructor(initData: any);
    constructor(coordinates: any[]);
    coordinates: any[];
}
export interface GeographyMultiPolygon extends Geography {
    constructor(initData: any);
    constructor(coordinates: any[]);
    coordinates: any[];
}
export interface GeographyCollection extends Geography {
    constructor(initData: any);
    constructor(geometries: any[]);
    geometries: any[];
}

export interface Geometry extends Geospatial {
    constructor(initData: any);
}

export interface GeometryPoint extends Geometry {
    constructor(initData: any);
    constructor(coordinates: any[]);
    constructor(x: number, y: number);
    x: number;
    y: number;
    coordinates: any[];
}
export interface GeometryLineString extends Geometry {
    constructor(initData: any);
    constructor(coordinates: any[]);
    coordinates: any[];
}
export interface GeometryPolygon extends Geometry {
    constructor(initData: any);
    constructor(coordinates: any[]);
    coordinates: any[];
}
export interface GeometryMultiPoint extends Geometry {
    constructor(initData: any);
    constructor(coordinates: any[]);
    coordinates: any[];
}
export interface GeometryMultiLineString extends Geometry {
    constructor(initData: any);
    constructor(coordinates: any[]);
    coordinates: any[];
}
export interface GeometryMultiPolygon extends Geometry {
    constructor(initData: any);
    constructor(coordinates: any[]);
    coordinates: any[];
}
export interface GeometryCollection extends Geography {
    constructor(initData: any);
    constructor(geometries: any[]);
    geometries: any[];
}

interface String {
    contains(s: string): boolean;
    startsWith(s: string): boolean;
    endsWith(s: string): boolean;
    strLength(): number;
    indexOf(s: string): number;
    concat(s: string): string;
}

interface Date {
    day(): number;
    hour(): number;
    minute(): number;
    month(): number;
    second(): number;
    year(): number;
}

interface Number {
    round(): number;
    floor(): number;
    ceiling(): number;
}