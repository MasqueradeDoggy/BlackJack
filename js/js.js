const cardNames = [
    [2, 3, 4, 5, 6, 7, 8, 9, 10],
    ["King", "Queen", "Jack", "Ace"]
];
const hitBtn = document.getElementById("hit");

let plrHand = [];
let cpuHand = [];

function getCValues(cardName) {

switch(cardName) {
    case "King":
        console.log("King");
        return 10;
        break;
    case "Queen":
        console.log("Queen");
        return 10;
        break;
    case "Jack":
        console.log("Jack")
        return 10;
        break;
    case "Ace":
        console.log("Ace");
        return 11;
        break;
    default:
        return cardName;
    }
}



    function selectArray() {

        function pullNum() {
        const numSelect = Math.floor(Math.random() * 52) + 1;
        return numSelect;
    }
        const selector = pullNum();
        const [numArray, faceCardArray] = cardNames;
        const randomNum = Math.floor(Math.random() * numArray.length);
        const randomFace = Math.floor(Math.random() * faceCardArray.length);

        if (selector >= 0 && selector <= 12) { 
            return faceCardArray[randomFace];
        } else {
            return numArray[randomNum];
        }
    }

    function drawCard() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        const draw = selectArray();
        plrHand.push(draw);
        let card1Score = plrHand[0];
        let card2Score = plrHand[1];
        const dealtCards = document.getElementById("cards");
        dealtCards.textContent = `Cards: ${plrHand}`;

        const faceCards = ["Jack", "King", "Ace", "Queen"];
        let hasFaceCards = false;

      for (let i = 0; i < plrHand.length; i++){
        if (faceCards.includes(plrHand[i])){
            hasFaceCards = true;
            break;
        }
      } 
      if (hasFaceCards) {
        for (let i = 0; i < plrHand.length; i++) {
        if (typeof plrHand[i] != 'number'){
            const FaceValue = getCValues(plrHand[i]);
            if (i === 0){
                card1Score = FaceValue;
            } else if (i === 1){
                card2Score = FaceValue;
            }
        }
            
        }
      }
      function calcScore() {
        let sum = 0;
        for (let i = 0; i < plrHand.length; i++) {
          const cardValue = getCValues(plrHand[i]);
          sum += cardValue;
        }
        console.log(sum);
        return sum;
      }

      calcScore();
      const scoreCount = document.getElementById("score");
      scoreCount.textContent = `Score: ${calcScore()}`;

      const plrScore = calcScore();
        if (plrScore > 21){
            function endGame(){
                alert("Over 21! You Lose!");
                
                while(plrHand.length > 0){
                    plrHand.pop()
                }
            }
            endGame();

        }  
    }


    function startRound() {
        for(i=0; i < 2; i++){
            drawCard()
        }
        hitBtn.addEventListener('click', () =>{
            
            drawCard();
        })
       
           
        }

        startRound()