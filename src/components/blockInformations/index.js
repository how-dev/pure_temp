import Section from "../../../pure/section.js";
import UnorderedList from "../../../pure/unorderedList.js";
import BlockItem from "../blockItem/index.js";


class BlockInformations extends Section {
    constructor() {
        super()

        this.className = "blockInformations"

        const blocks = new UnorderedList()
        blocks.className = "blockInformations__list"

        blocks.children = [
            new BlockItem("sensação", "20°", "Similar à temperatura real."),
            new BlockItem("umidade", "87%", "O ponto do orvalho é de 18° agora."),
            new BlockItem("visibilidade", "10 km", "Uma névoa seca está afetando a visibilidade."),
            new BlockItem("chuva", "13 mm", "Previsão de 14 mm nas próximas 24h."),
        ]

        this.children = [
            blocks
        ]

    }
}


export default BlockInformations
