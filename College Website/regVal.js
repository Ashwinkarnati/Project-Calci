function validateForm() {
    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("email").value;
    let phoneInput = document.getElementById("pnumber").value;
    let dobInput = document.getElementById("dob").value;
    let yearSelect = document.getElementById("year").value;

    if (nameInput === "") {
        document.getElementById("confirm").innerHTML="Please enter your full name.";
        return;
    }
    if (!emailInput.includes("@gmail.com")) {
        document.getElementById("confirm").innerHTML = "Please enter a valid email address (e.g., abc@gmail.com).";
        return;
    }
    if (isNaN(phoneInput) || phoneInput.length < 10) {
        document.getElementById("confirm").innerHTML = "Please enter a valid phone number.";
        return;
    }

    if (dobInput === "") {
        document.getElementById("confirm").innerHTML = "Please select your date of birth.";
        return;
    }

    if (yearSelect === "") {
        document.getElementById("confirm").innerHTML = "Please select your year.";
        return;
    }
    document.getElementById("confirm").innerHTML ="";
    window.location.href="loginPage.html";
}

let btn=document.querySelector("button");
btn.addEventListener("click",validateForm);