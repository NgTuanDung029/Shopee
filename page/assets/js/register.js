var password = document.querySelector("#password");
var confirmPwd = document.querySelector("#password-confirmation");
var registerError = document.querySelector(".registerError");
var btnRegister = document.querySelector(".btn-Register");


btnRegister.addEventListener("click", checkPassword);

const rexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const email = document.querySelector(".email");

email.addEventListener("blur", function () {
    if (rexEmail.test(email.value)) {
        registerError.textContent = "";
    } else {
        registerError.textContent = "Email không hợp lệ";
    }
})

function checkPassword(){
    // console.log("test")
    if (password.value != confirmPwd.value) {
        registerError.textContent = "Mật khẩu không trùng khớp. Hãy nhập lại";
    } else{
        registerError.textContent = "";
    }
}
