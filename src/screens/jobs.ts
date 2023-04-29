class jobs extends HTMLElement{

    constructor(){
            super();
            this.attachShadow({mode:"open"});

        }

         connectedCallback(){

            this.render()
        }

        render(){

            if(this.shadowRoot)this.shadowRoot.innerHTML='<img src="./imagenes/in.png"> <img src="./imagenes/coomeva.png">';

            const sidebar=this.ownerDocument.createElement('sidebar-icon')
            this.shadowRoot?.appendChild(sidebar);

            const search=this.ownerDocument.createElement('input')
            this.innerHTML="Search...";
            this.shadowRoot?.appendChild(search);

            const name=this.ownerDocument.createElement('h3');
            this.textContent="User name";
            this.shadowRoot?.appendChild(name);

            const userinfo=this.ownerDocument.createElement('p');
            this.textContent="";
            this.shadowRoot?.appendChild(userinfo);


            const saveJobs=this.ownerDocument.createElement('button');
            this.innerHTML="My jobs";
            this.shadowRoot?.appendChild(saveJobs);



            const alertJobs=this.ownerDocument.createElement('button');
            this.innerHTML="Jobs alert";
            this.shadowRoot?.appendChild(alertJobs);
        }

    }
    customElements.define('app-jobs',jobs);