import { addObserver, dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import firebase from "../../utils/firebase";

const credentials ={
    email:"",
    password:""};

export default class SignCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    async handleSignUpButton(){
        const user = await firebase.registerUser(credentials);
        console.log(user);
        if(user){
            dispatch(navigate(Screens.LOGIN))
            sessionStorage.clear();
        };
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/Components/signCard/signCard.css">`;

        const signup = this.ownerDocument.createElement('h1')
        signup.textContent = "Sign up";
        this.shadowRoot?.appendChild(signup);

        const email = this.ownerDocument.createElement('input');
        email.placeholder = "Email";
        email.type="email";
        email.addEventListener(
            "change",
            (e:any)=>(credentials.email=e.target.value)
        );

        this.shadowRoot?.appendChild(email);

        const password = this.ownerDocument.createElement('input');
        password.placeholder = "Password";
        password.type="password";
        password.addEventListener(
            "change",
            (e:any)=>(credentials.password=e.target.value)
        );
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
        signButton.addEventListener("click",this.handleSignUpButton);
        this.shadowRoot?.appendChild(signButton);


    }
}
customElements.define('sign-card', SignCard);