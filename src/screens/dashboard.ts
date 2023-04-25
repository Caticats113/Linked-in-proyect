import { datas } from "../mocks/getData";
import { dataR } from "../mocks/getData";
import { Data } from "../types/data";
import { DataR } from "../types/dataR";
import Card, { Attributes } from "../Components/card/card";
import FollowRecoms, {Attribute} from "../Components/followRecoms/followRecoms";


class Dashboard extends HTMLElement{
    datass: Card[]=[];
    datarr: FollowRecoms[]=[];
constructor(){
        super();
        this.attachShadow({mode:"open"});

        datas?.forEach((e:any) => {
            const prof = this.ownerDocument.createElement(
                "app-card"
                ) as Card;
                prof.setAttribute(Attributes.username, e.username);
                prof.setAttribute(Attributes.userpfp, e.userpfp);
                prof.setAttribute(Attributes.posttext, e.posttext);
                prof.setAttribute(Attributes.postimage, e.postimage);

                this.datass.push(prof);
        });

        dataR?.forEach((a:any)=>{
            const pruf=this.ownerDocument.createElement(
                "follow-recoms"
            ) as FollowRecoms;
            pruf.setAttribute(Attribute.username,a.username);
            pruf.setAttribute(Attribute.userpfp, a.userpfp);

            this.datarr.push(pruf);

        });

    }

     connectedCallback(){

        this.render()
    }

    render(){

        if(this.shadowRoot)this.shadowRoot.innerHTML='';

        const sidebarIcon=this.ownerDocument.createElement('sidebar-icon');
        this.shadowRoot?.appendChild(sidebarIcon);

        const nav=this.ownerDocument.createElement('app-nav');
        this.shadowRoot?.appendChild(nav);

        const createPost=this.ownerDocument.createElement('create-post');
        this.shadowRoot?.appendChild(createPost);

        const card = this.ownerDocument.createElement("section")
            card.className = "card";
            for (let index = 0; index < this.datass.length; index++) {
                 card.appendChild(this.datass[index]);
            }
            this.shadowRoot?.appendChild(card);

        const followrecoms =this.ownerDocument.createElement("section")
        followrecoms.className="followrecoms";

        for(let index = 0; index < this.datarr.length; index++){
            followrecoms.appendChild(this.datarr[index]);
        }
        this.shadowRoot?.appendChild(followrecoms);



    }

}
customElements.define('app-dashboard',Dashboard );