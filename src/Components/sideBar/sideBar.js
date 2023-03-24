class SideBar extends HTMLElement {

    static get observedAttributes() {
        //"pagelink",

        return ["pageicon"];
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
        <a> <img id="icon" src="${this.pageicon}"> </a>
        `;
    }
}

customElements.define('side-bar', SideBar);
export default SideBar;
