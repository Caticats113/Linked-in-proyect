class DashboardPost extends HTMLElement {

    static get observedAttributes() {
        return ["username","userpfp", "posttext", "postimage","like","coment","actu","send"];
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
        <link rel="stylesheet" href="./styles.css">
        <div class="post">
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
    }
}

customElements.define('dashboard-post', DashboardPost);
export default DashboardPost;
