import { datas } from "../../mocks/getData";
import { Data } from "../../types/data";
import Card, { Attributes } from "../../Components/card/card";
import { getData } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";


class Dashboard extends HTMLElement {
    datass: Card[] = [];
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        datas?.forEach((e: Data) => {
            const prof = this.ownerDocument.createElement(
                "app-card"
            ) as Card;
            prof.setAttribute(Attributes.username, e.username);
            prof.setAttribute(Attributes.userpfp, e.userpfp);
            prof.setAttribute(Attributes.posttext, e.posttext);
            prof.setAttribute(Attributes.postimage, e.postimage);

            this.datass.push(prof);
        });

    }

    async connectedCallback() {
        if (appState.data.length === 0) {
            const action = await getData();
            dispatch(action);
            this.render()
        } else {
            this.render();
        }
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./index.css">
        <link rel="stylesheet" href="../src/screens/dashboard/dashboard.css">
        `;

        const section = this.ownerDocument.createElement("section")
        section.setAttribute("id", "app-dashboard")

        const nav = this.ownerDocument.createElement('app-nav');
        section.appendChild(nav);

        const createPost = this.ownerDocument.createElement('create-post');
        section.appendChild(createPost);

        const card = this.ownerDocument.createElement("section")
        card.className = "card";
        for (let index = 0; index < this.datass.length; index++) {
            card.appendChild(this.datass[index]);
        }
        section.appendChild(card);

        // appState.data.forEach((data, i) => {
        //     const card = this.ownerDocument.createElement("app-card");

        //   });

        this.shadowRoot?.appendChild(section);
    }
}

customElements.define('app-dashboard', Dashboard);