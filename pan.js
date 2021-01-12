(function () {
    // grabs saved date from cache -> should be last time user logged in
    let someDate = null
    if (window.localStorage.getItem("senpai-time")) {
        someDate = window.localStorage.getItem("senpai-time")
    } else {
        window.localStorage.setItem("senpai-time", new Date())
        someDate = window.localStorage.getItem("senpai-time")
    }
    const env = document.getElementById("key")
    const key = env.value
    const searched = food // our list of food pulled from words.js
    const srcLink = document.getElementById("source-link")
    const divOut = document.getElementById("output")

    // returns true if user logs in same day
    const isToday = (someDate) => {
        let today = new Date()
        // `Mon Jan 11 2021 23:54:22 GMT-0800 (Pacific Standard Time)`
        someDateList = someDate.split(" ")
        today = today.toString()
        todayList = today.split(" ")
        // compares month, day, and year
        return someDateList[1] == todayList[1] &&
         someDateList[2] == todayList[2] &&
         someDateList[3] == todayList[3] 
        //  && someDateList[4] == todayList[4] // tests isToday returns false
    }
    // console.log(isToday(someDate)) tests isToday returns boolean


    /* if same day, and not users first time load saved data */
    // we check if cached output has a value, else meaning the dates are the same simply because it's their first time on the website
    if (isToday(someDate) == true && window.localStorage.getItem("senpai-output0")) {
        // for (let i = 0; i < 7; i++) {
        //     console.log(window.localStorage.getItem(`senpai-output${i}`))
        // }
        divOut.innerHTML = window.localStorage.getItem("senpai-output0");
        srcLink.innerHTML = "Start Cookin!";
        srcLink.href = window.localStorage.getItem("senpai-link0");
    /* else load new data, and cache it */
    } else {
        window.localStorage.setItem("senpai-time", new Date())

        /* getSource */
        function getSource(id) {
            $.ajax({
                url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`,
                success: (res) => {
                    srcLink.innerHTML = "Start Cookin!"
                    srcLink.href = res.sourceUrl
                    window.localStorage.setItem(`senpai-link${0}`, srcLink)
                }
            });
        }

        /* getRec */
        // for food in list, return a search result
        // for (let i = 0; i < 7; i++) {
        $.ajax({
            url: `https://api.spoonacular.com/recipes/search?apiKey=${key}&number=1&query=${searched[0]}`,
            success: (res) => {
                divOut.innerHTML = `<h2>${res.results[0].title}</h2> <br> <img class="center" src='${res.baseUri}${res.results[0].image}'> <br><p> Ready in ${res.results[0].readyInMinutes} min.</p>`;
                getSource(res.results[0].id);    
                window.localStorage.setItem(`senpai-output${0}`, `<h2>${res.results[0].title}</h2> <br> <img class="center" src='${res.baseUri}${res.results[0].image}'> <br><p> Ready in ${res.results[0].readyInMinutes} min.</p>`)
            }
        });
        // }
    }
})();