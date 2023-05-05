import { datas } from "../../mocks/getData";
import { Data } from "../../types/data";
import Card, { Attributes } from "../../Components/card/card";

export default class Dashboard extends HTMLElement {
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
            this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/dashboard/dashboard.css">`;
        //sidebar
        const sideBar = this.ownerDocument.createElement('sidebar-icon');
        this.shadowRoot?.appendChild(sideBar);
        //main Dashboard
        const mainDashboard = this.ownerDocument.createElement("section")
        mainDashboard.setAttribute("id", "app-dashboard")

        const nav = this.ownerDocument.createElement('app-nav');
        mainDashboard.appendChild(nav);

        const createPost = this.ownerDocument.createElement('create-post');
        mainDashboard.appendChild(createPost);

        const card = this.ownerDocument.createElement("section")
        card.className = "card";
        for (let index = 0; index < this.datass.length; index++) {
            card.appendChild(this.datass[index]);
        }
        mainDashboard.appendChild(card);

        this.shadowRoot?.appendChild(mainDashboard);
        //recoms
        const followRecoms = this.ownerDocument.createElement('follow-recoms');
        this.shadowRoot?.appendChild(followRecoms);
    }
}

customElements.define('app-dashboard', Dashboard);