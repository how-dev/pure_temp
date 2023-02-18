import Header from "../../../pure/header.js";
import Text from "../../../pure/text.js";


class HeaderTemp extends Header {
    constructor() {
        super()
        this.className = "headerTemp"
        
        const local = new Text("Eusébio")
        local.className = "headerTemp__text--local"

        const temperature = new Text("22°")
        temperature.className = "headerTemp__text--temperature"

        const description = new Text("Pouco Nublado")
        description.className = "headerTemp__text--description"

        const minAndMax = new Text("Máx.: 28° Mín.: 19°")
        minAndMax.className = "headerTemp__text--minAndMax"


        this.children = [
            local, 
            temperature,
            description,
            minAndMax
        ]

    }
}


export default HeaderTemp
