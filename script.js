// cuando haces click en en la clase .hamburguer, a la etiqueta .nav le agrego y le quieto la clase .active haciendo un toggle 

'use strict'

document.querySelector('.mobile-menu').addEventListener('click', function() {
    setTimeout(function() {
        document.querySelector('.nav').classList.toggle('active');
    }, 100); // 300ms delay for a slow effect
});

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

// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".link");
    const nav = document.querySelector(".nav");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default link behavior (scrolling)
  
        // Get the target section's ID from the link's href attribute
        const targetSectionId = link.getAttribute("href");
  
        // Scroll to the target section smoothly
        document.querySelector(targetSectionId).scrollIntoView({
          behavior: "smooth",
        });
  
        // Close the navigation menu (remove the "active" class)
        nav.classList.remove("active");
      });
    });
});
  