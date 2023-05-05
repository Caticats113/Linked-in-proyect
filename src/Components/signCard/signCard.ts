import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

export default class SignCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/Components/signCard/signCard.css">`;

        const signup = this.ownerDocument.createElement('h1')
        signup.textContent = "Sign up";
        this.shadowRoot?.appendChild(signup);

        const email = this.ownerDocument.createElement('input');
        email.innerHTML = "Email";
        this.shadowRoot?.appendChild(email);

        const password = this.ownerDocument.createElement('input');
        password.innerHTML = "Password";
        this.shadowRoot?.appendChild(password);

        const section = this.ownerDocument.createElement("section")
        const checkbox = this.ownerDocument.createElement('input')
        checkbox.setAttribute("type", "checkbox")
        section.appendChild(checkbox);
        const politicServices = this.ownerDocument.createElement('label')
        politicServices.textContent = "By clicking you accept the conditions and privacy policy.";
        section.appendChild(politicServices);
        this.shadowRoot?.appendChild(section);

        const signButton = this.ownerDocument.createElement('button');
        signButton.innerHTML = "Accept and Join";
        signButton.addEventListener("click", ()=>{
            dispatch(navigate(Screens.DASHBOARD))
        })
        this.shadowRoot?.appendChild(signButton);
    }
}
customElements.define('sign-card', SignCard);