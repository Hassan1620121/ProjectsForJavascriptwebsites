let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let rigthNavigation = document.querySelector('.rightNav');
let navList = document.querySelector('.nav-list');

burger.addEventListener('click', ()=>{

    navList.classList.toggle('v-class-resp');
    
    rigthNavigation.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');



})