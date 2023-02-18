import Section from "../../../pure/section.js";
import Text from "../../../pure/text.js";


class Notice extends Section {
    constructor(title, description) {
        super()
        this.className = "notice"

        const noticeTitle = new Text(title)
        noticeTitle.className = "notice__text--title"

        const noticeDescription = new Text(description)
        noticeDescription.className = "notice__text--description"

        this.children = [
            noticeTitle,
            noticeDescription
        ]
    }
}

export default Notice
