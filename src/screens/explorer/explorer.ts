import { datas } from "../../mocks/getData";
import { Data } from "../../types/data";
import data from "../../services/data";
import ExplorerCard, { Attributes } from "../../Components/explorerCard/explorerCard";
import { getData, getDataR } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

export default class Explorer extends HTMLElement {
    datass: ExplorerCard[] = [];
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const datass = await data.get();
        datass?.forEach((e: Data) => {
            const prof = this.ownerDocument.createElement(
                "explorer-card"
            ) as ExplorerCard;
            prof.setAttribute(Attributes.userbanner, e.userbanner);
            prof.setAttribute(Attributes.username, e.username);
            prof.setAttribute(Attributes.userpfp, e.userpfp);
            prof.setAttribute(Attributes.description, e.description);

            this.datass.push(prof);
        });

        if (appState.data.length === 0) {
            const action = await getData();

        } else {
            this.render();
        }

        if (appState.datar.length === 0) {
            const action = await getDataR();

        } else {
            this.render();
        }
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/explorer/explorer.css">`;

        const sidebar = this.ownerDocument.createElement('sidebar-icon')
        this.shadowRoot?.appendChild(sidebar);

        const mainDashboard = this.ownerDocument.createElement("section")
        mainDashboard.setAttribute("id", "maindashboard")

        const nav = this.ownerDocument.createElement('app-nav');
        mainDashboard.appendChild(nav);

        const recomendaciones = this.ownerDocument.createElement('div')
        recomendaciones.setAttribute("id", "recomendaciones")

        const tittle = this.ownerDocument.createElement('h2');
        tittle.textContent = 'Recomendaciones';
        recomendaciones.appendChild(tittle)

        const card = this.ownerDocument.createElement("section")
        card.className = "card";

        for (let index = 0; index < this.datass.length; index++) {
            card.appendChild(this.datass[index]);
        }
        recomendaciones.appendChild(card);

        mainDashboard.appendChild(recomendaciones);

        this.shadowRoot?.appendChild(mainDashboard);
    }
}
customElements.define('app-explorer', Explorer);
