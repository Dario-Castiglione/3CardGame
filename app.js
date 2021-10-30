const cards = document.querySelectorAll('.carte');
const Btn = document.querySelectorAll("button")
cards[0].style.left = "20px"
cards[1].style.left = "270px"
cards[2].style.left = "520px"





let randomArray = [];
let position1;
let position2;
function change(){    
    for (let i = 0; i < 2; i++){
    let randomNum = Math.floor(Math.random() * 3)
    if (randomArray[i-1] != randomNum){
    randomArray.push(randomNum);
    ;}
   else {i--};
}
 position1  = cards[randomArray[0]].style.left
 position2  = cards[randomArray[1]].style.left

 cards[randomArray[0]].classList.add ('transition')
 cards[randomArray[1]].classList.add ('transition')
//return randomArray;

setTimeout( () => {
     //console.log(randomArray[0])
     cards[randomArray[0]].style.left = position2
     cards[randomArray[1]].style.left = position1  
     cards[randomArray[0]].classList.remove ('transition')
     cards[randomArray[1]].classList.remove ('transition') 
     randomArray = [];
}, 200)

}

let round = 2;
let score = 1;
let winCard = cards[0];
let roundTime = 300;
winCard.style.backgroundImage = "url('re_coppe.jpg')";
function startChange(){ 
    
    const starter = setInterval(function(){ change(); }, 600);   
    roundTime = roundTime * round;
    setTimeout(() => {clearInterval(starter)}, roundTime);
    console.log(roundTime)
    roundTime = 300;
    function win(event){
        if (event.target === winCard) round = round + 0.5 ,
        winCard.style.transform = "",
        winCard.style.backgroundImage = "url('re_coppe.jpg')";
        else round = 2;       
    } 
    console.log(round)
    winCard.style.transform = ""
    for (x of cards) x.addEventListener("click",win)
    
}
const start = () => {
    startChange()
    winCard.style.transform = "rotatey(180deg)"
    winCard.style.backgroundImage = "";
}
Btn[0].addEventListener("click",start)   

