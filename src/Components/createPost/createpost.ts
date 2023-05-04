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
    const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
    }
}

customElements.define('create-post',CreatePost );