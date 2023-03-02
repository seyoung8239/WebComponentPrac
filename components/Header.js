import WebComponent from "../lib/WebComponent.js";
import { link } from "../lib/link.js";

class Header extends WebComponent {
    template() {
        return `
            <header>
                <nav id='main'>Main</nav>
                <nav id='new_member'>New Member</nav>
            </header>
        `;
    }
    setHandler() {
        this.addHandler("#main", "click", () => {
            link("/");
        });
        this.addHandler("#new_member", "click", () => {
            link("/new-member");
        });
    }
}

export default Header;
