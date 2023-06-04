import { onAuthStateChanged } from "firebase/auth";
import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import Firebase from "../../utils/firebase";


const credentials ={
    email:"",
    password:""};

export default class LogCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this);

        }

    connectedCallback() {
        this.render()
        console.log('AppState',appState.user);
    }

    async handleLoginButton(){
        Firebase.loginUser(credentials);
        console.log(appState.user);
        dispatch(navigate(Screens.DASHBOARD));
    }


    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/Components/logCard/logCard.css">`;

        const login = this.ownerDocument.createElement('h1')
        login.textContent = "Log in";
        this.shadowRoot?.appendChild(login);


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

        const forgetPassword = this.ownerDocument.createElement('h3')
        forgetPassword.textContent = "Did you forget your password?";
        forgetPassword.addEventListener("click", ()=>{
            dispatch(navigate(Screens.RESET))
        })

        this.shadowRoot?.appendChild(forgetPassword);

        const logButton = this.ownerDocument.createElement('button');
        logButton.textContent = "Log In";
        logButton.addEventListener("click",this.handleLoginButton);
        this.shadowRoot?.appendChild(logButton);
    }

}
customElements.define('log-card', LogCard);