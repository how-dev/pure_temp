import ROOT_HTML_ELEMENT from "./config.js"

class BaseComponent {
    constructor(htmlElement, father = ROOT_HTML_ELEMENT) {
        this.htmlElement = document.createElement(htmlElement)
        this.father = father
        this._children = null
        this._className = null
        this._id = null
        this._inlineStyle = null
        this._textContent = null
    }

    set children (nodes) {
        this._children = nodes

        for (let node of nodes) {
            this.htmlElement.appendChild(node.htmlElement)
        }
    }

    get children () {
        return this._children
    }

    set className (value) {
        this._className = value
        this.htmlElement.className = this._className
    }

    get className () {
        return this._className
    }

    set id (value) {
        this._id = value
        this.htmlElement.id = this._id
    }

    get id () {
        return this._id
    }

    set inlineStyle (value) {
        this._inlineStyle = value
        this.htmlElement.style = this._inlineStyle
    }

    get inlineStyle () {
        return this._inlineStyle
    }

    set textContent (value) {
        this._textContent = value
        this.htmlElement.innerHTML = this._textContent
    }

    get textContent () {
        return this._textContent
    }

    render() {
        this.father.appendChild(this.htmlElement)
    }
}


export default BaseComponent
