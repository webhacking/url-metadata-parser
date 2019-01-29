import {HTMLElement, parse, TextNode} from 'node-html-parser';

export class Metatag {
  public tag: string;
  public node: (TextNode & {
    valid: boolean;
  }) | (HTMLElement & {
    valid: boolean;
  });

  public constructor(tag: string) {
    this.tag = tag;
    this.node = parse(this.tag, {
      lowerCaseTagName: true
    });
  }

  // Todo Will be Replacement anti codes
  public get(select: string): any {
    return Object.keys(this.attributes()).filter((attribute, key) => {
      if ( attribute === 'property' ) {
        return this.attributes()[attribute] === select;
      } else {
        return attribute === select;
      }
    }).map( (key: string)=> {
      if ( key === 'property' ) {
        return this.attributes()['content'];
      }
      return this.attributes()[key];
    })
  }

  public attributes(): any {
    return (this.node.childNodes[0] as HTMLElement).attributes;
  }
}