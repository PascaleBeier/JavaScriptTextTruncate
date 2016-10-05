## 2.0.1

### Changes

- Changed ouput filename to `javascript-text-truncate.min.js`
- Switched from `babel-cli` to `babel-core`
- Updated webpack to `2.1.0-beta.25`
- Updated development dependencies
- Updated example
- Fixed `.editorconfig`
- Updated README

## 2.0.0

> Updated API. Read about breaking changes below.

### Bug Fixes

* Do not try iterating over null

### Breaking Changes

* rename window object from JavaScriptTextTruncate to TruncatedText
* rename className to el
* use querySelectorAll instead of getElementsByClassName

The other option keys remain the same. For example

this:

```javascript
new JavaScriptTextTruncate({
    className: 'truncate'
})
```

... becomes ...

```javascript
new TruncatedText({
    el: '.truncate'
})
```

## 1.0.0

> Initial Release
