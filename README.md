# Toeta V.4.6.2 Alpha
For all the chefs new and old who are finding it hard to decide what to eat for dinner today, Toeta is the solution for you. Giving you daily recipes that you can cook!

## Get a recipe, Now!
https://toeta.herokuapp.com/
![snapshot](./public/snapshot.png)

## Index:
1. [Checklist](#checklist)
    1. [MVP Todo:](#mvp-todo)
    2. [Potential Features:](#potential-features)
    3. [Previous Updates:](#previous-updates)
2. [Info](#info)
    1. [Environment Setup:](#environment-setup)
3. [Conclusion](#conclusion)

___
## Checklist

### MVP TODO:
- Setup 
    - [x] Name it
    - [x] complete readme
- Creating firm ideas
    - [x] Complete Research on recipes APIs
    - [x] Create 5-7 Wire-frame for website design
    - [x] make it live
    - [x] ~~**IF NO API** create a database filled with recipes using SQL~~ 
- Most valuable parts
    - [x] Collect and return a recipe from the API/DB
    - [x] Make the returned recipe random per day.
    - [x] create a way to see upcoming recipes for tests
    - [] Let users Favorite recipes, these meals should show up again in the near future. otherwise should keep random recipes
    - [] Let users Delete recipes, these meals should never show up again in the future.
    - [] Let users Save for later, the recipe should update to be tomorrows meal if the user wants to go out to eat today instead. Other meals should be pushed to the next days as well, and we can remove the last meal off the query.
    - [√] Design the heck out of it with pretty colors and such *In the Works*
    - [x] **Stretch** Let users see all their planned recipes for that week so that they can shop beforehand, while also highlighting the day they are on.
    - [] **Stretch** Deleted recipes can be re-added to the queue 
    - [] **Stretch** Favored recipes should be seen in a list
    - [] **Stretch** Add a skip button to skip a meal.
### Potential Features:
- Filtered results
    - [] create a survey for new users to see
    - [] render results based on diets (Vegetarian, Vegan, Halal, etc.)
    - [] render results based on allergies (Soy, Shellfish, Nuts, etc.)
    - [] render results based on Calorie intake (I'm on a 2,000 Calorie diet)
    - [] **Stretch** create nutrition plan for consumers to only eat meals that matches or hardly damages this plan. (this can be overruled) https://docs.google.com/presentation/d/1B-ndEUghpgaYZpdyKxJW3hag4hCzp99vHSih75eqzzw/edit#slide=id.g25a3edb0c6_0_111 
- Personalization
    - [√] Login and Authentication *needs work*
    - [] Save info to profiles, rather than browser, so that information isn't cleared with cache.
    - [] Let users create their own meals that they can share with the world! Grandma's home made cookies here we come.
    - [] **Stretch** Let premium users decorate their website. drag and drop with stickers, and template backgrounds

### Previous Updates:
{Last Update: 10/16/21}
- 4.6.2
    - Too much! I never kept track of everything that was done before. But we can start with what I do remember (from newest to oldest)
    - made it a bit more pretty
    - Profile page skeleton completed with allergin survey
    - weekly meals generated
    - basic password and email verification
    - time tracking enabled so that you ony get one recipe a day
    - skeleton for the site was made using api spoonacular for  generating  single recipes
    - logo was created

___
## Info

### Environment Setup
- No environment quite yet

___
## Conclusion
If you have an idea or want to recommend a feature, please do so in feature_requests.md 
Thanks for checking this out. Feel free to leave feedback, and share!