function displayNum(answer){
 document.getElementById('display').value += answer;
 console.log()
}

function clearDisplay(){
    document.getElementById('display').value='';
}

 function showResult(){
    document.getElementById('display').value = eval(document.getElementById('display').value)
}