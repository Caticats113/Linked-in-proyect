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
        <link rel="stylesheet" href="../src/Components/nav/nav.css">
        <link rel="stylesheet" href="./index.css">

            <section class="buscador">
            <img id="in" src="./imagenes/in.png">
            <input id="navv" placeholder="search...">
            </section>`;

    }

}
customElements.define('app-nav',Nav);