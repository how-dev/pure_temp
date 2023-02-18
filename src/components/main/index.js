import Main from "../../../pure/main.js";
import BlockInformations from "../blockInformations/index.js";
import DayForecast from "../dayForecast/index.js";
import HourForecast from "../hourForecast/index.js";
import Notice from "../notice/index.js";


class MainTemp extends Main {
    constructor() {
        super()
        this.className = "mainTemp"

        const notice = new Notice(
            "Chuva forte",
            "Instituto Nacional de Meteorologia: Chuva forte."
        )
        const hourForecast = new HourForecast()
        const dayForecast = new DayForecast()
        const blockInformations = new BlockInformations()

        this.children = [
            notice,
            hourForecast,
            dayForecast,
            blockInformations
        ]
    }
}


export default MainTemp
