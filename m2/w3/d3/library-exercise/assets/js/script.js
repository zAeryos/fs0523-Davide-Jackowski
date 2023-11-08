let card = document.querySelector("card");
let buyButtons = document.querySelectorAll("#buy-now")
let deleteButtons = document.querySelectorAll("#delete-movie");


fetch("https://striveschool-api.herokuapp.com/books")
.then(res => res.json())
.then(book => {
    book.forEach( {
        
    })
})



























buyButtons.forEach(buyButton => {
    buyButton.addEventListener("click", function(){
        console.log("mi compri!");
    
    })
})

deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener("click", function(e) {
        e.preventDefault();
        let card = this.closest(".card");
        if(card) {
            card.remove();
        }
    })
})
