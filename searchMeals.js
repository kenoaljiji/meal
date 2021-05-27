class Meals {
    constructor(meal) {
        this.meal = meal;
    }




    async getMeals(val) {

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
        
        const resData = await res.json()



        return resData

    }

    async getMealRecipe(id) {
        
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        
        
        const resData = await res.json()

        return resData


    }
    
}


