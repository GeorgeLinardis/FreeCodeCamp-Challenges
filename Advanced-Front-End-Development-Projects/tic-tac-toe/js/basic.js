$('document').ready(function(){
    "use strict";
    let playerSymbol="X",computerSymbol="O",
        playerScore=0,computerScore = 0,turn="player";

   class Game {

       constructor(playerSymbol,computerSymbol){
           this.tileSymbols = $(".symbol");
           this.playerScore = $("#player-score-number")[0];
           this.computerScore = $("#computer-score-number")[0];
       }

       initializeGame(){
           console.log("initialize game!");
           //set all symbols to ""
           for(let i=0;i<this.tileSymbols.length;i++){
               this.tileSymbols[i].innerText="";
           }
       }

       playerChooseSymbol(){
           $("#messages").css("display","flex");
           $("#present-choices").css("display","flex");
       }

       showGameResult(result){
           $("#messages").css("display","flex");
           $("#present-game-result").css("display","flex");
           $("#game-result")[0].innerText = result;
       }

       messageDissapear(){
           $("#messages").css("display","none");
       }

       resetGame (){
           console.log("reset game!");
           this.playerScore.innerText=0;
           this.computerScore.innerText=0;
           this.playerChooseSymbol();
           this.initializeGame();

       }

   }

  let myApp = new Game;


   myApp.resetGame();


});