// onclick
function isValid() {
    let email = document.getElementById("email");
    const password = document.getElementById("password");
    const validator = document.getElementById("validator");
    const emailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    email = email.value.toLowerCase();
    if (!email.match(emailFormat)) {
        alert("Please enter a valid Email")
    } else if (email === "anthonyseanprotho@gmail.com") {
        // TODO: emails should be hashed, then checked to see if it's already being used... biggest concern is runtime
        alert("Sorry, this Email is already in use")
    } else {
        if (password.value === "" || password.value !== validator.value) {
            alert("Your Passwords do not match!")
        } else {
            // console.log("local")
            // window.location = "http://127.0.0.1:5500/profile.html";
            console.log("live")
            window.location = "https://toeta.herokuapp.com/profile.html"
        }
    }
}