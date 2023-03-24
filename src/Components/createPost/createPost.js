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
        <div class="card">
        <img src="perfil.png">
        <input type="" placeholder="create ....">
        <img src="imagen.png">
        <img src="youtube.png">
        <img src="calendario.png">
        <img src="menu.png">
        </div>
        `;
    }
}

customElements.define('create-post', CreatePost);
export default CreatePost;