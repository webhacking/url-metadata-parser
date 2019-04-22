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
}