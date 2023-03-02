import WebComponent from "../lib/WebComponent.js";
import { memberStore } from "../store/memberStore.js";

class NewMember extends WebComponent {
    template() {
        return `
            <form id='new_member_form'>
                <input name="name" type="text" placeholder="이름">
                <input name="age" type="text" placeholder="나이">
                <input name="role" type="text" placeholder="역할">
                <button type="submit">등록</button>
            </form>
        `;
    }
    setHandler() {
        this.addHandler("#new_member_form", "submit", (e) => {
            e.preventDefault();
            const $form = e.target;

            const { name, age, role } = $form;
            const newMemeber = {
                [name.name]: name.value,
                [age.name]: age.value,
                [role.name]: role.value,
            };
            memberStore.state.push(newMemeber);
        });
    }
    mount() {}
}

export default NewMember;
