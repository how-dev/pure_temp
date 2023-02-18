import OrderedList from "../../../pure/orderedList.js";
import ForecastIcon from "../forecastIcon/index.js";


class HoursForecastList extends OrderedList {
    constructor() {
        super()
        this.className = "forecastWeek"

        this.children = [
            new ForecastIcon("11", "halfCloudy", "40%", "27°"),
            new ForecastIcon("12", "sunny", "30%", "32°"),
            new ForecastIcon("13", "rainy", "50%", "26°"),
            new ForecastIcon("14", "rainy", "80%", "24°"),
            new ForecastIcon("15", "cloudy", "70%", "21°"),
        ]
    }
}


export default HoursForecastList
