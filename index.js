// grabbing key
var env = $("#myPhpValue").val();
let key = 'undefined'
if (config.API_KEY) {
    key = config.API_KEY
    console.log("config")
} else {
    key = env
    console.log("env")
}
console.log(key)

// input
const searched = document.getElementById("search")
console.log(searched.value)

// output
const srcLink = document.getElementById("source-link")
const divOut = document.getElementById("output")

// ran in getRec
function getSource(id) {
    $.ajax({
        url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`,
        success: (res) => {
            srcLink.innerHTML = res.sourceUrl
            srcLink.href = res.sourceUrl
        }
    });
}

// onclick
function getRec() {
    $.ajax({
        // for now we only want 1 result, later 7 for a week, or 30 for a month -> number=1
        url: `https://api.spoonacular.com/recipes/search?apiKey=${key}&number=1&query=${searched.value}`,
        success: (res) => {
            divOut.innerHTML = `<h2>${res.results[0].title}</h2> <br> <img src='${res.baseUri}${res.results[0].image}'> <br><p> Ready in ${res.results[0].readyInMinutes} min.`;
            getSource(res.results[0].id);
        }
    });
}