class Card extends HTMLElement{


    static get observedAttributes() {
      return ["name", "photoPerfil", "info", "post"];
    }

      constructor(){
          super();
          this.attachShadow({ mode: "open" });
      }

      attributeChangedCallback(propName, oldValue, newValue) {

            this[propName] = newValue;
            this.render();

        }

      connectedCallback() {
          this.render();
        }

        render(){
          this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/card/card.css">
            <section>
            <img src="${this.photoPerfil}">
            <h1>${this.name}</h1>
            <p>${this.info}</p>
            <img src="${this.post}">
            </section>
            `;
        }
    }

    customElements.define("card-post",Card);
    export default Card;
