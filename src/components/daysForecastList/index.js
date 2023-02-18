import ListItem from "../../../pure/listItem.js";
import OrderedList from "../../../pure/orderedList.js";
import Text from "../../../pure/text.js";
import ForecastIcon from "../forecastIcon/index.js";
import MinMaxBar from "../minMaxBar/index.js";
import days from "./days.js";


class DayForecastList extends OrderedList {
    constructor() {
        super()
        this.className = "dayForecastList"

        const dayForecasts = []

        for (let day of days) {
            const {
                dayName, 
                forecastStatus, 
                forecastHumity, 
                min, 
                max
            } = day
            const day_title = new Text(dayName)
            const day_icon = new ForecastIcon(
                "", 
                forecastStatus, 
                forecastHumity, 
                ""
            )
            const item = new ListItem()
            item.className = "dayForecastList__item"
            const minMaxBar = new MinMaxBar(min, max)
    
            item.children = [
                day_title,
                day_icon,
                minMaxBar
            ]

            dayForecasts.push(item)
        }


        this.children = dayForecasts
    }
}


export default DayForecastList
