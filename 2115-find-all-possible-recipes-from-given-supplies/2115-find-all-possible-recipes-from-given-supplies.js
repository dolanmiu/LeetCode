/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
let suppliesSet;
let blacklistSuppliesSet;
let recipesSet;
let ingredientsMap;
var findAllRecipes = function(recipes, ingredients, supplies) {
    suppliesSet = new Set(supplies);
    recipesSet = new Set(recipes);
    ingredientsMap = new Map(recipes.map((r, i) => [r, ingredients[i]]));
    blacklistSuppliesSet = new Set();
    
    let output = [];
    
    for (let i = 0; i < recipes.length; i++) {
        const canMake = dfs(recipes[i], ingredients[i], new Set());
        
        if (canMake) {
            output.push(recipes[i]);
        }
    }
    
    return output;
};

function dfs(recipe, ingredients, visited) {
    if (blacklistSuppliesSet.has(recipe)) {
        // return false;
    }
    
    if (visited.has(recipe)) {
        return false;
    }
    
    if (!ingredients) {
        blacklistSuppliesSet.add(recipe);
        return false;
    }
    
    for (let i = 0; i < ingredients.length; i++) {
        if (suppliesSet.has(ingredients[i])) {
            continue;
        } else {
            const res = dfs(ingredients[i], ingredientsMap.get(ingredients[i]), new Set([...visited, recipe]));
            if (!res) {
                return false;
            }
        }
    }
    
    suppliesSet.add(recipe);
    
    return true;
    
}