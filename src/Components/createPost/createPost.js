class CreatePost extends HTMLElement{

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
        <div class="creted">
        <section class="create">
        <img id="perfil" src="./imagenes/perfil.png">
        <input id="navv" placeholder="create...">
        </section>
        <section class="iconos">
        <img src="./imagenes/imagen.png">
        <img src="./imagenes/youtube.png">
        <img src="./imagenes/calendario.png">
        <img src="./imagenes/menu.png">
        </section>
        </div>

        `;
    }
}

customElements.define('create-post', CreatePost);
export default CreatePost;