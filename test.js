// https://api.spoonacular.com/recipes/search?apiKey=${key}&type=main%20course&diet=Vegan&intolerances=Tree%20Nut&excludeIngredients=Alcohol&number=1
// unto no fault of my own, this doesn't work. In live code states that what I'm asking for doesn't exist despite it existing.
// and results do not show up correctly, claiming title doesn't exist
res = {"results":[{"id":716627,"title":"Easy Homemade Rice and Beans","readyInMinutes":35,"servings":2,"sourceUrl":"http://cooking2perfection.blogspot.com/2012/11/easy-homemade-rice-and-beans.html","openLicense":2,"image":"easy-homemade-rice-and-beans-716627.jpg"}],"baseUri":"https://spoonacular.com/recipeImages/","offset":0,"number":1,"totalResults":42,"processingTimeMs":128,"expires":1635347830055,"isStale":false}

id = `${res.results[0].title}`

console.log(id, 654663)
