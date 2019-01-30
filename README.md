# Metadata Parser

Request an http(s) url and scrape its metadata.

## Install

```
npm install url-metadata-parser
```

## Usage

Promise-based:
```typescript
import {UrlMetadataParser} from 'url-metadata-parser';
UrlMetadataParser.parse('https://www.google.com').toPromise().then(tags => console.log('tags', tags));
```

Observable-based:
```typescript
import {UrlMetadataParser} from 'url-metadata-parser';
UrlMetadataParser.parse('https://www.google.com').subscribe(tags => console.log('tags', tags));
```

## API

- get(select: string)
  - Will be returned attribute value 




