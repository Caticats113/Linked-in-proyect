export default class Reset extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png">';

        const signButton = this.ownerDocument.createElement('button');
        signButton.textContent = "Sing Up";
        this.shadowRoot?.appendChild(signButton);

        const logButton = this.ownerDocument.createElement('button');
        logButton.textContent = "Log in";
        this.shadowRoot?.appendChild(logButton);

        const logCard = this.ownerDocument.createElement('reset-card')
        this.shadowRoot?.appendChild(logCard);
    }
}
customElements.define('app-reset', Reset);