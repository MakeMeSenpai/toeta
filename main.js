// onclick
function isValid() {
    const password = document.getElementById("password");
    const validator = document.getElementById("validator");
    if (password.value === validator.value) {
        const path = "https://toeta.herokuapp.com/pan.html"
        // local path = "http://127.0.0.1:5500/pan.html"
        // should relocate our user onto pandora page
        window.location.replace(`${path}`)
    } else {
        alert("Your Passwords do not match!")
    }
}