import styles from "./createpost.css";
export default class CreatePost extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});

    }

    connectedCallback(){
        this.render()
    }

    render(){

        if(this.shadowRoot) this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="../src/Components/createPost/createpost.css">
        <link rel="stylesheet" href="./index.css">

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
    </div>`;
    }
}

customElements.define('create-post',CreatePost );