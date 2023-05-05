import FollowRecomI, { Attributte } from "../followRecomI/followRecomI";
import {appState} from "../../store/index";

import { dataR } from "../../mocks/getData";
import { DataR } from "../../types/dataR";

export default class FollowRecoms extends HTMLElement {
    datarr: FollowRecomI[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }


    async connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/Components/followRecoms/followRecoms.css">
            <link rel="stylesheet" href="./index.css">
    `};

        dataR?.forEach((a: DataR) => {
            const pruf = this.ownerDocument.createElement("follow-recomi")
            pruf.setAttribute(Attributte.username, a.username);
            pruf.setAttribute(Attributte.userpfp, a.userpfp);
            this.shadowRoot?.appendChild(pruf);
        })
    }
}

customElements.define('follow-recoms', FollowRecoms);