import "./Components/export"
import "./screens/dashboard/dashboard"
import { navigate } from "./store/actions";
import { addObserver, appState, dispatch } from "./store/index";
import { Screens } from "./types/store";


class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})

        addObserver(this);
    }

    connectedCallback(){
        this.render()
    }

    render(){
            this.innerHTML = `
            <link rel="stylesheet" href="../src/appContainer.css">`

        const sideBar=this.ownerDocument.createElement('sidebar-icon');
        this.shadowRoot?.appendChild(sideBar);

        const dashboard=this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(dashboard);
        dashboard.setAttribute("id", "app-dashboard")

        const followRecoms=this.ownerDocument.createElement('follow-recoms');
        this.shadowRoot?.appendChild(followRecoms);
    }
}

customElements.define('app-container',AppContainer);