export default class TruncatedText {
    constructor(options) {
        const elements = document.querySelectorAll(options.el) || null
        const length = options.length || 255
        const seperator = options.seperator || 'Read More ...'
   
        if (elements != null) {
            for (let el of elements) {
                el.innerHTML.length > length ? el.innerHTML = el.innerHTML.substr(0, length - seperator.length) + seperator : 0
            }
        }
    }
}
window.TruncatedText = TruncatedText