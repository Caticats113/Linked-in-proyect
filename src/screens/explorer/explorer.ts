export default class Explorer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/explorer/explorer.css">`;

        const image = this.ownerDocument.createElement('img')
        image.setAttribute("src", "./imagenes/in.png")
        this.shadowRoot?.appendChild(image);

        const sidebar = this.ownerDocument.createElement('sidebar-icon')
        this.shadowRoot?.appendChild(sidebar);

        const search = this.ownerDocument.createElement('input')
        this.innerHTML = "Search...";
        this.shadowRoot?.appendChild(search);

        const explorerCard = this.ownerDocument.createElement('explorer-card')
        this.shadowRoot?.appendChild(explorerCard);
    }
}
customElements.define('app-explorer', Explorer);