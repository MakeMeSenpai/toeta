const allergyList = ["Dairy", "Egg", "Gluten", "Grain", "Peanut",
    "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"
];

/*['main course', 'side dish', 'dessert', 'appetizer', 'salad'
'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'marinade',
'fingerfood', 'snack', 'drink']*/
function getAllergy() {
    // would add type to search, but currently not an option
    const type = "&types=" + encodeURIComponent("main course")
    let concatenation = type + ""
    // adds diet to search
    const diet = window.localStorage.getItem("senpai-diet")
    if (diet !== null) {
        concatenation += diet
    }
    // adds intolerance to search
    let intolerance = window.localStorage.getItem("senpai-intolerance")
    if (intolerance !== null) {
        intolerance = intolerance.split(",")
        let allergies = []
        let exclude = []
        for (i = 0; i < intolerance.length; i++) {
            if (allergyList.includes(intolerance[i])) {
                allergies.push(encodeURIComponent(intolerance[i]))
            } else if (intolerance[i] != "") {
                exclude.push(encodeURIComponent(intolerance[i]))
            }
        }
        intolerance = ""
        if (allergies.length !== 0) {
            intolerance += "&intolerances=" + allergies.join()
        }
        if (exclude.length !== 0) {
            intolerance += "&excludeIngredients=" + exclude.join()
        }
        concatenation += intolerance
    }
    return concatenation
};

function getType(num) {
    // would add type to search, but currently not an option
    let type = "&types=" + encodeURIComponent("main course")
    if (num == 0) {
        type = "&types=" + encodeURIComponent("breakfast")
    } else if (num == 2) {
        type = "&types=" + encodeURIComponent("dessert")
    }
    return type
}

// this excludes ingredients from our search, so that users
// users never get a recipe that they can't eat!
const concatenation = ""; // getAllergy(); // removed because doesn't work
// console.log(concatenation);
(
    function () {
        // grabs saved date from cache -> should be last time user logged in
        let someDate = null
        if (window.localStorage.getItem("senpai-time")) {
            someDate = window.localStorage.getItem("senpai-time")
        } else {
            window.localStorage.setItem("senpai-time", new Date())
            someDate = window.localStorage.getItem("senpai-time")
        }
        const key = document.getElementById("key").value;
        divOut0 = document.getElementById("output0");
        srcLink0 = document.getElementById("source-link0");
        divOut1 = document.getElementById("output1");
        srcLink1 = document.getElementById("source-link1");
        divOut2 = document.getElementById("output2");
        srcLink2 = document.getElementById("source-link2");

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
        }
        console.log(`isToday? ${isToday(someDate)}`)

        // used to await api data
        function setData() {
            divOut0.innerHTML = window.localStorage.getItem(`senpai-output0`);
            srcLink0.innerHTML = "Start Cookin!";
            srcLink0.href = window.localStorage.getItem(`senpai-link0`);
            divOut1.innerHTML = window.localStorage.getItem(`senpai-output1`);
            srcLink1.innerHTML = "Start Cookin!";
            srcLink1.href = window.localStorage.getItem(`senpai-link1`);
            divOut2.innerHTML = window.localStorage.getItem(`senpai-output2`);
            srcLink2.innerHTML = "Start Cookin!";
            srcLink2.href = window.localStorage.getItem(`senpai-link2`);
        }

        /* if same day, and not users first time load saved data */
        // we check if cached output has a value, else meaning the dates are the same simply because it's their first time on the website
        // we will generate results if it's a new day.
        if (isToday(someDate) == true && window.localStorage.getItem("senpai-output0")) {
            console.log("Load Stored Data")
            setData()
        } else {
            console.log("Generate Data")
            // TODO: ADD IF STATEMENT FOR FIRST TIME USERS AND
            // USERS WHO ARE COMING BACK THE NEXT DAY. RIGHT NOW 
            // ONLY WORKS FOR FIRST TIME.
            window.localStorage.setItem("senpai-time", new Date())
            // TODO: CHANGE TO WHILE, TO CATCH NULL RESPONSES AND GIVE 
            // 7 VALID RESPONSES TO USER
            for (let i = 0; i < 3; i++) {
                /* getSource */
                function getSource(id) {
                    $.ajax({
                        url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`,
                        success: (res) => {
                            window.localStorage.setItem(`senpai-link${i}`, res.sourceUrl)
                        }
                    });
                    console.log("Storage Results:", window.localStorage.getItem(`senpai-output${i}`), window.localStorage.getItem(`senpai-link${i}`));
                    if (typeof window.localStorage.getItem(`senpai-link${i}`) == 'null') {
                        throw error
                    }
                }

                /* getRec */
                $.ajax({
                    url: `https://api.spoonacular.com/recipes/search?apiKey=${key}${getType(i)}&number=1&query=${food[i]}`,
                    success: (res) => {
                        // getSource runs into "can't find id" bug sometimes. But is needed, becuase despite us being able to collect all the data, I tried removing
                        // it, and none of the data would display.
                        getSource(res.results[0].id);
                        window.localStorage.setItem(`senpai-output${i}`, `<h3>${res.results[0].title}</h3> <br> <img class="img-size" src='${res.baseUri}${res.results[0].image}'> <br><p> Ready in ${res.results[0].readyInMinutes} min.</p>`)
                    },
                    error: function (res, textStatus) {
                        divOut0.innerHTML = "Status: " + textStatus + "\n (Please include in report)";
                        srcLink0.style.display = "none";
                        divOut1.innerHTML = "Oh no! Something went wrong! Refresh the page or try again tomorrow. If this problem continues feel free to report at AnthonySeanProtho@gmail.com with subject line 'Toeta Support'";
                        srcLink1.style.display = "none";
                        divOut2.innerHTML = "Error: " + res.status + "\n (Please include in report)";
                        srcLink2.style.display = "none";
                    }
                });
            }
            // then we display all newly stored results
            setTimeout(() => {
                setData()
            }, 450);
        }
    }
)();
