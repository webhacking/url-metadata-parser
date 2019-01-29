import { parse } from 'node-html-parser';
export class Metatag {
    constructor(tag) {
        this.tag = tag;
        this.node = parse(this.tag, {
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
//# sourceMappingURL=metatag.js.map