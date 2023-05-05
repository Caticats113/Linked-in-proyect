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
        <link rel="stylesheet" href="../src/screens/reset/reset.css">`;

        const section = this.ownerDocument.createElement("section")

        const image = this.ownerDocument.createElement("img")
        image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png")
        section.appendChild(image);

        const logbutton = this.ownerDocument.createElement('button');
        logbutton.innerHTML = "Log in";
        logbutton.addEventListener("click", ()=>{
            dispatch(navigate(Screens.LOGIN))
        })
        section.appendChild(logbutton);

        const signbutton = this.ownerDocument.createElement('button');
        signbutton.innerHTML = "Sign up";
        signbutton.addEventListener("click", ()=>{
            dispatch(navigate(Screens.SIGNUP))
        })
        section.appendChild(signbutton);

        this.shadowRoot?.appendChild(section);

        const logCard = this.ownerDocument.createElement('reset-card')
        this.shadowRoot?.appendChild(logCard);
    }
}
customElements.define('app-reset', Reset);