import HeaderTemp from "./components/header/index.js";
import MainTemp from "./components/main/index.js";
import Box from "../pure/box.js";
import FooterTemp from "./components/footer/index.js";


class App extends Box {
    constructor() {
        super()
        const headerTemp = new HeaderTemp()
        const mainTemp = new MainTemp()
        const footerTemp = new FooterTemp()

        this.children = [
            headerTemp,
            mainTemp,
            footerTemp
        ]
    }
}


export default App
