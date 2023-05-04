import styles from "./card.css";
import {appState} from "../../store/index"; //Import the store

export enum Attributes {
    "username" = "username",
    "userpfp" = "userpfp",
    "posttext" = "posttext",
    "postimage" = "postimage"
}

export default class Card extends HTMLElement {

    username?: string;
    userpfp?: string;
    posttext?: string;
    postimage?: string;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        const attrs: Record<Attributes, null> = {
            username: null,
            userpfp: null,
            posttext: null,
            postimage: null
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

        // const name=this.ownerDocument.createElement('h3');
        // name.textContent=appState.username;

        // this.shadowRoot?.appendChild(name);
        if (this.shadowRoot) this.shadowRoot.innerHTML = `<div class="post">

        <div class="userPost">
            <img class="pf" src="${this.userpfp}">
            <h3>${this.username}</h3>
        </div>
            <p>${this.posttext}</p>
            <img class="pst" src="${this.postimage}">
            <section class="posticonos">
                <img src="./imagenes/like.png">
                <img src="./imagenes/comentario.png">
                <img src="./imagenes/actualizar.png">
                <img src="./imagenes/avion.png">
            </section>
        </div>`;
        const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
    }

}
customElements.define('app-card', Card);