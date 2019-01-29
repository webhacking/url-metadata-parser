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
    // Todo Will be Replacement anti codes
    get(select) {
        return Object.keys(this.attributes()).filter((attribute, key) => {
            if (attribute === 'property') {
                return this.attributes()[attribute] === select;
            }
            else {
                return attribute === select;
            }
        }).map((key) => {
            if (key === 'property') {
                return this.attributes()['content'];
            }
            return this.attributes()[key];
        });
    }
    attributes() {
        return this.node.childNodes[0].attributes;
    }
}
exports.Metatag = Metatag;
//# sourceMappingURL=metatag.js.map