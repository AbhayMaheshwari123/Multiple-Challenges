const template2=document.createElement('template')
template2.innerHTML=`
<style>
.container4{
    border: 2px solid brown;
    width: 75%;
    margin: 0 auto;
    text-align: center;
}

.flex-box-pick-color{
    display: flex;
    border: 1px solid black;
    padding: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}


</style>
<div class='container4'>
<h2 id="change-my-color">Change the Color of All Buttons!</h2>
<div class='flex-box-pick-color'>
    <form action="">
        <select name="backdrop" id="background" onchange="buttoncolorchange(this)">
        <option value="random">Random</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="reset">Reset</option>
        </select>
    </form>
    <button class='btn btn-primary'>Facebook</button>
    <button class='btn btn-danger'>Youtube</button>
    <button class='btn btn-warning'>Koo</button>
    <button class='btn btn-success'>Whatsapp</button>
</div>
</div>`


class Changebutton extends HTMLElement
{
    constructor()
    {
        super()    
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template2.content.cloneNode(true));
    }
    
    connectedCallback(){
        
        
    }

    disconnectedCallback(){
      
    }
}

window.customElements.define('change-btn', Changebutton);