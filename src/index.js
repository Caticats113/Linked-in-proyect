import data from "./components/data";
import data2 from "./Components/data2";
import data3 from "./Components/data3";
import * as components from "./components/export";

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    };

    connectedCallback(){
        this.render();
    };

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    };

    render(){
            data.forEach((lkd)=>{
                this.shadowRoot.innerHTML += `
                <dashboard-post userName="${lkd.username}" userPfp="${lkd.userpfp}" postText="${lkd.posttext}" postImage="${lkd.postimage}"></dashboard-post>`
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
