// list o' words

words = [
    'acorn squash', 'ahi tuna', 'albacore tuna', 'alfalfa',
    'almond', 'apple juice', 'apples',
    'applesauce', 'aroma', 'artichoke', 'arugala',
    'asian noodles', 'asparagus', 'avacado', 'avocado roll', 'bacon', 'bagel',
    'baked beans', 'barley', 'batter', 'bbq',
    'beans', 'beer', 'biscuit',
    'bison', 'bisque', 'black beans', 'bluefish',
    'bread', 'broccoli', 'broth', 'bruscetta',
    'burger', 'buritto', 'butter', 'cabbage',
    'cake', 'candy', 'caramel', 'carne asada',
    'carrots', 'catfish', 'caviar', 'celery',
    'cereal', 'cheese', 'cheese', 'chicken',
    'chili', 'chimichanga', 'chips',
    'chocolate', 'chowder', 'cider', 'clams',
    'cobbler', 'cocoa', 'coconut', 'coffee',
    'cookies', 'corn',
    'crab', 'cream', 'croissant', 'crumble',
    'cuisine', 'cupcakes', 'curd', 'curry',
    'dates', 'dessert', 'dips', 'dish',
    'donuts', 'drink', 'duck', 'dumplings',
    'edimame', 'eel sushi', 'eggrolls', 'eggs',
    'enchilada', 'english muffins', 'entree', 'fajita',
    'falafel', 'filet', 'fish', 'flour',
    'foie gras', 'fondu', 'food', 'franks',
    'french dip', 'french toast', 'garlic', 'ginger',
    'glaze', 'goose', 'graham crackers',
    'granola', 'grapes', 'green beans', 'grill', 'grits', 'guancamole', 'gumbo',
    'haiku roll', 'halibut', 'ham', 'hamburger',
    'hash browns', 'honey', 'hot dogs', 'huenos rancheros',
    'hummus', 'ice', 'ice cream', 'indian food',
    'irish stew', 'italian bread', 'jalapeño', 'jam',
    'jambalaya', 'jelly', 'jerky', 'juice',
    'kabobs', 'kale', 'ketchup', 'ketchup',
    'kidney beans', 'kingfish', 'kitchen', 'kiwi',
    'lamb', 'lard', 'lasagna', 'linguine',
    'liquor', 'lobster', 'margarine', 'marinade',
    'mayo', 'mayonnaise', 'meat', 'meatballs',
    'milk', 'milk', 'milkshake', 'moose',
    'mousse', 'muffin', 'mushroom', 'noodle',
    'nut', 'oil', 'olive', 'omelette',
    'ostrich', 'pan', 'pancakes', 'pasta',
    'paste', 'pastry', 'pepperoni', 'pie',
    'pizza', 'pizza', 'plate', 'porter', 'poutine', 'pudding', 'quail',
    'quesadilla', 'quiche', 'raclette', 'recipe',
    'reuben', 'rice', 'salad', 'salsa',
    'sandwich', 'sauce', 'seasoning', 'skillet',
    'soda', 'soup', 'soy', 'spaghetti',
    'spice', 'spinach', 'steak', 'stew',
    'swordfish', 'syrup', 'tartar', 'taste',
    'tater tots', 'tea', 'toast', 'ube', 'udo', 'udon Noodles',
    'ugali', 'ugli fruit', 'uglies Biscuits',
    'ukrainian Rolls', 'umbrella fruit', 'umeboshi plums',
    'undio', 'unleavened bread', 'unsweetened chocolates',
    'upma', 'urchins', 'uunagi',
    'venison', 'vinegar', 'waffle',
    'walnuts', 'water', 'wheat',
    'wine', 'wok', 'x-cat-ik chillies',
    'xO sauce', 'xacuti', 'xacuti masala',
    'xalwa a somali', 'xanthareel', 'xerem de Fiesta', 'xi gua',
    'xia Mi', 'xian hamburger', 'xiang Cai',
    'xiangcaojing', 'xiangchang', 'xiangjiao',
    'xinag jun', 'xinomavro Grapes', 'xom tum',
    'xouba', 'xouba', 'xtreme hot sauce',
    'yeast', 'yogurt', 'ziti',
    'zucchini'
]

food = []
// was 7, changed to 3 for meal selection
for (let i = 0; i < 3; i++) {
    food.push(encodeURIComponent(words[Math.floor(Math.random() * words.length)]));
}

console.log(food)
// words.sort()
// console.log(words)
