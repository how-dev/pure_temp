import Box from "../../../pure/box.js";
import Text from "../../../pure/text.js";


class MinMaxBar extends Box {
    constructor(min, max) {
        super()

        this.className = "minMaxBar"

        const minTemp = new Text(min)
        minTemp.className = "minMaxBar__text--min"
        const maxTemp = new Text(max)
        maxTemp.className = "minMaxBar__text--max"

        const levelBar = new Box()
        levelBar.className = "minMaxBar__bar"
        const inLevelBar = new Box()
        inLevelBar.className = "minMaxBar__level"
        inLevelBar.inlineStyle = this.getRandomLevelBar()

        levelBar.children = [
            inLevelBar
        ]

        this.children = [
            minTemp,
            levelBar,
            maxTemp
        ]
    }

    getRandomLevelBar() {
        const width = Math.floor(Math.random() * (100 - 60) + 60)
        const margin = 100 - width
        const orientation = width % 2 === 0 ? "left" : "right"

        return `width: ${width}%; margin-${orientation}: ${margin}px`
    }
}


export default MinMaxBar
