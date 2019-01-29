import { HTMLElement, TextNode } from 'node-html-parser';
export declare class Metatag {
    tag: string;
    node: (TextNode & {
        valid: boolean;
    }) | (HTMLElement & {
        valid: boolean;
    });
    constructor(tag: string);
    get(select: string): any;
    attributes(): any;
}
