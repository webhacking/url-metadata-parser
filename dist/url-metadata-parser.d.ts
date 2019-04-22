/// <reference types="node" />
import { Observable } from 'rxjs/internal/Observable';
import { MetaEntity } from './meta.entity';
export declare type Charset = string;
export declare type IntermediateResult = Charset | null;
export declare enum Errors {
    ContentsDoesNotExists = "Contents Does not exists.",
}
export declare class UrlMetadataParser {
    static getCharsetByBom(buf: Buffer): Observable<IntermediateResult>;
    static parse(url: string): Observable<MetaEntity>;
}
