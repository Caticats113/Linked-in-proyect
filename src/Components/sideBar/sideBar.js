class SideBar extends HTMLElement {

    static get observedAttributes() {
        return ["pageLink", "pageIcon"];
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
        <link rel="stylesheet" href="./src/components/sideBar/sideBar.css">
        <a href="${this.pageLink}"> <img src="${this.pageIcon}"> </a>
        `;
    }
}

customElements.define('side-bar', SideBar);
export default SideBar;
