const template = document.createElement('div');
template.innerHTML= `.
    <style>
        .texto{
        color: red;}
        p{
        color:blue;
        }
    </style>
    <p class="texto"> Hola Mundo!!! 2</p>
    <p>Texto Ejemplo para la clase</p>

`

class myElement extends HTMLElement{
    constructor(){
        super();
        console.log('Hola Mundo!!');
        
        this.p = document.createElement('p');
    }
    connectedCallback(){
        this.p.textContent= 'Hola mundo!!';
        this.appendChild(this.p);
        this.appendChild(template);
    }
}
 customElements.define('my-element', myElement);