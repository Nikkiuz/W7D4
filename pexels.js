const link = 'https://api.pexels.com/v1/search?query=[your-query]'
const link2 ='https://api.pexels.com/v1/search?query=[your-secondary-query]'

const load = document.getElementById('loadBtn')
const load2 = document.getElementById('loadBtn2')

load.addEventListener('click', function() {
fetch (link, {
    method: 'GET',
    headers:{
        'Content-Type':'application/json',
        'Authorization':'GXr4WbmzLhPHglXzbTG5wW7oz4aarWFTia3W1HoR82B9zKe68QVIDxmm'
    }
})
.then((response) =>{
    if (response.ok){
        return response.json()
    } else {
        throw new Error("Errore server");        
    }})
    .then ((images) => {
        console.log('immagini',images)

    })
    .catch((error) => {
        console.log('Errore', error)
    })
    
})

load2.addEventListener('click', function() {
fetch (link2, {
    method: 'GET',
    headers:{
        'Content-Type':'application/json',
        'Authorization':'GXr4WbmzLhPHglXzbTG5wW7oz4aarWFTia3W1HoR82B9zKe68QVIDxmm'
    }
})
.then((response) =>{
    if (response.ok){
        return response.json()
    } else {
        throw new Error("Errore server");        
    }})
    .then ((images) => {
        console.log('immagini',images)

    })
    .catch((error) => {
        console.log('Errore', error)
    })
    
})