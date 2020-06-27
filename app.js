//calculator
//to display numbers in input
function getNumber(num){
    console.log(num)
    var result = document.getElementById("result");
    result.value += num;
}
//to clear input on clicking AC
function allClear(){
    var result = document.getElementById("result");
    result.value = ""
}
//for calculation
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}
//for decimal
function Dot(){
    var result = document.getElementById("result");
    if( result.length == 0)
    {
        result = "0."
    }else
    {
      if( result.indexOf(".") == -1 )
        {
            result = result + ".";
        }
    }
    result.value = eval(result.value)
}
//for clearing 1 character at a time
function clearResult(){
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.substr(0 , result.length - 1)
}