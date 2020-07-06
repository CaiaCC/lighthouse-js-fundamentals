
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    // Create map
    for (let c = 0; c < recipes.length; c++) {
        let recipe = recipes[c];
        const ingredients = recipe.ingredients;

        let hasA = ingredientCheck(bakeryA, ingredients[0]);
        let hasB = ingredientCheck(bakeryB, ingredients[1]);

        if (hasA && hasB) {
            return recipe.name;
        }

        hasA = ingredientCheck(bakeryA, ingredients[1]);
        hasB = ingredientCheck(bakeryB, ingredients[0]);

        if (hasA && hasB) {
            return recipe.name;
        }
    };
}

// O(n)
// let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];


function test() {
    let map = new Map();
    // O(1)

    map.set('tomato paste', true);
    console.log("Value for key: " + map.get('tomato paste'));
};


// O(R * 2)

// Function will check inside bakery, and see if it has ingredient
function ingredientCheck(bakery, ingredient) {
    for (let i = 0; i < bakery.length; i++) {
        if (ingredient === bakery[i]) {
            return true;
        } 
    }
    return false;
};

// O(R * 2(A + B))

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryA = new Map();
bakeryA.set('saffron', true)
bakeryA.set('eggs', true)
bakeryA.set('tomato paste', true)
bakeryA.set('coconut', true)
bakeryA.set('custard', true)


let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Caias poop cake',
        ingredients: ['eggs', 'butter']
    },
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['cream cheese', 'saffron']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));
test();