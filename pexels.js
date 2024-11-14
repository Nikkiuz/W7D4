const link = 'https://api.pexels.com/v1/search?query=lazio'
const link2 = 'https://api.pexels.com/v1/search?query=dogs'

const load = document.getElementById('loadBtn')
const load2 = document.getElementById('loadBtn2')

load.addEventListener('click', function() {
    fetch(link, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'xxxxxxx'
        }
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Errore server")        
        }
    })
    .then((data) => {
        const imgArr = document.querySelectorAll('img')
        console.log('Immagini:', data)
        for (let i = 0; i < imgArr.length; i++) {
            imgArr[i].setAttribute('src', data.photos[i].src.medium)
        }
        const idReplace = document.querySelectorAll('.text-muted')
        for (let i = 0; i < idReplace.length; i++) {
            idReplace[i].innerText = data.photos[i].id 
        }   
    })
    .catch((error) => {
        console.log('Errore', error)
    })
})

load2.addEventListener('click', function() {
    fetch(link2, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'xxxxxxx'
        }
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Errore server");        
        }
    })
    .then((data) => {
        const imgArr = document.querySelectorAll('img')
        console.log('Immagini:', data)
        for (let i = 0; i < imgArr.length; i++) {
            imgArr[i].setAttribute('src', data.photos[i].src.medium)
        }   
        const idReplace = document.querySelectorAll('.text-muted')
        for (let i = 0; i < idReplace.length; i++) {
            idReplace[i].innerText = data.photos[i].id 
        }
    })
    .catch((error) => {
        console.log('Errore', error)
    })
})

let btnHide = document.querySelectorAll('.btn-group button:nth-of-type(2)')
console.log(btnHide)
for (let i = 0; i < btnHide.length; i++) {
    btnHide[i].innerText = 'Hide'
    btnHide[i].addEventListener('click', function () {
        const cards = document.querySelectorAll('.card')
        cards[i].classList.add('d-none')
    })
}

    