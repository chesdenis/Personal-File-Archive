import { IPromise } from './jay-data-helpers';

export var resolve: (p: any) => IPromise<any>;
export var when: (p: IPromise<any>, then?: () => any, fail?: () => any) => IPromise<any>;
export var all: (p: IPromise<any>[]) => IPromise<any>;
export var allResolved: (p: IPromise<any>[]) => IPromise<any>;

export var fcall: (handler: () => any) => IPromise<any>;