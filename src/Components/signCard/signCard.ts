import styles from "./signCard.css"
export default class SignCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = '';

        const signup = this.ownerDocument.createElement('h1')
        this.textContent = "Sign up";
        this.shadowRoot?.appendChild(signup);

        const email = this.ownerDocument.createElement('input');
        this.innerHTML = "Email";
        this.shadowRoot?.appendChild(email);

        const password = this.ownerDocument.createElement('input');
        this.innerHTML = "Password";
        this.shadowRoot?.appendChild(password);

        const politicServices = this.ownerDocument.createElement('h3')
        this.textContent = "By clicking you accept the conditions and privacy policy.";
        this.shadowRoot?.appendChild(politicServices);

        const signButton = this.ownerDocument.createElement('button');
        this.innerHTML = "Accept and Join";
        this.shadowRoot?.appendChild(signButton);
    }
}
customElements.define('sign-card', SignCard);