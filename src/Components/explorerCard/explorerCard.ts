import styles from "./explorerCard.css"
export default class ExplorerCard extends HTMLElement{

    constructor(){
            super();
            this.attachShadow({mode:"open"})
        }

        connectedCallback(){

            this.render()
        }

        render(){

            if(this.shadowRoot)this.shadowRoot.innerHTML=' <img class="pf" src="${this.userpfp}">';

            const name=this.ownerDocument.createElement('h3');
            this.textContent="User name";
            this.shadowRoot?.appendChild(name);

            const userinfo=this.ownerDocument.createElement('p');
            this.textContent="";
            this.shadowRoot?.appendChild(userinfo);


            const followButton=this.ownerDocument.createElement('button');
            this.innerHTML="Seguir";
            this.shadowRoot?.appendChild(followButton);


        }

    }
    customElements.define('explorer-card',ExplorerCard);