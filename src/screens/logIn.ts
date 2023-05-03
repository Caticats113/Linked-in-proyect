class Login extends HTMLElement{

constructor(){
        super();
        this.attachShadow({mode:"open"});

    }

     connectedCallback(){

        this.render()
    }

    render(){

        if(this.shadowRoot)this.shadowRoot.innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png">';

        const signButton=this.ownerDocument.createElement('button');
        signButton.textContent="Sing Up";
        this.shadowRoot?.appendChild(signButton);


        const logCard=this.ownerDocument.createElement('log-card')
        this.shadowRoot?.appendChild(logCard);


    }

}
customElements.define('p-logIn',Login);