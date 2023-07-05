// cuando haces click en en la clase .hamburguer, a la etiqueta .nav le agrego y le quieto la clase .active haciendo un toggle 

'use strict'

const button = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');

button.addEventListener('click', () => {
    nav.classList.toggle('active');
})

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

// cover all the points 
punto.forEach((cadaPunto, i) => {
    // we assign a click to every point  
    punto[i].addEventListener('click', () => {
        // we save the position of that point 
        let posicion = i;
        // we calculate the space in which grande must slide 
        let operacion = posicion * -37;
        // we move el grande container 
        grande.style.transform = `translateX(${operacion}%)`;
        // cover all the points
        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo');
        })

        punto[i].classList.add('activo');
    })
});

// //image change over time within a section of a page,

// let images = ['Fuentes del Molino/IMG_8741.jpeg', 'Fuentes del Molino/IMG_0041.jpeg', 'Fuentes del Molino/IMG_8745.jpeg'];
// let currentIndex = 0;
// let interval = 3000;

// function changeImages() {
//     let imgElement = document.getElementById('changing-image');
//     imgElement.src = images[currentIndex];
//     currentIndex = (currentIndex + 1) % images.length;
// }

// setInterval(changeImages, interval);