import data from "./Components/data";
import data2 from "./Components/data2";
import data3 from "./Components/data3";
import * as Components from "./Components/export";

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        console.log(data);
    };

    connectedCallback(){
        this.render();
    };

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    };

    render(){

                this.shadowRoot.innerHTML +=`
                <nav-post></nav-post>`

                this.shadowRoot.innerHTML += `
                <create-post></create-post>
                `
                data.forEach((lkd)=>{
                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./styles.css">
                <dashboard-post userName="${lkd.username}" userPfp="${lkd.userpfp}" postText="${lkd.posttext}" postImage="${lkd.postimage}" like="${lkd.like}" coment="${lkd.coment}" actu="${lkd.actu}" send="${lkd.send}"></dashboard-post>`
            }
        )
    };
}

class Sidebar extends HTMLElement {

    static get observedAttributes() {
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        data2.forEach((sb)=>{
            this.shadowRoot.innerHTML += `
            <sidebar-icon goToLink="${sb.goToLink}" pageIcon="${sb.pageicon}"></sidebar-icon>`
        })
    }
}

class FollowRecoms extends HTMLElement {

    static get observedAttributes() {
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){

        data3.forEach((fw)=>{
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./styles.css">
            <follow-recompfp userpfp="${fw.userpfp}" username="${fw.username}"></follow-recompfp>`
        })
    }
}

customElements.define("app-container",AppContainer);
customElements.define('my-sidebar', Sidebar);
customElements.define('follow-recoms', FollowRecoms);
