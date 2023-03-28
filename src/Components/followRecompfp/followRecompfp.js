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
        <link rel="stylesheet" href="./styles.css">
        <img class="pfr" src="${this.userpfp}">
            <section class="userRecom">
                <label>${this.username}</label>
                <button>+ Seguir</button>
            </section>
        `;
    }
}

customElements.define('follow-recompfp', FollowRecompfp);
export default FollowRecompfp;