let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    var Value1 = document.getElementById("value1").value;
    var Value2 = document.getElementById("value2").value;
    var Elements = document.getElementById("elements").value;
    var Result = 0;

    if (Elements == "+") {
        Result = parseFloat(Value1) + parseFloat(Value2);
    }
    else if (Elements == "-") {
        Result = parseFloat(Value1) - parseFloat(Value2);
    }
    else if (Elements == "*") {
        Result = parseFloat(Value1) * parseFloat(Value2);
    }
    else if (Elements == "/") {
        Result = parseFloat(Value1) / parseFloat(Value2);
    }

    document.getElementById("result").value = Result;
});