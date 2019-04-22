import { Metatag } from './metatag';
export declare class MetaEntity {
    tags: Metatag[];
    constructor(tags: Metatag[]);
    getContentByPropertyName(propertyName: string): string | null;
    getContentByName(name: string): string | null;
    getNameByContent(content: string): string;
}
