import {UrlMetadataParser} from './url-metadata-parser';
import {Metatag} from './metatag';
import {MetaEntity} from './meta.entity';

const metaTags = [
  new Metatag('<meta name="author" content="Woo YeongJun"/>'),
  new Metatag('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />'),
  new Metatag('<meta property="og:site_name" content="Hax0rs website">')
];

const metaEntity = new MetaEntity(metaTags);

it('Get contents by name.', () => {
  expect(metaEntity.getContentByName('author')).toBe('Woo YeongJun');
});

it('Get name by contents.', () => {
  expect(metaEntity.getNameByContent('Woo YeongJun')).toBe('author');
});

it('Get contents by property by name.', () => {
  expect(metaEntity.getContentByPropertyName('og:site_name')).toBe('Hax0rs website');
});


