class DashboardPost extends HTMLElement {

    static get observedAttributes() {
        return ["username","userpfp", "posttext", "postimage"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        console.log(this.userPfp);
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles.css">
        <div>
            <img id="pf" src="${this.userpfp}">
            <label>${this.username}</label>
        </div>
        <p>${this.posttext}</p>
        <img id="pst" src="${this.postimage}">
        `;
    }
}

customElements.define('dashboard-post', DashboardPost);
export default DashboardPost;
