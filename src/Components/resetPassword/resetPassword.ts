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
            reset.textContent="Reset password";
            this.shadowRoot?.appendChild(reset);

            const newPassword=this.ownerDocument.createElement('input');
            newPassword.textContent="Enter new password";
            this.shadowRoot?.appendChild(newPassword);

            const repeatPassword=this.ownerDocument.createElement('input');
            repeatPassword.textContent="Repeat password";
            this.shadowRoot?.appendChild(repeatPassword);


            const restButton=this.ownerDocument.createElement('button');
            restButton.textContent="Reset ";
            this.shadowRoot?.appendChild(restButton);

        }

    }
    customElements.define('reset-password',ResetPassword);