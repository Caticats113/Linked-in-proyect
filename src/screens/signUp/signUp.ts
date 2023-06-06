import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

export default class SignUp extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/signUp/signUp.css">`;

        const section = this.ownerDocument.createElement("section")

        const logbutton = this.ownerDocument.createElement('button');
        logbutton.innerHTML = "Log in";
        logbutton.addEventListener("click", ()=>{
            dispatch(navigate(Screens.LOGIN))
        })
        section.appendChild(logbutton);

        const image = this.ownerDocument.createElement("img")
        image.setAttribute("src", "./imagenes/LinkedLogo2.png")
        section.appendChild(image);

        const signCard = this.ownerDocument.createElement('sign-card')

        this.shadowRoot?.appendChild(section);
        this.shadowRoot?.appendChild(signCard);
    }
}
customElements.define('app-signup', SignUp);