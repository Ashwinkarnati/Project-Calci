function validate() {
    let username = document.getElementById("input-user").value;
    let password = document.getElementById("input-pass").value;

    if (username.length < 10) {
        document.getElementById("check").innerHTML = "Username must be at least 10 characters";
        return;
    }

    if (password.length < 8) {
        document.getElementById("check").innerHTML = "Password must be at least 8 characters";
        return;
    }

    if (!/[A-Z]/.test(password)) {
        document.getElementById("check").innerHTML = "Password must contain at least one capital character";
        return;
    }

    if (!/[a-z]/.test(password)) {
        document.getElementById("check").innerHTML = "Password must contain at least one lowercase character";
        return;
    }

    if (!/\d/.test(password)) {
        document.getElementById("check").innerHTML = "Password must contain at least one digit";
        return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
        document.getElementById("check").innerHTML = "Password must contain at least one special character";
        return;
    }

    if (username !== 'AshwinKarnati' || password !== 'the1@Ashwin') {
        document.getElementById("check").innerHTML = "Incorrect username or password";
        return;
    }

    
    document.getElementById("check").innerHTML ="";
    window.location.href="college.html";
}

let btn = document.querySelector("button");
btn.addEventListener("click", validate);
