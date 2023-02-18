import BaseComponent from "./index.js";


class Image extends BaseComponent {
    constructor(path) {
        super("img")
        this.htmlElement.src = path
    }
}

export default Image
