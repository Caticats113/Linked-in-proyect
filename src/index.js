import data from "./components/data";
import data2 from "./Components/data2";
import data3 from "./Components/data3";
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
            <link rel="stylesheet" href="./styles.css">
            <dashboard-post userName="${lkd.username}" userPfp="${lkd.userpfp}" postText="${lkd.posttext}" postImage="${lkd.postimage}"></dashboard-post>`
        })

        console.log(data2);
        data2.forEach((sb)=>{
        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="./styles.css">
        <side-bar pageIcon="${sb.pageicon}"></side-bar>
        `
    })

            data3.forEach((fw)=>{
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./styles.css">
            <follow-recoms photo="${fw.photof}" nameu="${fw.nameu}"></follow-recoms>
            `

        })
    }
}

customElements.define("app-container",AppContainer);
