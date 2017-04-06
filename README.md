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

Simply add the the attribute `data-text-truncate` to the element which contents you want to truncate.

```html
<p class="truncate" data-text-truncate>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et d
</p>
```

The default length is 100 characters. The above text is 110 characters and would be stripped down to 100 characters.

#### Options

You can pass additional attributes to further configure text truncation. Let's stick to our example.
Let's say you don't want the text to be any longer than 25 characters:

```html
<p class="truncate" data-text-truncate data-text-truncate-length="25">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et d
</p>
```




### Installation

```html
<script src="javascript-text-truncate.min.js"></script>
```

Yup, it's easy as that! This package is meant to be consumed in the browser.

### CHANGELOG

See [CHANGELOG](CHANGELOG.md).

### LICENSE

See [LICENSE](License.md).
