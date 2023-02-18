import Section from "../../../pure/section.js";
import Text from "../../../pure/text.js";
import HoursForecastList from "../hoursForecastList/index.js";


class HourForecast extends Section {
    constructor() {
        super()
        this.className = "hourForecast"

        const title = new Text("previsão horária")
        title.className = "hourForecast__text--title"

        const hoursForecastList = new HoursForecastList()

        this.children = [
            title,
            hoursForecastList
        ]
    }
}


export default HourForecast
