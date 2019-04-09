// Your code goes here
//mouseover
// keydown
//wheel
//drag / drop
//load
//focus
//resize
//scroll
//select
//dblclick

const funBusImg = document.querySelector(".home .intro img");
funBusImg.addEventListener('mouseover', (e) => {
    e.target.style.borderWidth = '2px';
    e.target.style.borderStyle = 'solid';
    e.target.style.borderColor = '#333333';
})
console.warn(funBusImg);

const navigation = document.querySelectorAll(".main-navigation .nav .nav-link");
navigation.forEach(nav => {
    nav.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = '#F39C12';
    })
})



const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener('wheel', (e) => {
        e.target.style.fontSize = '35px';
        e.target.style.backgroundColor = '#FF5E33';
    })

})

//const welcome = document.querySelector(".intro .h2");
//welcome.addEventListener('mousemove', (e) => {
   // e.target.style.backgroundColor = '#F39C12';
//})
//console.warn(welcome); 