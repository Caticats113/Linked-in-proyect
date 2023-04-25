import styles from "./sidebarIcons.css"
export default class sidebarIcon extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});

    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles.css">
        <img src="../dist/imagenes/hogar.png">
        <img src="../dist/imagenes/globo.png">
        <img src="../dist/imagenes/maletin.png">
        <img src="../dist/imagenes/campana.png">
        <img src="../dist/imagenes/usuario.png">
        `;

    }

}
customElements.define('sidebar-icon',sidebarIcon );