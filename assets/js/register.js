var password = document.querySelector("#password");
var confirmPwd = document.querySelector("#password-confirmation");
var registerError = document.querySelector(".registerError");
var btnRegister = document.querySelector(".btn-Register");


btnRegister.addEventListener("click", checkPassword);

function checkPassword(){
    console.log("test")
    if (password.value != confirmPwd.value) {
        registerError.textContent = "Mật khẩu không trùng khớp. Hãy nhập lại";
    }
}
