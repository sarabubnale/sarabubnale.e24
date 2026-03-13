let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", function () {

    let birthday = document.getElementById("birthday").value;

    if (birthday === "") {
        result.innerHTML = "Please enter your date of birth";
        return;
    }

    let birthDate = new Date(birthday);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    result.innerHTML = "Your age is " + age + " years old";
});