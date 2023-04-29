import styles from "./resetPassword.css"
export default class ResetPassword extends HTMLElement{

    constructor(){
            super();
            this.attachShadow({mode:"open"});

        }

         connectedCallback(){

            this.render()
        }

        render(){

            if(this.shadowRoot)this.shadowRoot.innerHTML='';

            const reset=this.ownerDocument.createElement('h1')
            this.textContent="Reset password";
            this.shadowRoot?.appendChild(reset);

            const newPassword=this.ownerDocument.createElement('input');
            this.innerHTML="Enter new password";
            this.shadowRoot?.appendChild(newPassword);

            const repeatPassword=this.ownerDocument.createElement('input');
            this.innerHTML="Repeat password";
            this.shadowRoot?.appendChild(repeatPassword);


            const restButton=this.ownerDocument.createElement('button');
            this.innerHTML="Reset ";
            this.shadowRoot?.appendChild(restButton);

        }

    }
    customElements.define('reset-password',ResetPassword);