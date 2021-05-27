const bolianNull = Boolean(null)

class UI {
    constructor() {
       this.grid = document.querySelector('.grid')
    }

    showAlert(className, message) {
        const error = document.querySelector('.error')


        error.classList.add(className)
        

        error.style.visibility = 'visible'
        error.style.opacity = '1'
        error.textContent = message

        setTimeout(() => {
            
            error.style.visibility = 'hidden'
            error.classList.add(className)
            error.style.opacity = '0'

        }, 2000)
    }

    showMeals(res) {
       
        if (res === null) {
            this.showAlert('danger', 'Cannot find recipe')
            
        } else {



            document.querySelector('#search').value = ''
            const { grid } = this



            let html = '<h3 class="grid-expand mt-4 mx-auto text-light h3">Your search result</h3>'


            res.forEach(data => {
                
                html += `
                <div class="card rounded-0 " style="width: 100%; ">
                <h5 class="card-title px-1 text-center pos-absolute">${data.strMeal}</h5>
                    <img class="card-img-top" src="${data.strMealThumb}" alt="Card image cap">
                    <div class="card-body p-0">
                        <button type="button" class="btn bg-secondary rounded-0 d-block p-1 w-100" data-id="${data.idMeal}">Recipe</button>
                    </div>
                </div>
                   
                `
                
            })

            grid.innerHTML = html

        }
        

        
        

    }


      getModal(data) {
        const modal = document.querySelector('.modal-content')

        const meal = data[0]


        

        const youtubeLink = meal.strYoutube.split('=').pop()



        // Loop ingredients

        const ingredients = []

        for (let i = 1; i < 20; i++) {
            if (meal[`strIngredient${i}`] !== '') {
                
                ingredients.push(meal[`strIngredient${i}`])
            }
        } 

        let html = 
            `
            
                    <div class="modal-header modal-new bg-dark text-light p-2 border-0">
                        <h5 class="modal-title" id="exampleModalLabel">Recipe </h5>
                        <div type="button" class="text-white border-0 p-2" data-bs-dismiss="modal" aria-label="Close">X</div>
                    </div>
                    <div class="modal-body">
                        
                        <div class="container text-center">

                            <div class="row">
                                <div class="col-lg-4 text-center">
                                    <h4 class="my-3">${meal.strMeal}</h4>
                                    <div>
                                        <img src="${meal.strMealThumb}" width="100%">
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <h4 class="my-3">Instruction</h4>
                                    <div>
                                        <p class="small">${meal.strInstructions}</p>
                                    </div>
                                </div>
                            <div>
                            <div class="row">
                            
                                    <div class="col-lg-4 text-center">
                                        <h4 class="mt-2 mb-4">Video<h4>
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${youtubeLink}" frameborder="0" allowfullscreen></iframe>
                                    
                                    </div>
                                    
                                    <div class="col-lg-8">
                                    <h4 class="mt-2 mb-4">Ingredients<h4>

                                     <div class="d-flex flex-wrap my-4">

                                            ${ingredients.map(ingredient => `<li class="list-group-item w-50 bg-light bg-secondary fs-16">${ingredient}</li>`).join('')}
                                            
                                       
                                    
                                       
                                    </div>
                                    
                                    </div>
                                   
                            
                            
                            </div>
                            
                            

                        
                        </div>

                    </div>
                   
        `

        modal.innerHTML = html
        

    }
}

