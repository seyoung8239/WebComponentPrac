import WebComponent from "../lib/WebComponent.js";
import Card from "../components/Card.js";
import { memberEvent, memberStore } from "../store/memberStore.js";
class Main extends WebComponent {
    template() {
        return `
            <div style="font-size: 32px">member list</div>
            <div id='member-list'></div>
        `;
    }
    setup() {
        document.addEventListener(memberEvent, this.render);
    }
    async mount() {
        const $memberList = await Promise.all(
            memberStore.state.map(async (m) => {
                const $cardContainer = document.createElement("div");
                const card = new Card($cardContainer, m);
                await card.init();
                return $cardContainer;
            })
        );
        const $memberListContainer = document.querySelector("#member-list");
        $memberList.forEach(($memberCard) => {
            $memberListContainer.appendChild($memberCard);
        });
    }
}

export default Main;
