class Nav extends HTMLElement{

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
        <section class="buscador">
        <img id="in" src="./imagenes/in.png">
        <input id="navv" placeholder="search ....">
        </section>`;

    }
}

customElements.define('nav-post', Nav);
export default Nav;