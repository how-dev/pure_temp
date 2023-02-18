import ListItem from "../../../pure/listItem.js";
import Text from "../../../pure/text.js";


class BlockItem extends ListItem {
    constructor(title, content, description) {
        super()

        this.className = "blockItem"

        const blockTitle = new Text(title)
        blockTitle.className = "blockItem__text--title"

        const blockContent = new Text(content)
        blockContent.className = "blockItem__text--content"

        const blockDescription = new Text(description)
        blockDescription.className = "blockItem__text--description"

        this.children =  [
            blockTitle,
            blockContent,
            blockDescription
        ]
    }
}


export default BlockItem
