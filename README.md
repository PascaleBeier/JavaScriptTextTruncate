## JavaScriptTextTruncate

> An amazingly small, dependency-less utility for text truncation. Less than 1 KByte!

### Download

```bash
# Get it with npm ...
$ npm i javascript-text-truncate
# Or clone it from GitHub
$ git clone https://github.com/PascaleBeier/JavaScriptTextTruncate
```

### Usage

```html
<div class="truncate">
Est soluta rerum velit quasi quos et esse. Velit dolore quis autem distinctio dolor molestiae placeat. Rerum est magni quae et quo non voluptatem exercitationem. Molestiae et voluptas perferendis deserunt velit voluptatem. Earum quo consequuntur velit tempore cum nihil sint omnis.
Soluta est vel sed id molestiae recusandae non. In harum minima aut pariatur quam eligendi dolores. Consequatur quod deleniti adipisci corporis totam. Non autem rerum iusto vero accusantium numquam nesciunt sequi.
</div>
```

#### Browser Global

```html
<script src="javascript-text-truncate.js"></script>
<script>
    new TruncatedText({
        el: '.truncate',
        length: 255,
        seperator: 'Read More ...'  
    });
</script>
```

#### ES6

```javascript
import TruncatedText from 'javascript-text-truncate'

new TruncatedText({
    el: '.truncate',
    length: 255,
    seperator: 'Read More ...'  
});
```

#### ES5

```javascript
var TruncatedText = require('javascript-text-truncate');

new TruncatedText({
    el: '.truncate',
    length: 255,
    seperator: 'Read More ...'  
});
```

### Options

```javascript

new TruncatedText({
    el: '.truncate', // Element containg text to be truncated. Defaults to null.
    length: 255, // Truncate text after the given amount of charakters. Defaults to 255.
    seperator: 'Read More ...' // Text to be placed after the truncated text. Defaults to 'Read More ...'
})
```

### CHANGELOG

See [CHANGELOG](CHANGELOG.md)

### LICENSE

The MIT License.
