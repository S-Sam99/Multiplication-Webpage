var num1,num2,guess,answer,responseCorrect,responseIncorrect,counter;

//"$" uses jQuery
$(document).ready(new function(){
    //getting access from "num1" id
    num1 = document.getElementById("num1");
    
    num2 = document.getElementById("num2");
    guess = document.getElementById("inputfield");
    responseCorrect = document.getElementById("responseCorrect");
    responseIncorrect = document.getElementById("responseIncorrect");
    counter = document.getElementById("counternumber");
    
    //looks at the submit button when clicked
    $("#submitbutton").click(function(){
        checkMultiplicationAnswer();
    });
    
    setNumbers();
});

function setNumbers(){
    num1.innerHTML = Math.floor(Math.random()*10)+1;
    num2.innerHTML = Math.floor(Math.random()*10)+1;
}

function checkMultiplicationAnswer(){
    var n1 = parseInt(num1.innerHTML);
    var n2 = parseInt(num2.innerHTML);
    answer = n1*n2;
    
    if (parseInt(guess.value) == answer){
        responseCorrect.innerHTML = "Correct!";
        responseIncorrect.innerHTML = "";
        counter.innerHTML = parseInt(counter.innerHTML)+1;
        setNumbers();
    }else{
        responseIncorrect.innerHTML = "Incorrect!";
        responseCorrect.innerHTML = "";
        counter.innerHTML = 0;
    }
}

function checkDivsionAnswer(){
    var n1 = parseInt(num1.innerHTML);
    var n2 = parseInt(num2.innerHTML);
    answer = Math.floor(n1/n2);
    
    if (parseInt(guess.value) == answer){
        responseCorrect.innerHTML = "Correct!";
        responseIncorrect.innerHTML = "";
        counter.innerHTML = parseInt(counter.innerHTML)+1;
        setNumbers();
    }else{
        responseIncorrect.innerHTML = "Incorrect!";
        responseCorrect.innerHTML = "";
        counter.innerHTML = 0;
    }
}