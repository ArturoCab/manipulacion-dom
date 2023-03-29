const h1=document.querySelector('h1');

const form = document.querySelector("#form");
const input1=document.querySelector("#calculo1");
const input2=document.querySelector("#calculo2");
const pResult=document.querySelector("#resultado");
const btn=document.querySelector('#btnCalcular');

const img = document.querySelector('#pkmn');

form.addEventListener('submit',sumarInputValues);
img.addEventListener('mouseover',toogleShiny);
img.addEventListener('mouseout', toogleShiny);
img.addEventListener('click', toogleShiny);
var num;
var src;
function toogleShiny(event){
    switch(event.type){
        case 'click':
            updatePkmn();
        case "mouseover":
            src="https://www.serebii.net/Shiny/SV/new/"+num+".png";
            img.setAttribute("src",src);
            if(img.naturalHeight==0){
                console.error("pokemon no cargado");
                src="https://www.serebii.net/swordshield/pokemon/"+num+".png";
                img.setAttribute("src",src);
            }
            break;
        case 'mouseout':
            src= "https://www.serebii.net/scarletviolet/pokemon/new/"+num+".png";
            img.setAttribute("src",src);
            break;
        default:
            console.warn(event.type+" is not supported");
    }
    img.setAttribute("src",src);
    
}

function sumarInputValues(event){
    event.preventDefault();
    console.log({event});
    let n=Number(input1.value) + Number(input2.value);
    pResult.innerHTML=n;

    updatePkmn();
}

function updatePkmn(){
    num= Math.max(Math.floor(Math.random()*1011),1);
    num=num.toString().padStart(3,'0');
    src= "https://www.serebii.net/scarletviolet/pokemon/new/"+num+".png";
    img.setAttribute("src",src);
    document.querySelector('label').innerHTML=num;
    
}

updatePkmn();