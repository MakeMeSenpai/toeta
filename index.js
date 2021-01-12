console.log(food)

// const isToday = (someDate) => {
//     const today = new Date()
//     return someDate.getDate() == today.getDate() &&
//       someDate.getMonth() == today.getMonth() &&
//       someDate.getFullYear() == today.getFullYear()
// }

// ran in getRec
function getSource(id, ky) {
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
    const env = document.getElementById("key")
    const key = env.value

    // input
    // const searched = document.getElementById("search")
    const searched = food[0]

    // output
    const divOut = document.getElementById("output")
    $.ajax({
        // for now we only want 1 result, later 7 for a week, or 30 for a month -> number=1
        url: `https://api.spoonacular.com/recipes/search?apiKey=${ky}&number=1&query=${searched.value}`,
        success: (res) => {
            divOut.innerHTML = `<h2>${res.results[0].title}</h2> <br> <img src='${res.baseUri}${res.results[0].image}'> <br><p> Ready in ${res.results[0].readyInMinutes} min.`;
            getSource(res.results[0].id, key);
        }
    });
}
