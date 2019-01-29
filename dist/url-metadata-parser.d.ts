/// <reference types="node" />
import { Observable } from 'rxjs/internal/Observable';
import { Metatag } from './metatag';
export declare type Charset = string;
export declare type IntermediateResult = Charset | null;
export declare class UrlMetadataParser {
    static getCharsetByBom(buf: Buffer): Observable<IntermediateResult>;
    static parse(url: string): Observable<Metatag[]>;
}
