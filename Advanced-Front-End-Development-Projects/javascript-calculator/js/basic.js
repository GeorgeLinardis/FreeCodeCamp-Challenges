$('document').ready(function(){
    "use strict";
    const upperScreenLength = 11;
    const bottomScreenLength = 22;
    let $numberEntered = $("#number-to-enter")[0];
    let $calculationHistory = $("#calculation-history-num")[0];
    let $calculationType = $("#calculation-type")[0];
    let firstNumber=0,secondNumber=0;
    let calc="";

    function showOnScreen(digit){
        if($numberEntered.innerText.length<(upperScreenLength))
        {
            $numberEntered.innerText+=digit;
        }
    }

    function showResult(result){
        if($calculationHistory.innerText.length<bottomScreenLength){
            $calculationHistory.innerText = result;
            firstNumber = result;
            $numberEntered.innerText="";
        }else{
            $calculationHistory.innerText = "REACHED MAX";
            firstNumber = 0;
            $numberEntered.innerText="";
        }
    }

    function makeCalculation(){
        calc = $calculationType.innerText;
        switch(calc){
            case"+":
            return Number(firstNumber) + Number(secondNumber);
            case"-":
            return Number(firstNumber) - Number(secondNumber);
            case"×":
            return Number(firstNumber) * Number(secondNumber);
            case"÷":
            return Number(firstNumber) / Number(secondNumber);
        }

    }


    function checkCalcType(symbol){
        if(symbol==="AC"){
            $numberEntered.innerText = "";
            $calculationHistory.innerText = "";
            $calculationType.innerText = "";
            firstNumber=0;secondNumber=0;
        }
        else if(symbol==="C"){
            $numberEntered.innerText = $numberEntered.innerText.slice(0,-1);
        }
        else if(symbol==="="){
            secondNumber=$numberEntered.innerText;
            showResult(makeCalculation());
        }
        else if(symbol==="%"){
            console.log("percent")
        }
        else if (["+","÷","×","-"].indexOf(symbol)!==-1){
            if(firstNumber===0) {
                firstNumber = $numberEntered.innerText;
                $calculationHistory.innerText = firstNumber;
                $numberEntered.innerText="";
                $calculationType.innerText=symbol;
            }
            else{
                $calculationType.innerText=symbol;
                secondNumber=$numberEntered.innerText;
                showResult(makeCalculation());
            }
        }
    }


    $(".btn").mousedown(function(event){
        $(this).addClass("btn-clicked");
        if($(this).hasClass("num-btn")){
            if(event.target.innerText==="%"){
                $numberEntered.innerText = ($numberEntered.innerText)/100
            }else if(event.target.innerText==="."){
                $numberEntered.innerText = ($numberEntered.innerText)+".";
            }else {
            showOnScreen(event.target.innerText)
            }
        }
        else{
            checkCalcType(event.target.innerText);
        }


    }).mouseup(function(){
        $(this).removeClass("btn-clicked")
    });


});