class SidebarIcon extends HTMLElement {

    static get observedAttributes() {
        return ["pageicon", "goToLink"];
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
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles.css">
        <a href="${this.goToLink}"> <img id="icon" src="${this.pageicon}"> </a>
        `;
    }
}

customElements.define('sidebar-icon', SidebarIcon);
export default SidebarIcon;
