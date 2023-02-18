import BaseComponent from "./index.js";


class Text extends BaseComponent {
    constructor(content) {
        super("p")
        this.textContent = content
    }
}

export default Text
