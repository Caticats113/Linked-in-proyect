import styles from "./jobCard.css";

export enum Attributes {
    "username" = "username",
    "userpfp" = "userpfp",
    "jobtext" = "jobtext",
}

export default class JobCard extends HTMLElement {

    username?: string;
    userpfp?: string;
    jobtext?: string;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        const attrs: Record<Attributes, null> = {
            username: null,
            userpfp: null,
            jobtext: null
        }
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName: Attributes, _: string | undefined, newValue: string | undefined) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }

        this.render();
    }

    render() {

        if (this.shadowRoot) this.shadowRoot.innerHTML = `<div class="post">

        <div class="userPost">
            <img class="pf" src="${this.userpfp}">
            <h3>${this.username}</h3>
        </div>
            <p>${this.jobtext}</p>
        </div>`;
        const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
    }

}
customElements.define('job-card', JobCard);