import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

export default class LogCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/Components/logCard/logCard.css">`;

        const login = this.ownerDocument.createElement('h1')
        login.textContent = "Log in";
        this.shadowRoot?.appendChild(login);

        const email = this.ownerDocument.createElement('input');
        email.textContent = "Email";
        email.setAttribute("placeholder", "Email")
        this.shadowRoot?.appendChild(email);

        const password = this.ownerDocument.createElement('input');
        password.textContent = "Password";
        password.setAttribute("type", "password")
        password.setAttribute("placeholder", "Password")
        this.shadowRoot?.appendChild(password);

        const forgetPassword = this.ownerDocument.createElement('h3')
        forgetPassword.textContent = "Did you forget your password?";
        this.shadowRoot?.appendChild(forgetPassword);

        const logButton = this.ownerDocument.createElement('button');
        logButton.textContent = "Log In";
        logButton.addEventListener("click", ()=>{
            dispatch(navigate(Screens.DASHBOARD))
        })
        this.shadowRoot?.appendChild(logButton);
    }

}
customElements.define('log-card', LogCard);