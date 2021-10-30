let cards = document.querySelectorAll('.carte');

cards[0].style.left = "20px"
cards[1].style.left = "270px"
cards[2].style.left = "520px"






let position1;
let position2;
function change(){ 
    let randomArray = [];   
    for (let i = 0; i < 2; i++){
    let randomNum = Math.floor(Math.random() * 3)
    if (randomArray[i-1] != randomNum){
    randomArray.push(randomNum);
    console.log(randomArray);}
   else {i--};
}
 position1  = cards[randomArray[0]].style.left
 position2  = cards[randomArray[1]].style.left

 cards[randomArray[0]].classList.add ('transition')
 cards[randomArray[1]].classList.add ('transition')


//setTimeout( () => {
     console.log(randomArray[0])
     cards[randomArray[0]].style.left = position2
     cards[randomArray[1]].style.left = position1   
//}, 100)

randomArray = [];
console.log(randomArray)
}
document.addEventListener("click",change)   
//change()