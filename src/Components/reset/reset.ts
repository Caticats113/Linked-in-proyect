import styles from "./reset.css"
export default class Reset extends HTMLElement{

    constructor(){
            super();
            this.attachShadow({mode:"open"});

        }

         connectedCallback(){

            this.render()
        }

        render(){

            if(this.shadowRoot)this.shadowRoot.innerHTML='';

            const forgetPassword=this.ownerDocument.createElement('h1')
            this.textContent="Did you forget your password?";
            this.shadowRoot?.appendChild(forgetPassword);

            const email=this.ownerDocument.createElement('input');
            this.innerHTML="Email";
            this.shadowRoot?.appendChild(email);


            const resetButton=this.ownerDocument.createElement('button');
            this.innerHTML="Reset password";
            this.shadowRoot?.appendChild(resetButton);

            const returnButton=this.ownerDocument.createElement('button');
            this.innerHTML="return";
            this.shadowRoot?.appendChild(returnButton);

        }

    }
    customElements.define('reset-card',Reset);