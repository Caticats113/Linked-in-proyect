import styles from "./explorerCard.css";

export enum Attributes {
    "userbanner" = "userbanner",
    "username" = "username",
    "userpfp" = "userpfp",
    "description" = "description",
}

export default class ExplorerCard extends HTMLElement {

    userbanner?: string;
    username?: string;
    userpfp?: string;
    description?: string;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        const attrs: Record<Attributes, null> = {
            userbanner: null,
            username: null,
            userpfp: null,
            description: null,
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

        const card = this.ownerDocument.createElement('div');
        card.setAttribute("class", "card");
        card.style.backgroundImage = `url(${this.userbanner})`

        const userPost = this.ownerDocument.createElement('div');
        userPost.setAttribute("class", "userPost");

        // const banner = this.ownerDocument.createElement('img');
        // banner.setAttribute("src", `${this.userbanner}`);
        // banner.setAttribute("class", "banner");
        // userPost.appendChild(banner);

        const pf = this.ownerDocument.createElement('img');
        pf.setAttribute("src", `${this.userpfp}`);
        pf.setAttribute("class", "pf");
        userPost.appendChild(pf);

        card.appendChild(userPost);

        const userName = this.ownerDocument.createElement('h3');
        userName.innerText = `${this.username}`;
        card.appendChild(userName);

        const description = this.ownerDocument.createElement('p');
        description.innerText = `${this.description}`;
        card.appendChild(description);

        this.shadowRoot?.appendChild(card);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }

}
customElements.define('explorer-card', ExplorerCard);