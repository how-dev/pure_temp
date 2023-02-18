import Section from "../../../pure/section.js";
import Text from "../../../pure/text.js";
import DayForecastList from "../daysForecastList/index.js";


class DayForecast extends Section {
    constructor() {
        super()
        this.className = "dayForecast"

        const title = new Text("previsão para 10 dias")
        title.className = "dayForecast__text--title"

        const dayForecastList = new DayForecastList()

        this.children = [
            title,
            dayForecastList
        ]
    }
}


export default DayForecast