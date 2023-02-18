import Box from "../../../pure/box.js";
import Image from "../../../pure/image.js";
import ListItem from "../../../pure/listItem.js";
import Text from "../../../pure/text.js";


class ForecastIcon extends ListItem {
    constructor(hour, forecastStatus, humidity, temperature) {
        super()
        
        const cloud = new Image("../../../assets/cloud.png")
        const rain = new Image("../../../assets/rain.png")
        const sun = new Image("../../../assets/sun.png")

        const icon = new Box()
        icon.className = this.getIconClassNameByStatus(forecastStatus)
        icon.children = [
            cloud,
            rain,
            sun
        ]

        const currentDay = new Text(hour)
        currentDay.className = "forecastDay__text--day"

        const currentHumidity = new Text(humidity)
        currentHumidity.className = "forecastDay__text--humidity"

        const currentTemperature = new Text(temperature)
        currentTemperature.className = "forecastDay__text--temperature"

        const blankSpace = new Box()
        blankSpace.inlineStyle = "height: 30px; width: 30px;"

        this.children = [
            currentDay,
            icon,
            blankSpace,
            currentHumidity,
            currentTemperature
        ]

    }

    getIconClassNameByStatus(status) {
        const blockAndElement = "forecastDay__icon"

        return `${blockAndElement}--${status}`
    }
}


export default ForecastIcon
