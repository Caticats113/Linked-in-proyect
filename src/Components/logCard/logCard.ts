import styles from "./logCard.css"
export default class LogCard extends HTMLElement{

    constructor(){
            super();
            this.attachShadow({mode:"open"});

        }

         connectedCallback(){

            this.render()
        }

        render(){

            if(this.shadowRoot)this.shadowRoot.innerHTML='';

            const login=this.ownerDocument.createElement('h1')
            this.textContent="Log in";
            this.shadowRoot?.appendChild(login);

            const email=this.ownerDocument.createElement('input');
            this.innerHTML="Email";
            this.shadowRoot?.appendChild(email);

            const password=this.ownerDocument.createElement('input');
            this.innerHTML="Password";
            this.shadowRoot?.appendChild(password);

            const forgetPassword=this.ownerDocument.createElement('h3')
            this.textContent="Did you forget your password?";
            this.shadowRoot?.appendChild(forgetPassword);

            const logButton=this.ownerDocument.createElement('button');
            this.innerHTML="Sing Up";
            this.shadowRoot?.appendChild(logButton);

        }

    }
    customElements.define('log-card',LogCard);