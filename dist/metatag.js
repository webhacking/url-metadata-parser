"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_html_parser_1 = require("node-html-parser");
class Metatag {
    constructor(tag) {
        this.tag = tag;
        this.node = node_html_parser_1.parse(this.tag, {
            lowerCaseTagName: true
        });
    }
}
exports.Metatag = Metatag;
//# sourceMappingURL=metatag.js.map