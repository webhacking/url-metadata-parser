import axios from 'axios';
import { from } from 'rxjs/internal/observable/from';
import { concatMap, map } from 'rxjs/operators';
import * as iconvLte from 'iconv-lite';
import { of } from 'rxjs/internal/observable/of';
import { Metatag } from './metatag';
export class MetadataParser {
    static getCharsetByBom(buf) {
        const boms = new Map([
            // ['utf-8', [0xEF, 0xBB, 0xBF]],
            ['utf-1', [0xF7, 0x64, 0x4C]],
            ['utf-7', [0x2B, 0x2F, 0x76, 0x38]],
            ['utf-7', [0x2B, 0x2F, 0x76, 0x39]],
            ['utf-7', [0x2B, 0x2F, 0x76, 0x2B]],
            ['utf-7', [0x2B, 0x2F, 0x76, 0x3F]],
            ['utf-7', [0x2B, 0x2F, 0x76, 0x38, 0x2D]],
            ['utf-8', [0xEF, 0xBB, 0xBF]],
            ['utf-16be', [0xFE, 0xFF]],
            ['utf-16le', [0xFF, 0xFE]],
            ['utf-ebcdic', [0xDD, 0x73, 0x66, 0x73]],
            ['scsu', [0x0E, 0xFE, 0xFF]],
            ['bocu-1', [0xFB, 0xEE, 0x28]],
            ['gb-18030', [0x84, 0x31, 0x95, 0x33]],
        ].map(([c, bytes]) => {
            return [c, Buffer.from(bytes)];
        }));
        const startsWith = (bom) => {
            return buf.slice(0, bom.length).equals(bom);
        };
        for (let [charset, bom] of boms) {
            if (startsWith(bom)) {
                return of(charset.toUpperCase());
            }
        }
        return of(null);
    }
    static parse(url) {
        return from(axios.get(url, {
            responseType: 'arraybuffer',
        })).pipe(concatMap((res) => {
            return this.getCharsetByBom(res.data).pipe(map((charset) => {
                const body = iconvLte.decode(res.data, charset || 'UTF-8');
                return body.match(/<meta[^>]+>/g).map(function (val) {
                    return new Metatag(val);
                });
            }));
        }));
    }
}
//# sourceMappingURL=metadata-parser.js.map