let lato = 32;
const lavagna = document.querySelector(".container"); 

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

lavagna.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = "black";
})