import Anchor from "../../../pure/anchor.js";
import Footer from "../../../pure/footer.js";

class FooterTemp extends Footer {
    constructor() {
        super()

        this.className = "footerTemp"

        const anchor = new Anchor(
            "https://www.google.com.br/",
            "Saiba mais sobre este projeto clicando aqui"
        )
        anchor.className = "footerTemp__link"

        this.children = [
            anchor
        ]
    }
}


export default FooterTemp
