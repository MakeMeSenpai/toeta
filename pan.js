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
        divOut3 = document.getElementById("output3");
        srcLink3 = document.getElementById("source-link3");
        divOut4 = document.getElementById("output4");
        srcLink4 = document.getElementById("source-link4");
        divOut5 = document.getElementById("output5");
        srcLink5 = document.getElementById("source-link5");
        divOut6 = document.getElementById("output6");
        srcLink6 = document.getElementById("source-link6");

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
            divOut3.innerHTML = window.localStorage.getItem(`senpai-output3`);
            srcLink3.innerHTML = "Start Cookin!";
            srcLink3.href = window.localStorage.getItem(`senpai-link3`);
            divOut4.innerHTML = window.localStorage.getItem(`senpai-output4`);
            srcLink4.innerHTML = "Start Cookin!";
            srcLink4.href = window.localStorage.getItem(`senpai-link4`);
            divOut5.innerHTML = window.localStorage.getItem(`senpai-output5`);
            srcLink5.innerHTML = "Start Cookin!";
            srcLink5.href = window.localStorage.getItem(`senpai-link5`);
            divOut6.innerHTML = window.localStorage.getItem(`senpai-output6`);
            srcLink6.innerHTML = "Start Cookin!";
            srcLink6.href = window.localStorage.getItem(`senpai-link6`);
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

            for (i = 0; i < 7; i++) {
                /* getSource */
                function getSource(id) {
                    $.ajax({
                        url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`,
                        success: (res) => {
                            window.localStorage.setItem(`senpai-link${i}`, res.sourceUrl)
                        }
                    });
                    if (typeof window.localStorage.getItem(`senpai-link${i}`) == 'null') {
                        console.log("Throw error")
                        throw error
                    }
                    console.log("Storage Results:", window.localStorage.getItem(`senpai-output${i}`), window.localStorage.getItem(`senpai-link${i}`));
                }

                // TODO: ADD CONCATENATE STRING TO END OF SEARCH.
                // WILL INCLUDE  DIET, ALLERGIES, based on profile settings
                // will most likely be a pointer  function or pulled  from
                // profile.js
                let concatenate = "type=mainCourse";

                /* getRec */
                $.ajax({
                    // TRYING: to get ride of words.js url: `https://api.spoonacular.com/recipes/search?apiKey=${key}&number=1&query=${food[i]}`,
                    url: `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=1&${concatenate}`,
                    success: (res) => {
                        getSource(res.results[0].id);
                        let image = `${res.baseUri}${res.results[0].image}`;
                        // TRYING: to replace images if there is none
                        if (!res.results[0].image) {
                            image = "./public/noimage.png";
                        }
                        window.localStorage.setItem(`senpai-output${i}`, `<h3>${res.results[0].title}</h3> <br> <img class="img-size" src='${image}'> <br><p> Ready in ${res.results[0].readyInMinutes} min.</p>`);
                    },
                    error: function (res, textStatus) {
                        divOut0.style.display = "none";
                        srcLink0.style.display = "none";
                        divOut1.style.display = "none";
                        srcLink1.style.display = "none";
                        divOut2.innerHTML = "Status: " + textStatus + "\n (Please include in report)";
                        srcLink2.style.display = "none";
                        divOut3.innerHTML = "Oh no! Something went wrong! Refresh the page or try again tomorrow. If this problem continues feel free to report at AnthonySeanProtho@gmail.com with subject line 'Toeta Support'";
                        srcLink3.style.display = "none";
                        divOut4.innerHTML = "Error: " + res.status + "\n (Please include in report)";
                        srcLink4.style.display = "none";
                        divOut5.style.display = "none";
                        srcLink5.style.display = "none";
                        divOut6.style.display = "none";
                        srcLink6.style.display = "none";
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

// Day selection
const one = document.getElementById("c0");
const two = document.getElementById("c1");
const three = document.getElementById("c2");
const four = document.getElementById("c3");
const five = document.getElementById("c4");
const six = document.getElementById("c5");
const seven = document.getElementById("c6");

function c0Click() {
    one.style.zIndex = "7";
    two.style.zIndex = "6";
    three.style.zIndex = "5";
    four.style.zIndex = "4";
    five.style.zIndex = "3";
    six.style.zIndex = "2";
    seven.style.zIndex = "1";
};

function c1Click() {
    one.style.zIndex = "1";
    two.style.zIndex = "7";
    three.style.zIndex = "6";
    four.style.zIndex = "5";
    five.style.zIndex = "4";
    six.style.zIndex = "3";
    seven.style.zIndex = "2";
};

function c2Click() {
    one.style.zIndex = "1";
    two.style.zIndex = "2";
    three.style.zIndex = "7";
    four.style.zIndex = "6";
    five.style.zIndex = "5";
    six.style.zIndex = "4";
    seven.style.zIndex = "3";
};

function c3Click() {
    one.style.zIndex = "1";
    two.style.zIndex = "2";
    three.style.zIndex = "3";
    four.style.zIndex = "7";
    five.style.zIndex = "6";
    six.style.zIndex = "5";
    seven.style.zIndex = "4";
};

function c4Click() {
    one.style.zIndex = "1";
    two.style.zIndex = "2";
    three.style.zIndex = "3";
    four.style.zIndex = "4";
    five.style.zIndex = "7";
    six.style.zIndex = "6";
    seven.style.zIndex = "5";
};

function c5Click() {
    one.style.zIndex = "1";
    two.style.zIndex = "2";
    three.style.zIndex = "3";
    four.style.zIndex = "4";
    five.style.zIndex = "5";
    six.style.zIndex = "7";
    seven.style.zIndex = "6";
};

function c6Click() {
    one.style.zIndex = "1";
    two.style.zIndex = "2";
    three.style.zIndex = "3";
    four.style.zIndex = "4";
    five.style.zIndex = "5";
    six.style.zIndex = "6";
    seven.style.zIndex = "7";
};