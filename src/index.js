import data from "./components/data";
import * as components from "./components/export";

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})

    }

    connectedCallback(){
        this.render();
    }

    render(){
        console.log(data);
        data.forEach((lkd)=>{
            this.shadowRoot.innerHTML += `
            <dashboard-post userName="${lkd.username}" userPfp="${lkd.userpfp}" postText="${lkd.posttext}" postImage="${lkd.postimage}"></dashboard-post>`

        })
    }
}

customElements.define("app-container",AppContainer);
