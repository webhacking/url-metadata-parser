import {MetadataParser} from '../src';

// Promise-based:
// MetadataParser.parse('https://www.naver.com').subscribe(tags => console.log('tags', tags));

// Observable-based:
MetadataParser.parse('https://www.google.com').toPromise().then(tags => console.log('tags', tags));


