class myElement extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:"open"});
        console.log('Hola Mundo!!');
    
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML= `
            <section>
                <h2 class="title">Hola Mundo!!!</h2>
                <div>
                    <p>Soy mas texto Ejemplo sw clase</p>
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

 //Si colocamos estilos para evitar la falla de igual manera entra en conflicto