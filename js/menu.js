const burger = document.querySelector('#burger');

const mobileUlContainer = document.querySelector('.mobileUlContainer');

// const desktopUl = document.querySelector('.desktopUl');
// const desktopUla = document.querySelectorAll('.desktopUl a');

const mobileUl = document.querySelector('.mobileUl');
const mobileUla = document.querySelectorAll('.mobileUl a')



// desktopUla.forEach(a => {
//     a.addEventListener('click', () => {
//         desktopUl.querySelector('.activeTab').classList.remove('activeTab');
//         a.classList.add('activeTab')
//     })
// })

mobileUla.forEach(a => {
    a.addEventListener('click', () => {
        // mobileUl.querySelector('.activeTab').classList.remove('activeTab');
        // a.classList.add('activeTab');
        burger.classList.toggle('activeBurger');
        mobileUlContainer.classList.toggle('activeUl')
    })
})




burger.onclick = function() {
    burger.classList.toggle('activeBurger');
    mobileUlContainer.classList.toggle('activeUl');

}


// if (burger.classList.contains('activeBurger')) {
//     addEventListener('scroll', (event) => {
//         console.log(event);
//         event.preventDefault(true)
//     })
// } 