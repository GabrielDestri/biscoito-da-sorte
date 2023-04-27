const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const coockie = screen1.querySelector("img");
const button = screen2.querySelector("button");
const fortune = screen2.querySelector("p");

const phrases=['Não espere o futuro mudar tua vida, porque o futuro é a consequência do presente',
'É necessário acreditar que o sonho é possível, que o céu é o limite e você é imbatível',
'O limite é uma fronteira criada só pela mente','A pressa é a inimiga da vitória. O fraco não tem espaço e o covarde morre sem tentar',
'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.'];

document.addEventListener('keypress', keyEnter)

function keyEnter(event){
    if (event.key == "Enter" && !screen1.classList.contains("hide")){
       openCoockie()
    }
}

function openCoockie(){
    // alert("biscoito aberto")
    const random = (Math.random() * (phrases.length - 0) + 0).toFixed(0)
    // console.log(random)
    fortune.innerText = phrases[random]
    
    toggleScreen()
}

function sortAgain(){
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

coockie.addEventListener("click", openCoockie)
button.addEventListener("click", sortAgain)