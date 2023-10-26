function valuesAlert() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == "" || !email.match(mailformat)) {
        alert("Invalid email ID");
        return;
    }

    // Check if the password and confirm password match 
    if (password !== confirm_password) {
        alert("Password and Confirm Password do not match.");
        return;
    }

    alert("Email: " + email + "\nPassword: " + password)

}

function showPassword() {
    var passwordInput = document.getElementById("password");
    passwordInput.type = "text";
}

function countdown() {
    let dateofcountdown = new Date("nov 28, 2023, 12:00:00").getTime();
    let countlimit = setInterval(function () {
        let now = new Date().getTime();
        let distance = dateofcountdown - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(distance % (1000 * 60) / (1000));
        document.getElementById("counter1").innerHTML =  "<b>" + days + "days" + "</b>" + " " + hours + "hours"+ " " + minutes + "m" + " " + seconds + "s" 
        if (distance < 0) {
            clearInterval(countlimit);
            document.getElementById("counter1").innerHTML = "Expired";
        }
    })
}
countdown();

function countdown1() {
    let dateofcountdown = new Date("jan 01, 2024, 12:00:00").getTime();
    let countlimit = setInterval(function () {
        let now = new Date().getTime();
        let distance = dateofcountdown - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(distance % (1000 * 60) / (1000));
        document.getElementById("counter2").innerHTML =  "<b>" + days + "days" + "</b>" + " " + hours + "hours"+ " " + minutes + "m" + " " + seconds + "s" 
        if (distance < 0) {
            clearInterval(countlimit);
            document.getElementById("counter2").innerHTML = "Expired";
        }
    })
}
countdown1();

function countdown2() {
    let dateofcountdown = new Date("dec 25, 2023, 12:00:00").getTime();
    let countlimit = setInterval(function () {
        let now = new Date().getTime();
        let distance = dateofcountdown - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(distance % (1000 * 60) / (1000));
        document.getElementById("counter3").innerHTML =  "<b>" + days + "days" + "</b>" + " " + hours + "hours"+ " " + minutes + "m" + " " + seconds + "s" 
        if (distance < 0) {
            clearInterval(countlimit);
            document.getElementById("counter3").innerHTML = "Expired";
        }
    })
}
countdown2();

function scrollToCourseSection() {
    var courseSection = document.getElementById("Course");
    courseSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToProgramSection() {
    var programSection = document.getElementById("Program");
    programSection.scrollIntoView({ behavior: "smooth" });
}