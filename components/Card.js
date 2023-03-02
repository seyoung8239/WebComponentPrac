import WebComponent from "../lib/WebComponent.js";

class Card extends WebComponent {
    template() {
        const { name, age, role } = this.props;
        return `<div id='card'>
        <div>${name}</div>
        <div>${age}</div>
        <div>${role}</div>
        </div>`;
    }
}

export default Card;
