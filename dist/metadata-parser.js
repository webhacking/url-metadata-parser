"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const from_1 = require("rxjs/internal/observable/from");
const operators_1 = require("rxjs/operators");
const iconvLte = require("iconv-lite");
const of_1 = require("rxjs/internal/observable/of");
const metatag_1 = require("./metatag");
class MetadataParser {
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
                return of_1.of(charset.toUpperCase());
            }
        }
        return of_1.of(null);
    }
    static parse(url) {
        return from_1.from(axios_1.default.get(url, {
            responseType: 'arraybuffer',
        })).pipe(operators_1.concatMap((res) => {
            return this.getCharsetByBom(res.data).pipe(operators_1.map((charset) => {
                const body = iconvLte.decode(res.data, charset || 'UTF-8');
                return body.match(/<meta[^>]+>/g).map(function (val) {
                    return new metatag_1.Metatag(val);
                });
            }));
        }));
    }
}
exports.MetadataParser = MetadataParser;
//# sourceMappingURL=metadata-parser.js.map