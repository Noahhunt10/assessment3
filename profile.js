const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')






function intrest(form) {
    const formData = new FormData(form)
    const formObj = Object.fromEntries(formData)
    const interests = Object.keys(formObj).map((interest, index) => {
    if (index === Object.keys(form).length - 1){
        return interest 
    } else {
        return ' ' + interest 
    }
  }) 
  if (interests.length >= 1){
      alert(`Wow, you like ${interests} as well?`)

  }else {
    alert(`You don't like any of these things? :(`)
  }
   
    

   
    
}


function favs(evt) {
 if(evt.target === color){
    alert('My favorite Color is Red!')
 }else if(evt.target === place){
    alert('My favorite place is my house!')
 }else if(evt.target === ritual){
    alert("I love sleeping! It's the only ritual i can think of that i do!")
 }
}





let form = document.querySelector('form')
form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    intrest(evt.target)
})

color.addEventListener('click', favs)
place.addEventListener('click', favs)
ritual.addEventListener('click', favs)