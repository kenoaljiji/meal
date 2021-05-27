

const meals = new Meals

// Ui instace

const ui = new UI

// get res 

// Get Input element

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', () => {

    

    const searchVal = document.querySelector('#search').value

    if (searchVal === '') {
        ui.showAlert('danger', 'Please enter a recepi')
    }

    else {

        

        meals.getMeals(searchVal)
            
            .then(res => {
                
                ui.showMeals(res.meals)

            }
                
        )
            .catch(err => console.log(err))
    }


})

const mealList = document.getElementById('mealList')

mealList.addEventListener('click', (e) => {
    

    if(e.target.classList.contains('btn')){
        let id = e.target.dataset.id
        meals.getMealRecipe(id).then(res => ui.getModal(res.meals)).catch(err => console.log(err))

        $('#exampleModal').modal('show');
    }
    


})

