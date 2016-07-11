class JavaScriptTextTruncate {
    constructor(options) {
        const elements = document.getElementsByClassName(options.className)
   
        for (let el of elements) {
            el.innerHTML.length > options.length ? el.innerHTML = el.innerHTML.substr(0, options.length - options.seperator.length) + options.seperator : null
        }
    }
}
window.JavaScriptTextTruncate = JavaScriptTextTruncate