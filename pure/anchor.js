import BaseComponent from "./index.js";


class Anchor extends BaseComponent {
    constructor(href, content) {
        super("a")

        this.htmlElement.target = "_blank"
        this.htmlElement.href = href
        this.htmlElement.innerText = content
    }
}


export default Anchor
