export enum Attribute {
    "username" = "username",
    "userpfp" = "userpfp",
}

export default class FollowRecomI extends HTMLElement {

    username?: string;
    userpfp?: string;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            username: null,
            userpfp: null,
        }
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName: Attribute, _: string | undefined, newValue: string | undefined) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }

        this.render();
    };

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/Components/followRecomI/followRecomI.css">
        <link rel="stylesheet" href="./index.css">

        <img class="pfr" src="${this.userpfp}">
        <section class="userRecom">
            <label>${this.username}</label>
            <button>+ Seguir</button>
        </section>`;
    }
}
customElements.define('follow-recomi', FollowRecomI);