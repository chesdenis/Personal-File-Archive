import {Entity} from './entity';
import {Tag} from './tag';

export interface Book extends Entity{
    Tags: Tag[];
}

export const mockBooks: Book[] = [
    { Id: 11, Name: 'book:Mr. Nice', Guid: "{04C3B7EF-2D1C-467E-AD9B-F4272A25EBA3}", Path: "asd", Tags: [{ Id: 0, Name: "One" }, { Id: 0, Name: "One" }, { Id: 0, Name: "5" }] },
    { Id: 12, Name: 'book:Narco', Guid: "{04C3B7EF-2D1C-467E-AD9B-F4272A25EBA3}", Path: "qwe", Tags: [{ Id: 0, Name: "1" }, { Id: 0, Name: "3" }, { Id: 0, Name: "5" }] },
    { Id: 13, Name: 'book:Bombasto', Guid: "{04C3B7EF-2D1C-467E-AD9B-F4272A25EBA3}", Path: "zxc", Tags: [{ Id: 0, Name: "11" }, { Id: 0, Name: "4" }, { Id: 0, Name: "4" }] },
    { Id: 14, Name: 'book:Celeritas', Guid: "{04C3B7EF-2D1C-467E-AD9B-F4272A25EBA3}", Path: "bvcxb", Tags: [{ Id: 0, Name: "22" }, { Id: 0, Name: "5" }, { Id: 0, Name: "4" }] },
    { Id: 15, Name: 'book:Magneta', Guid: "{04C3B7EF-2D1C-467E-AD9B-F4272A25EBA3}", Path: "hfdghd", Tags: [{ Id: 0, Name: "33" }, { Id: 0, Name: "6" }, { Id: 0, Name: "5" }] },
    { Id: 16, Name: 'book:RubberMan', Guid: "{04C3B7EF-2D1C-467E-AD9B-F4272A25EBA3}", Path: "ghj", Tags: [{ Id: 0, Name: "44" }, { Id: 0, Name: "7" }, { Id: 0, Name: "4" }] },
    { Id: 17, Name: 'book:Dynama', Guid: "{04C3B7EF-2D1C-467E-AD9B-F4272A25EBA3}", Path: "ghjk", Tags: [{ Id: 0, Name: "55" }, { Id: 0, Name: "8" }, { Id: 0, Name: "One" }] },
    { Id: 18, Name: 'book:Dr IQ', Guid: "{04C3B7EF-2D1C-467E-AD9B-F4272A25EBA3}", Path: "ytu", Tags: [{ Id: 0, Name: "66" }, { Id: 0, Name: "9" }, { Id: 0, Name: "5" }] },
    { Id: 19, Name: 'book:Magma', Guid: "{04C3B7EF-2D1C-467E-AD9B-F4272A25EBA3}", Path: "wetr", Tags: [{ Id: 0, Name: "77" }, { Id: 0, Name: "One" }, { Id: 0, Name: "5" }] },
    { Id: 20, Name: 'book:Tornado', Guid: "{04C3B7EF-2D1C-467E-AD9B-F4272A25EBA3}", Path: "oiu", Tags: [{ Id: 0, Name: "88" }, { Id: 0, Name: "One" }, { Id: 0, Name: "One" }] },
];
