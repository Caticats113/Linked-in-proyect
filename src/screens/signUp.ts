
export default class SignUp extends HTMLElement{

    constructor(){
            super();
            this.attachShadow({mode:"open"});

        }

         connectedCallback(){

            this.render()
        }

        render(){

            if(this.shadowRoot)this.shadowRoot.innerHTML='';

            if(this.shadowRoot)this.shadowRoot.innerHTML='<img src="./imagenes/LinkedLogo2">';

            const signCard=this.ownerDocument.createElement('sign-card')
            this.shadowRoot?.appendChild(signCard);


            const logbutton=this.ownerDocument.createElement('button');
            this.innerHTML="Log in";
            this.shadowRoot?.appendChild(logbutton);


        }

    }
    customElements.define('app-signUp',SignUp);