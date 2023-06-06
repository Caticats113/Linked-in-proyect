import { barData } from "../../mocks/getData";
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { BarData } from "../../types/barData";
import { Screens } from "../../types/store";

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
        <link rel="stylesheet" href="../src/Components/sidebarIcons/sidebarIcons.css">
        <link rel="stylesheet" href="./index.css">
        `;

        const container = this.ownerDocument.createElement('div');
        container.setAttribute('id', 'sidebar');

        barData.map ((e:BarData)=> {
            const barIcon = this.ownerDocument.createElement('img');
            barIcon.setAttribute('src',`${e.imgSource}`);
            barIcon.addEventListener("click", ()=>{
                dispatch(navigate(e.linkRef))
            })

            const linkPage = this.ownerDocument.createElement('a');
            linkPage.appendChild(barIcon);

            container.appendChild(linkPage);
        })

        this.shadowRoot?.appendChild(container);
    }
}

customElements.define('sidebar-icon',sidebarIcon );