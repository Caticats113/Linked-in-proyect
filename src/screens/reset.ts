class Reset extends HTMLElement{

constructor(){
        super();
        this.attachShadow({mode:"open"});

    }

     connectedCallback(){

        this.render()
    }

    render(){

        if(this.shadowRoot)this.shadowRoot.innerHTML='<img src="./imagenes/LinkedLogo">';


        const signButton=this.ownerDocument.createElement('button');
        this.innerHTML="Sing Up";
        this.shadowRoot?.appendChild(signButton);

        const logButton=this.ownerDocument.createElement('button');
        this.innerHTML="Log in";
        this.shadowRoot?.appendChild(logButton);

        const logCard=this.ownerDocument.createElement('reset-card')
        this.shadowRoot?.appendChild(logCard);

    }

}
customElements.define('app-reset',Reset);