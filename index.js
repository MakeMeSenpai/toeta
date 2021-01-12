// ran in getRec
function getSource(id, key) {
    // need to be ran this way because of TDZ, prevents call before reference error
    const srcLink = document.getElementById("source-link")
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
    // grabbing key
    var env = document.getElementById("myPhpValue")
    let key = "undefined"
    if (typeof env === "null") {
        key = config.API_KEY
        console.log("config")
    } else {
        key = env.value
        console.log('env')
    }
    console.log(key)

    // input
    const searched = document.getElementById("search")

    // output
    const divOut = document.getElementById("output")
    $.ajax({
        // for now we only want 1 result, later 7 for a week, or 30 for a month -> number=1
        url: `https://api.spoonacular.com/recipes/search?apiKey=${key}&number=1&query=${searched.value}`,
        success: (res) => {
            divOut.innerHTML = `<h2>${res.results[0].title}</h2> <br> <img src='${res.baseUri}${res.results[0].image}'> <br><p> Ready in ${res.results[0].readyInMinutes} min.`;
            getSource(res.results[0].id, key);
        }
    });
}
