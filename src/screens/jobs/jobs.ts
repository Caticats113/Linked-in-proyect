import { datas } from "../../mocks/getData";
import { Data } from "../../types/data";
import data from "../../services/data";
import JobCard, { Attributes } from "../../Components/jobCard/jobCard";
import { getData, getDataR } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

export default class Jobs extends HTMLElement {
    datass: JobCard[] = [];
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const datass = await data.get();
        datass?.forEach((e: Omit<Data, "id">) => {
            const prof = this.ownerDocument.createElement(
                "job-card"
            ) as JobCard;
            prof.setAttribute(Attributes.username, e.username);
            prof.setAttribute(Attributes.userpfp, e.userpfp);
            prof.setAttribute(Attributes.jobtext, e.jobtext);

            this.datass.push(prof);
        });

        if (appState.data.length === 0) {
            const action = await data.get();

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
        <link rel="stylesheet" href="../src/screens/jobs/jobs.css">`;

        const sidebar = this.ownerDocument.createElement('sidebar-icon')
        this.shadowRoot?.appendChild(sidebar);

        const mainDashboard = this.ownerDocument.createElement("section")
        mainDashboard.setAttribute("id", "app-dashboard")

        const nav = this.ownerDocument.createElement('app-nav');
        mainDashboard.appendChild(nav);

        const card = this.ownerDocument.createElement("section")
        card.className = "card";

        const tittle = this.ownerDocument.createElement('h2');
        tittle.textContent = 'Recomendaciones';
        card.appendChild(tittle)

        for (let index = 0; index < this.datass.length; index++) {
            card.appendChild(this.datass[index]);
        }
        mainDashboard.appendChild(card);

        this.shadowRoot?.appendChild(mainDashboard);

        const aside = this.ownerDocument.createElement("aside")
        const saveJobs = this.ownerDocument.createElement('button');
        saveJobs.innerHTML = "My jobs";
        aside.appendChild(saveJobs)

        const alertJobs = this.ownerDocument.createElement('button');
        alertJobs.innerHTML = "Jobs alert";
        aside.appendChild(alertJobs)
        this.shadowRoot?.appendChild(aside);
    }
}
customElements.define('app-jobs', Jobs);