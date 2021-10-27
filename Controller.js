let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    var Value1 = document.getElementById("value1").value;
    var Value2 = document.getElementById("value2").value;
    var Elements = document.getElementById("elements").value;
    //var Total = document.getElementById("result").value;
    var Result = 0;

    if (Elements == "+") {
        console.log("Suma");
        Result = parseFloat(Value1) + parseFloat(Value2);
        console.log(Result);
        document.getElementById("result").value = Result;
    }
    if (Elements == "-") {
        console.log("Resta");
        Result = parseFloat(Value1) - parseFloat(Value2);
        console.log(Result);
        document.getElementById("result").value = Result;
    }
    if (Elements == "*") {
        console.log("Mult");
        Result = parseFloat(Value1) * parseFloat(Value2);
        console.log(Result);
        document.getElementById("result").value = Result;
    }
    if (Elements == "/") {
        console.log("Div");
        Result = parseFloat(Value1) / parseFloat(Value2);
        console.log(Result);
        document.getElementById("result").value = Result;
     }    
});



        
    

