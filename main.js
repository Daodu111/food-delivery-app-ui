const navItems = document.querySelector('.nav__items');
const navOpenBtn = document.querySelector('#open__btn');
const navCloseBtn = document.querySelector('#close__btn');



const openNav = () => {
    navItems.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNav = ()=> {
    navItems.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);
