import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

export default class ResetPassword extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/Components/resetPassword/resetPassword.css">`;

        const reset = this.ownerDocument.createElement('h1')
        reset.textContent = "Reset password";
        this.shadowRoot?.appendChild(reset);

        const newPassword = this.ownerDocument.createElement('input');
        newPassword.setAttribute("placeholder", "Enter new password");
        this.shadowRoot?.appendChild(newPassword);

        const repeatPassword = this.ownerDocument.createElement('input');
        repeatPassword.setAttribute("placeholder", "Repeat password");
        this.shadowRoot?.appendChild(repeatPassword);

        const restButton = this.ownerDocument.createElement('button');
        restButton.textContent = "Reset ";
        restButton.addEventListener("click", ()=>{
            dispatch(navigate(Screens.DASHBOARD))
        })
        this.shadowRoot?.appendChild(restButton);
    }
}
customElements.define('reset-password', ResetPassword);