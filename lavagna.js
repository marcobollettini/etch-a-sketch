//Variabili 
let lato = 32;
const lavagna = document.querySelector(".container"); 
const btn = document.querySelector("button");

//Pulizia e Creazione nuova lavagna col bottone

btn.addEventListener("click", () =>{
    lavagna.innerHTML = "";
    lato = prompt("indica il lato della nuova lavagna", "32");
    creaLavagna(lato);
})

//Funzione per la creazione della lavagna
const creaLavagna = (asse) => {
    for(x = 0; x < asse; x++){
        for(y = 0; y < asse; y++){
            
            const div = document.createElement("div");
            document.querySelector(".container").appendChild(div); 
            
        }
    }
    
    lavagna.style.gridTemplateColumns = `repeat(${lato}, 1fr)`;
    lavagna.style.gridTemplateRows = `repeat(${lato}, 1fr)`;
}

creaLavagna(lato);

//Funzione per colorare la lavagna tramite modifica della classe
lavagna.addEventListener('mouseover', e => {
    e.target.classList.add('pass');
})

