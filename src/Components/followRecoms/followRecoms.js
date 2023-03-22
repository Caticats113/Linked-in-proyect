class FollowRecoms extends HTMLElement {

    static get observedAttributes() {
        return ["userPfp", "userName"];
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
        <link rel="stylesheet" href="./src/components/followRecoms/followRecoms.css">
        <img src="${this.userPfp}"><label>${this.userName}</label>
        `;
    }
}

customElements.define('follow-recoms', FollowRecoms);
export default FollowRecoms;