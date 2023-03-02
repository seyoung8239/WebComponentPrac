import WebComponent from "./lib/WebComponent.js";
import Header from "./components/Header.js";
import Router from "./Router.js";

class App extends WebComponent {
    async mount() {
        const $header = document.querySelector("#header");
        const $container = document.querySelector("#container");

        await new Header($header).init();
        await new Router($container).init();
    }

    template() {
        return `
            <div id='header'></div>
            <div id='container'></div>
        `;
    }
}

export default App;
