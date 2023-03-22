class DashboardPost extends HTMLElement {

    static get observedAttributes() {
        return ["userPfp", "userName", "postText", "postImage"];
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
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/dashboardPost/dashboardPost.css">
        <div>
            <img src="${this.userPfp}">
            <label>${this.userName}</label>
        </div>
        <p>${this.postText}</p>
        <img src="${this.postImage}">
        `;
    }
}

customElements.define('dashboard-post', DashboardPost);
export default DashboardPost;
