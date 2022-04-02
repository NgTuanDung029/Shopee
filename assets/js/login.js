var users = [
    {
        username: "nguyentuandung",
        password: "020902",
        permissions: "admin", 
    },
    {
        username: "khach1",
        password: "123456",
        permissions: "guest",
    },
]

var loginError = document.querySelector(".loginError");
function Login() {
    event.preventDefault();
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var user = check_user(username, password, users);
    if (user) {
        if (user.permissions == "admin") {
            window.location.href = "#";
            
        } else {
            window.location.href = "home.html";
        }
    } else {
        loginError.innerHTML = "Tài khoản hoặc mật khẩu không đúng";
    }
}

//code sample: demo_pr
function check_user(username, password, users) {
    for (i in users) {
        var user = users[i];
        if (user.username == username && user.password == password) {
            return user;
        }
    }
    return false;
}

