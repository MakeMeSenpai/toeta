// const name = document.getElementById("name");
const email = document.getElementById("email");


/* Diet Descriptions */
const dietInput = document.getElementById("diet-input");
const dietOutput = document.getElementById("diet-output");
dietInput.addEventListener("input", function () {
    if (dietInput.value === "Gluten Free") {
        window.localStorage.setItem("senpai-diet", "&diet=Gluten%20Free")
        dietOutput.innerHTML = "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)."
    } else if (dietInput.value === "Ketogenic") {
        window.localStorage.setItem("senpai-diet", "&diet=Ketogenic")
        dietOutput.innerHTML = "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates."
    } else if (dietInput.value === "Vegetarian") {
        window.localStorage.setItem("senpai-diet", "&diet=Vegetarian")
        dietOutput.innerHTML = "No ingredients may contain meat or meat by-products, such as bones or gelatin."
    } else if (dietInput.value === "Lacto-Vegetarian") {
        window.localStorage.setItem("senpai-diet", "&diet=Lacto-Vegetarian")
        dietOutput.innerHTML = "All ingredients must be vegetarian and none of the ingredients can be or contain egg."
    } else if (dietInput.value === "Ovo-Vegetarian") {
        window.localStorage.setItem("senpai-diet", "&diet=Ovo-Vegetarian")
        dietOutput.innerHTML = "All ingredients must be vegetarian and none of the ingredients can be or contain dairy."
    } else if (dietInput.value === "Vegan") {
        window.localStorage.setItem("senpai-diet", "&diet=Vegan")
        dietOutput.innerHTML = "No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey."
    } else if (dietInput.value === "Pescetarian") {
        window.localStorage.setItem("senpai-diet", "&diet=pescetarian")
        dietOutput.innerHTML = "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not."
    } else if (dietInput.value === "Paleo") {
        window.localStorage.setItem("senpai-diet", "&diet=Paleo")
        dietOutput.innerHTML = "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods."
    } else if (dietInput.value === "Primal") {
        window.localStorage.setItem("senpai-diet", "&diet=Primal")
        dietOutput.innerHTML = "Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc."
    } else if (dietInput.value === "Low FODMAP") {
        window.localStorage.setItem("senpai-diet", "&diet=Low%20FODMAP")
        dietOutput.innerHTML = "FODMAP stands for 'fermentable oligo-, di-, mono-saccharides and polyols'. Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products)"
    } else if (dietInput.value === "Whole30") {
        window.localStorage.setItem("senpai-diet", "&diet=whole30")
        dietOutput.innerHTML = "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites."
    } else {
        window.localStorage.setItem("senpai-diet", "")
        dietOutput.innerHTML = null;
    }
})

/* Allergy List */
const allergyList = ["Alcohol", "Celery", "Dairy", "Egg", "Gluten", "Grain", "Mustard", "Peanut",
    "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tomatoes", "Tree Nut", "Wheat"
];
//__________________________________________________________________
[].forEach.call(document.getElementsByClassName('tags-input'), function (el) {
    let hiddenInput = document.createElement('input'),
        mainInput = document.createElement('input'),
        tags = [];

    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', el.getAttribute('data-name'));

    mainInput.setAttribute('type', 'text');
    mainInput.classList.add('main-input');
    mainInput.addEventListener('input', function () {
        autocomplete(mainInput, allergyList);
        let enteredTags = mainInput.value.split(',');
        if (enteredTags.length > 1) {
            enteredTags.forEach(function (t) {
                let filteredTag = filterTag(t);
                if (filteredTag.length > 0)
                    addTag(filteredTag);
            });
            mainInput.value = '';
        }
    });

    mainInput.addEventListener('keydown', function (e) {
        let keyCode = e.which || e.keyCode;
        if (keyCode === 8 && mainInput.value.length === 0 && tags.length > 0) {
            removeTag(tags.length - 1);
        }
    });

    el.appendChild(mainInput);
    el.appendChild(hiddenInput);

    // addTag('Dairy');
    // addTag('Soy');
    // addTag('Peanut');

    function addTag(text) {
        let tag = {
            text: text,
            element: document.createElement('span'),
        };

        tag.element.classList.add('tag');
        tag.element.textContent = tag.text;

        let closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.addEventListener('click', function () {
            removeTag(tags.indexOf(tag));
        });
        tag.element.appendChild(closeBtn);

        tags.push(tag);

        el.insertBefore(tag.element, mainInput);

        refreshTags();
    }

    function removeTag(index) {
        let tag = tags[index];
        tags.splice(index, 1);
        el.removeChild(tag.element);
        refreshTags();
    }

    function refreshTags() {
        let tagsList = [];
        tags.forEach(function (t) {
            tagsList.push(t.text);
        });
        hiddenInput.value = tagsList.join(',');
    }

    function filterTag(tag) {
        // already existing tags
        let tagValues = tags.map(({
            text
        }) => text);
        // if already exist, don't include
        if (tagValues.includes(tag)) {
            return ""
            // if in list include
        } else if (allergyList.includes(tag)) {
            window.localStorage.setItem("senpai-intolerance", `${tagValues},${tag}`);
            return tag;
            // not in list, exclude
        } else {
            return ""
        }
    }

    /* Autocomplete */
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    function autocomplete(inp, arr) {
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function (e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) {
                return false;
            }
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function (e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        // /* adds filtered tag in tag component */
                        let filteredTag = filterTag(inp.value);
                        if (filteredTag.length > 0) {
                            addTag(filteredTag);
                        }
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists();
                        /* clears mainInput */
                        mainInput.value = '';
                    });
                    a.appendChild(b);
                }
            }
        });

        function closeAllLists(elmnt) {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
    }
});
