"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetaEntity {
    constructor(tags) {
        this.tags = tags;
    }
    getContentByPropertyName(propertyName) {
        return this.tags.map((tag) => tag.node.childNodes[0].attributes).filter(tag => tag.property && tag.property === propertyName)[0] ? this.tags.map((tag) => tag.node.childNodes[0].attributes).filter(tag => tag.property && tag.property === propertyName)[0].content : null;
    }
    getContentByName(name) {
        return this.tags.map((tag) => tag.node.childNodes[0].attributes).filter(tag => tag.name && tag.name == name)[0] ? this.tags.map((tag) => tag.node.childNodes[0].attributes).filter(tag => tag.name && tag.property === name)[0].content : null;
    }
    getNameByContent(content) {
        return this.tags.map((tag) => tag.node.childNodes[0].attributes).filter(tag => tag.content && tag.content == content)[0] ? this.tags.map((tag) => tag.node.childNodes[0].attributes).filter(tag => tag.content && tag.content === content)[0].name : null;
    }
}
exports.MetaEntity = MetaEntity;
//# sourceMappingURL=meta.entity.js.map