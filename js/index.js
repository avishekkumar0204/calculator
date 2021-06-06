let btn = document.querySelectorAll(".button");
let op2 = document.querySelector(".operand2");
let op1 = document.querySelector(".operand1");
let op = document.querySelector(".operator");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        let value = this.getAttribute("data-value");
        if (value == "AC") {
            op2.innerText = "";
            op1.innerText = "";
            op.innerText = "";
        }
        else if (value == "+" || value == "-" || value == "/" || value == "%" || value == "X") {
            op1.innerText = op2.innerText;
            op.innerText = value;
            op2.innerText = "";
        }
        else if (value == '=') {
            let firstOp = parseFloat(op1.innerText);
            let operation = op.innerText;
            let secondOp = parseFloat(op2.innerText);
            op1.innerText = op1.innerText + op.innerText + op2.innerText;
            op.innerText = value;
            let res = null;
            if (operation == '+')
                res = eval(firstOp + secondOp);
            else if (operation == 'X')
                res = eval(firstOp * secondOp);
            else if (operation == '/')
                res = eval(firstOp / secondOp);
            else if (operation == '%')
                res = eval(firstOp % secondOp);
            else if (operation == '-')
                res = eval(firstOp - secondOp);
            if (!res)
                op2.innerText = "Enter valid Expression";
            else op2.innerText = res;


        }
        else {
            op2.innerText += value;
        }
    });
}



