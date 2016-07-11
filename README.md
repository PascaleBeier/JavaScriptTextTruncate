## JavaScriptTextTruncate

> An amazingly small, dependency-less class truncating text. Only ~729 Bytes!

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
Ut ex qui aperiam distinctio et. Et sequi totam at facilis alias dignissimos inventore ex. Et est qui in. Commodi repudiandae et repellendus consequatur dolores quia unde.
Nisi quos maiores veritatis quia nobis repellendus ut. Labore et dolorum libero. Ducimus quo dolores aut fuga ullam. Sint dignissimos modi dolore recusandae est. Velit consequatur itaque et voluptatum sint recusandae aperiam expedita.
Quasi dolores repellat officia labore quo labore. Inventore enim quam omnis odio quis harum quia. Et rerum soluta non sed porro porro nihil. Dolorem quibusdam voluptate unde occaecati et. Aut possimus cumque inventore. Nostrum placeat et at.
</div>
```

#### Browser Global

```html
<script src="javascript-text-truncate.js"></script>
<script>
    new JavaScriptTextTruncate({
        className: 'truncate',
        length: 255,
        seperator: 'Read More ...'  
    });
</script>
```

#### ES6

```javascript
import JavaScriptTextTruncate from 'javascript-text-truncate'

new JavaScriptTextTruncate({
    className: 'truncate',
    length: 255,
    seperator: 'Read More ...'
})
```

#### ES5

```javascript
var JavaScriptTextTruncate = require('javascript-text-truncate');

new JavaScriptTextTruncate({
    className: 'truncate',
    length: 255,
    seperator: 'Read More ...'
});
```

### LICENSE

The MIT License.
