let inputFields = document.querySelectorAll("input");
let pwdConfirmation = document.getElementById("confirm-password");
let pwdNew = document.getElementById("password");
let pwdBoxes = new Array(pwdNew, pwdConfirmation);

console.log(inputFields)

inputFields.forEach(inputField => {
    inputField.addEventListener("focusout", () => {
        inputField.classList.add("was-selected")
    });
});


pwdBoxes.forEach(pwdBox => {
    pwdConfirmation.addEventListener("focusout", () => checkPwd())
});

function checkPwd() {


    pwdBoxes.forEach(pwdBox => {
        if (pwdNew.value !== pwdConfirmation.value) {
            pwdBox.classList.add("error");
        } else {pwdBox.classList.remove("error")};
    });

}