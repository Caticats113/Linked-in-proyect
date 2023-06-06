import styles from "./notification.css";

export enum Attributes {
    "username" = "username",
    "userpfp" = "userpfp",
}

export default class Notification extends HTMLElement {

    username?: string;
    userpfp?: string;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        const attrs: Record<Attributes, null> = {
            username: null,
            userpfp: null,
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

        if (this.shadowRoot) this.shadowRoot.innerHTML = ""

        const pf = this.ownerDocument.createElement('img');
        pf.setAttribute("src", `${this.userpfp}`);
        pf.setAttribute("class", "pf");
        this.shadowRoot?.appendChild(pf);

        const text = this.ownerDocument.createElement('p');
        text.innerText = `${this.username} ha hecho una nueva publicación`;
        this.shadowRoot?.appendChild(text);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }

}
customElements.define('notification-card', Notification);