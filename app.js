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


setTimeout( () => {
     //console.log(randomArray[0])
     cards[randomArray[0]].style.left = position2
     cards[randomArray[1]].style.left = position1  
     cards[randomArray[0]].classList.remove ('transition')
     cards[randomArray[1]].classList.remove ('transition') 
     randomArray = [];
}, 200)

}

/*
let round = 1;
let score = 0;
let winCard = cards[0];
let roundTime = 300;
winCard.style.backgroundImage = "url('re_coppe.jpg')";
const scoreSpan = document.querySelector("#score")
function startChange(){ 
    
    roundTime = roundTime * round;
    const starter = setInterval(function(){ change(); }, 300);  
    setTimeout(() => {clearInterval(starter)}, roundTime);

    console.log(roundTime)
    roundTime = 300;

    function win(event){

        if (event.target === winCard) round++,
        winCard.style.transform = "",
        winCard.style.backgroundImage = "url('re_coppe.jpg')",
        score++;
        else round = 0, score = 0;       
    
    } 

    for (x of cards) x.addEventListener("click",win)
    console.log(round)
    winCard.style.transform = ""
    scoreSpan.innerText = score;
}

const start = () => {
    startChange()
    winCard.style.transform = "rotatey(180deg)"
    winCard.style.backgroundImage = "";
}
*/


const validate=()=>{
    //round= 2;


    const conditionWin = (event) =>{
        const scoreSpan = document.querySelector("#score")
        if (event.target === winCard) {
            winCard.style.transform = "";
            winCard.style.backgroundImage = "url('re_coppe.jpg')";
            for (x of cards) x.removeEventListener("click",conditionWin)
            //round = round++ ;
             console.log(round)
             setTimeout(()=>{start()},500);
        }


        
        scoreSpan.innerText = timer;
    }


   for (x of cards) x.addEventListener("click",conditionWin)
      



       //round++, console.log(round)
    //console.log(score)
}


let round = 2;
let timer = 400;
let winCard = cards[0];
winCard.style.backgroundImage = "url('re_coppe.jpg')";
const start = () =>{
    //Btn[0].removeEventListener("click",start);  
    const starter = setInterval(() => {change()}, 300);
    cards[0].style.transform = "rotatey(180deg)"
    cards[0].style.backgroundImage = ""
    timer = timer + 600;

    validate()

    setTimeout(() => {clearInterval(starter);}, timer);
      
}
setTimeout(()=>{start()},500);
