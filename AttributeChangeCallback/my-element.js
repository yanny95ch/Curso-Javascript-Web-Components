class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    static get observedAttributes(){
        return["title","parrafo","img"];
    }
    attributeChangedCallback(attrib,oldval, newval){
        if (attrib === "title") {
            this.title = newval;
        }
        if (attrib === "parrafo") {
            this.parrafo= newval;
        }
        if (attrib === "img") {
            this.img= newval;
        }
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML= `
            <section>
                <h2> ${this.title} </h2>
                <div>
                    <p> ${this.parrafo}</p>
                <img src=${this.img} / >
                </div>
            </section>
            ${this.getStyle()};
        `;
        return template;
    }
    getStyle(){
        return`
        <style>
            h2{
            color: gray
            }
        </style
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}
 customElements.define('my-element', myElement);