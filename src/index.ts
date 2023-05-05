import "./Components/export"
import "./screens/dashboard/dashboard"
import { addObserver, appState } from "./store";
import { Screens } from "./types/store";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="../src/appContainer.css">`

        appState.screen
        switch (appState.screen) {
            case Screens.LOGIN:

                break

            case Screens.SIGNUP:

                break

            case Screens.DASHBOARD:
                const sideBar = this.ownerDocument.createElement('sidebar-icon');
                this.shadowRoot?.appendChild(sideBar);

                const dashboard = this.ownerDocument.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dashboard);
                dashboard.setAttribute("id", "app-dashboard")

                const followRecoms = this.ownerDocument.createElement('follow-recoms');
                this.shadowRoot?.appendChild(followRecoms);
                break

            case Screens.EXPLORER:

                break

            case Screens.JOBS:

                break

            case Screens.RESET_PASWORD:

                break

            case Screens.RESET:

                break

            case Screens.NOTIFICATIONS:

                break
        }
    }
}

customElements.define('app-container', AppContainer);