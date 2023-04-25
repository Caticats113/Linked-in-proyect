import styles from "./nav.css"
export default class Nav extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});

    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
            <section class="buscador">
            <img id="in" src="./imagenes/in.png">
            <input id="navv" placeholder="search...">
            </section>`;

    }

}
customElements.define('app-nav',Nav);