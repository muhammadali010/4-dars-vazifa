const black = document.querySelector('.black');
const white = document.querySelector('.white');
const content = document.querySelector('.content');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const card1= document.querySelector('.card1');
const card2= document.querySelector('.card2');
const card3= document.querySelector('.card3');
black.addEventListener('click',function () {
    container.style.backgroundColor = 'black';
    content.style.color = 'white';
    header.style.backgroundColor = "white";
})
white.addEventListener('click',function () {
    container.style.backgroundColor = 'white';
    content.style.color = 'black';
    header.style.backgroundColor = "black";
})
btn1.addEventListener('click',function () {
    card1.style.backgroundColor = 'blue';
    card2.style.backgroundColor = 'blue';
    card3.style.backgroundColor = 'blue';
})
btn2.addEventListener('click',function () {
    card1.style.backgroundColor = 'green';
    card2.style.backgroundColor = 'green';
    card3.style.backgroundColor = 'green';
})
btn3.addEventListener('click',function () {
    card1.style.backgroundColor = 'yellow';
    card2.style.backgroundColor = 'yellow';
    card3.style.backgroundColor = 'yellow';
})