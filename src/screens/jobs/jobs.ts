export default class Jobs extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/jobs/jobs.css">`;

        const sidebar = this.ownerDocument.createElement('sidebar-icon')
        this.shadowRoot?.appendChild(sidebar);

        const nav = this.ownerDocument.createElement('app-nav');
        this.shadowRoot?.appendChild(nav);

        const card = this.ownerDocument.createElement('h3');
        card.textContent = "User name";
        this.shadowRoot?.appendChild(card);

        const userinfo = this.ownerDocument.createElement('p');
        userinfo.textContent = "";
        this.shadowRoot?.appendChild(userinfo);

        const section = this.ownerDocument.createElement("section")
        const saveJobs = this.ownerDocument.createElement('button');
        saveJobs.innerHTML = "My jobs";
        section.appendChild(saveJobs)

        const alertJobs = this.ownerDocument.createElement('button');
        alertJobs.innerHTML = "Jobs alert";
        section.appendChild(alertJobs)
        this.shadowRoot?.appendChild(section);
    }
}
customElements.define('app-jobs', Jobs);