## 2.0

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
    className: 'truncate
})
```

... becomes ...

```javascript
new TruncatedText({
    el: '.truncate'
})
```

## 1.0

> Initial Release