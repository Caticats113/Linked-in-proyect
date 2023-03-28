class FollowRecoms extends HTMLElement {

    static get observedAttributes() {
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
        this.shadowRoot.innerHTML =

            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./styles.css">
            <follow-recoms userpfp="${fw.userpfp}" username="${fw.username}"></follow-recoms>`
    }
}

customElements.define('main-dashboard', FollowRecoms);
export default FollowRecoms;
