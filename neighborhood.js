const recomend = document.querySelector('#recomend')
let restArr = ['Rancharitos', 'Cafe Rio', "Lee's Mongolian BBQ"]
function recRest(evt){
    const random = restArr[Math.floor(Math.random() * restArr.length)];
    alert(`You should try ${random}!`)
    evt.target.textContent = `Do you want to try ${random} or randomize again?`
    console.log(evt.target.textContent)
    
    
}









recomend.addEventListener('click', recRest)