class FollowRecoms extends HTMLElement {

    static get observedAttributes() {
        return ["photof", "nameu"];
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
        <img src="${this.photof}"><label>${this.nameu}</label>
        `;
    }
}

customElements.define('follow-recoms', FollowRecoms);
export default FollowRecoms;