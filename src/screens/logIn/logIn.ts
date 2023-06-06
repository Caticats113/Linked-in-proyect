import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

export default class LogIn extends HTMLElement{

constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot)this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="../src/screens/logIn/logIn.css">`;

        const section = this.ownerDocument.createElement("section")

        const image = this.ownerDocument.createElement("img");
        image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png");
        section.appendChild(image);

        const signButton=this.ownerDocument.createElement('button');
        signButton.textContent="Sing Up";
        signButton.addEventListener("click", ()=>{
            dispatch(navigate(Screens.SIGNUP))
        })
        section.appendChild(signButton);

        const logCard=this.ownerDocument.createElement('log-card');

        this.shadowRoot?.appendChild(section);
        this.shadowRoot?.appendChild(logCard);
    }
}
customElements.define('app-login',LogIn);