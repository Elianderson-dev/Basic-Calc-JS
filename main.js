function add(){
    var numberOne = document.getElementById("numberOne").value
    var numberTwo = document.getElementById("numberTwo").value
    var result = parseInt(numberOne)+parseInt(numberTwo)
    document.getElementById("result").innerHTML="Result: "+result
}

function substract(){
    var numberOne = document.getElementById("numberOne").value
    var numberTwo = document.getElementById("numberTwo").value
    var result = parseInt(numberOne)-parseInt(numberTwo)
    document.getElementById("result").innerHTML="Result: "+result
}

function multiply(){
    var numberOne = document.getElementById("numberOne").value
    var numberTwo = document.getElementById("numberTwo").value
    var result = parseInt(numberOne)*parseInt(numberTwo)
    document.getElementById("result").innerHTML="Result: "+result
}
function divide(){
    var numberOne = document.getElementById("numberOne").value
    var numberTwo = document.getElementById("numberTwo").value
    var result = parseInt(numberOne)/parseInt(numberTwo)
    document.getElementById("result").innerHTML="Result: "+result
}