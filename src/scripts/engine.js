const emojis = [
    "😉","😉","😎","😎","😶‍🌫️","😶‍🌫️","👹","👹","👽","👽","🦄","🦄","🐒","🐒","🦛","🦛",
];

// Emojis abertos
let openCards =[];

// Embaralhador de emojis
let shufffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

// Criação das cartas
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shufffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    // Verificar se foram abertas duas cartas
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this); //Salvar no vetor as cartas
    }

    // Verificar se as duas cartas são iguais
    if(openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    // Verificar se as duas cartas são iguais
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        // Se forem iguais, inclui a classe boxMatch
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        // Se forem diferentes, remove a classe boxOpen e desvira as cartas
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    // Resetar o vetor para continuar vendo as outras cartas
    openCards = [];

    // Verificar todas as cartas viradas
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você ganhou!");
        window.location.reload();
    }
}