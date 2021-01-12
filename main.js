// onclick
function isValid() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const validator = document.getElementById("validator");
    // if (email.value.includes(".")) {
    if (password.value === validator.value) {
        // if (typeof config.local !== "undefined") {
        //     console.log("local")
        //     // should relocate our user onto pandora page
        //     window.location = "http://127.0.0.1:5500/pan.html"
        // } else {
        console.log("live")
        // replace works for local, while this works for server side
        window.location = "https://toeta.herokuapp.com/pan.html"
        // }
    } else {
        alert("Your Passwords do not match!")
    }
    // } else {
    //     alert("Please enter a valid Email")
    // }
}