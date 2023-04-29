class LogIn extends HTMLElement{

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


        const logCard=this.ownerDocument.createElement('log-card')
        this.shadowRoot?.appendChild(logCard);

    }

}
customElements.define('app-logIn',LogIn);