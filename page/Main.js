import WebComponent from "../lib/WebComponent.js";
import Card from "../components/Card.js";

const m = [
    { name: "seyoung", age: "26", role: "pm" },
    { name: "hyun", age: "26", role: "fe" },
    { name: "gc", age: "26", role: "fe" },
    { name: "mw", age: "25", role: "be" },
    { name: "th", age: "26", role: "ai" },
    { name: "jh", age: "26", role: "data" },
];

class Main extends WebComponent {
    template() {
        return `
            <div style="font-size: 32px">member list</div>
            <div id='member-list'></div>
        `;
    }
    async mount() {
        const $memberList = await Promise.all(
            this.state.members.map(async (m) => {
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
    async setup() {
        let members = await new Promise((res, _) => {
            setTimeout(() => {
                res(JSON.stringify(m));
            }, 0);
        });
        members = await JSON.parse(members);
        console.log(members);
        this.state.members = members;
    }
}

export default Main;
