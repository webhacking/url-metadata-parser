import {Metatag} from './metatag';
import {HTMLElement} from 'node-html-parser';

export class MetaEntity {
  public tags: Metatag[];
  constructor(tags: Metatag[]) {
    this.tags = tags;
  }

  public getContentByPropertyName(propertyName: string): string | null {
    return this.tags.map((tag) => (tag.node.childNodes[0] as HTMLElement).attributes).filter(tag => tag.property && tag.property === propertyName)[0] ? this.tags.map((tag) => (tag.node.childNodes[0] as HTMLElement).attributes).filter(tag => tag.property && tag.property === propertyName)[0].content : null;
  }

  public getContentByName(name: string): string | null {
    return this.tags.map((tag) => (tag.node.childNodes[0] as HTMLElement).attributes).filter(tag => tag.name && tag.name == name)[0] ? this.tags.map((tag) => (tag.node.childNodes[0] as HTMLElement).attributes).filter(tag => tag.name && tag.property === name)[0].content : null;
  }

  public getNameByContent(content: string) {
    return this.tags.map((tag) => (tag.node.childNodes[0] as HTMLElement).attributes).filter(tag => tag.content && tag.content == content)[0] ? this.tags.map((tag) => (tag.node.childNodes[0] as HTMLElement).attributes).filter(tag => tag.content && tag.content === content)[0].name : null;
  }
}