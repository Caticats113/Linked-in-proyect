import { datas } from "../../mocks/getData";
import { Data } from "../../types/data";
import data from "../../services/data";
import dataR from "../../services/dataR";
import { DataR } from "../../types/dataR";
import Card, { Attributes } from "../../Components/card/card";
import FollowRecomI, { Attributte } from "../../Components/followRecomI/followRecomI";
import { getData } from "../../store/actions";
import { getDataR } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import Firebase from "../../utils/firebase";

export default class Dashboard extends HTMLElement {
    datass: Card[] = [];
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
      const datass = await data.get();
      datass?.forEach((e: Omit<Data, "id">) => {
        const prof = this.ownerDocument.createElement(
            "app-card"
        ) as Card;
        prof.setAttribute(Attributes.username, e.username);
        prof.setAttribute(Attributes.userpfp, e.userpfp);
        prof.setAttribute(Attributes.posttext, e.posttext);
        prof.setAttribute(Attributes.postimage, e.postimage);

        this.datass.push(prof);
    });

    const datarr=await dataR.get();
    datarr?.forEach((a: DataR) => {
        const pruf = this.ownerDocument.createElement("follow-recomi")as FollowRecomI;
        pruf.setAttribute(Attributte.username, a.username);
        pruf.setAttribute(Attributte.userpfp, a.userpfp);
        this.shadowRoot?.appendChild(pruf);
    })


        if (appState.data.length === 0) {
            const action = await getData();

          } else {
            this.render();
          }

          if (appState.datar.length === 0) {
            const action = await getDataR();

          } else {
            this.render();
          }

      }


    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/dashboard/dashboard.css">`;
        //sidebar
        const sideBar = this.ownerDocument.createElement('sidebar-icon');
        this.shadowRoot?.appendChild(sideBar);
        //main Dashboard
        const mainDashboard = this.ownerDocument.createElement("section")
        mainDashboard.setAttribute("id", "app-dashboard")

        const nav = this.ownerDocument.createElement('app-nav');
        mainDashboard.appendChild(nav);

        const createPost = this.ownerDocument.createElement('create-post');
        mainDashboard.appendChild(createPost);


        const card = this.ownerDocument.createElement("section")
        card.className = "card";
        for (let index = 0; index < this.datass.length; index++) {
            card.appendChild(this.datass[index]);
        }
        mainDashboard.appendChild(card);

        this.shadowRoot?.appendChild(mainDashboard);
        //recoms
        const followRecoms = this.ownerDocument.createElement('follow-recoms');
        this.shadowRoot?.appendChild(followRecoms);


        Firebase.getPostsListener((products) => {
          // productsList.innerHTML = "";
          const oldOnesIds: String[] = [];
          card.childNodes.forEach((i) => {
            if (i instanceof HTMLElement) oldOnesIds.push(i.dataset.pid || "");
          });
          const newOnes = products.filter((prod) => !oldOnesIds.includes(prod.id));

          newOnes.forEach((e: any) => {
            const prof = this.ownerDocument.createElement(
              "app-card"
          ) as Card;
          prof.setAttribute(Attributes.username, e.username);
          prof.setAttribute(Attributes.userpfp, e.userpfp);
          prof.setAttribute(Attributes.posttext, e.posttext);
          prof.setAttribute(Attributes.postimage, e.postimage);

            card.prepend(prof);

          });
        });

    }
}

customElements.define('app-dashboard', Dashboard);