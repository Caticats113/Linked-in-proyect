import data from "./data";
import * as components from "./components/export";

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})

        this.lkd=[];
        var i=0;
        while(i<data.length){
            this.lkd.push(data[i]);
            i++;
        }
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((lkd)=>{
            this.shadowRoot.innerHTML += `<link rel="stylesheet" href="./src/components/card/card.css" type="text/html">
            <card-post name="${lkd.name}" profile="${lkd.photoPerfil}" info="${lkd.info}" post="${lkd.post}" ></card-post>`

        })
    }
}

customElements.define("app-container",AppContainer);
