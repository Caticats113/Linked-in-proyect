import "./Components/export"
import "./screens/export"
import { addObserver, appState, dispatch } from "./store";
import { Screens } from "./types/store";
import { getData } from "./store/actions";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    async connectedCallback() {
        if (appState.data.length === 0) {
            const action = await getData();
            dispatch(action);
            this.render()
        } else {
            this.render()
        }
    }

    render() {
        if (this.shadowRoot)this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/appContainer.css">`

        appState.screen

        switch (appState.screen) {
            case Screens.LOGIN:
                document.body.style.backgroundImage = "url(./imagenes/logInBackground.png)"
                document.body.style.backgroundColor = "#C0F6F8";
                document.body.style.backgroundSize = "cover"
                if (this.shadowRoot)this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/appContainer.css">`

                const logIn = this.ownerDocument.createElement('app-login');
                this.shadowRoot?.appendChild(logIn);
                break

            case Screens.SIGNUP:
            document.body.style.backgroundImage = "url(./imagenes/signUpBackground.png)"
            document.body.style.backgroundColor = "#C0F6F8";
            document.body.style.backgroundSize = "cover"
            if (this.shadowRoot)this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/appContainer.css">`

                const signUp = this.ownerDocument.createElement('app-signup');
                this.shadowRoot?.appendChild(signUp);
                break

            case Screens.DASHBOARD:
                document.body.style.backgroundImage = "url(./imagenes/fondo1.png)"

                if (this.shadowRoot)this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/appContainer.css">`

                const dashboard = this.ownerDocument.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dashboard);
                break

            case Screens.EXPLORER:
                if (this.shadowRoot)this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/appContainer.css">`

                const explorer = this.ownerDocument.createElement('app-explorer');
                this.shadowRoot?.appendChild(explorer);
                break

            case Screens.JOBS:
                if (this.shadowRoot)this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/appContainer.css">`

                const jobs = this.ownerDocument.createElement('app-jobs');
                this.shadowRoot?.appendChild(jobs);
                break

            case Screens.RESET_PASWORD:
                if (this.shadowRoot)this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/appContainer.css">`

                const resetPassword = this.ownerDocument.createElement('app-reset_password');
                this.shadowRoot?.appendChild(resetPassword);
                break

            case Screens.RESET:
                if (this.shadowRoot)this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/appContainer.css">`

                const reset = this.ownerDocument.createElement('app-reset');
                this.shadowRoot?.appendChild(reset);
                break

            case Screens.NOTIFICATIONS:
                this.innerHTML = `
                <link rel="stylesheet" href="../src/appContainer.css">`

                const notifications = this.ownerDocument.createElement('app-notifications');
                this.shadowRoot?.appendChild(notifications);
                break
        }
    }
}

customElements.define('app-container', AppContainer);