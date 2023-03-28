class FollowRecompfp extends HTMLElement {

    static get observedAttributes() {
        return ["userpfp", "username"];
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
        <section class="userRecom">
            <link rel="stylesheet" href="./styles.css">
            <img class="pfr" src="${this.userpfp}"><label>${this.username}</label>
        </section>
        <button>Seguir</button>
        `;
    }
}

customElements.define('follow-recompfp', FollowRecompfp);
export default FollowRecompfp;