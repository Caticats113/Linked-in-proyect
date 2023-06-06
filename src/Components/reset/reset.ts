import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

export default class Reset extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {

        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/Components/reset/reset.css">`;

        const forgetPassword = this.ownerDocument.createElement('h1')
        forgetPassword.textContent = "Did you forget your password?";
        this.shadowRoot?.appendChild(forgetPassword);

        const email = this.ownerDocument.createElement('input');
        email.setAttribute("placeholder", "Email");
        this.shadowRoot?.appendChild(email);

        const resetButton = this.ownerDocument.createElement('button');
        resetButton.textContent = "Reset password";
        resetButton.addEventListener("click", ()=>{
            dispatch(navigate(Screens.RESET_PASWORD))
        })
        this.shadowRoot?.appendChild(resetButton);

        const returnButton = this.ownerDocument.createElement('button');
        returnButton.textContent = "Return";
        returnButton.addEventListener("click", ()=>{
            dispatch(navigate(Screens.LOGIN))
        })
        this.shadowRoot?.appendChild(returnButton);
    }

}
customElements.define('reset-card', Reset);