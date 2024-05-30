let btndash = document.querySelector(".dashboard");
let btnnotify = document.querySelector(".notify");
let btnpayment = document.querySelector(".payment");
let btnsubj = document.querySelector(".subject");
let main = document.querySelector("main");

function hideAllSections() {
    main.style.display = "none";
    main.querySelectorAll("div").forEach(section => {
        section.style.display = "none";
    });
}

function showSection(id) {
    hideAllSections();
    let selector = document.querySelector(`#${id}`);
    main.style.display = "flex";
    selector.style.display = "flex";
}

btndash.addEventListener("click", () => {
    showSection("dashboard");
});

btnnotify.addEventListener("click", () => {
    showSection("notify");
});

btnpayment.addEventListener("click", () => {
    showSection("payments");
});

btnsubj.addEventListener("click", () => {
    showSection("subjects");
});

let btnout=document.querySelector(".signout");
btnout.addEventListener("click", () => {
    window.location.href="loginPage.html";
});