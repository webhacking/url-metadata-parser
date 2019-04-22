# Metadata Parser

> Request an http(s) url and *scrape its metadata*. It requires [node-html-parser](https://github.com/taoqf/node-html-parser)

<p align="left">
<a href="https://travis-ci.org/webhacking/url-metadata-parser"><img src="https://travis-ci.org/webhacking/url-metadata-parser.svg?branch=master" alt="Build Status"></a>
<a href="https://codecov.io/gh/webhacking/url-metadata-parser"><img src="https://codecov.io/gh/webhacking/url-metadata-parser/branch/master/graph/badge.svg" /></a>
</p>


## Install

```
npm install url-metadata-parser
```

## Usage

Promise-based:
```javascript
import {UrlMetadataParser} from 'url-metadata-parser';
UrlMetadataParser.parse('https://www.google.com').toPromise().then(metadata => {
  const description = metadata.getContentByPropertyName('description');
  console.log('Here, Google website description', description);
});
```

Observable-based:
```javascript
UrlMetadataParser.parse('https://www.google.com').subscribe(metadata => {
  const description = metadata.getContentByPropertyName('description');
  console.log('Here, Google website description', description);
});
```

## API

- getContentByPropertyName(propertyName: string)
- getContentByName(name: string)
- getNameByContent(content: string)
  
## Where do I go for help?
 
If you need, open an issue.

## Tests

```npm test``` runs the jest tests.

```npm run-script coverage``` runs the tests and reports code coverage.

## Contributing

If you want to contribute to the project (awesome!!), just pull request.





