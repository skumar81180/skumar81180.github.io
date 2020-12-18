let numbers = ["54", "59", 113];
let num1 = numbers[0].split("");
let num2 = numbers[1].split("");
let carry, result = "";
let ans = numbers[2];
function init() {
    document.getElementById("numa").innerHTML = num1[0];
    document.getElementById("numb").innerHTML = num1[1];
    document.getElementById("numc").innerHTML = num2[0];
    document.getElementById("numd").innerHTML = num2[1];

    document.getElementById("cara").innerHTML = carry;
    document.getElementById("result").innerHTML = result;
    let sr2 = document.getElementById("sr2").value;
    let sr1 = document.getElementById("sr1").value;
    if (sr1 > 10) {
        alert(sr1);
        sr1.addEventListener("onblur", function () {
            sr1 -= 10;
            alert(sr1);
            document.getElementById("sr1").value = sr1;
        });
    }
}

// let s1 = "13";
// let s2 = "11";
// s1 = parseInt(s1, 10);

// if (s1 > 9) {
//     s1 -= 10;
//     carry = "1";
// }

// sum = s2.concat(s1);

// if (ans == sum) {
//     result = "Correct Answer";
// } else {
//     result = "Wrong Answer";
// }