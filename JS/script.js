let navBtn = document.querySelector('.nav-btn');
let closeBtn = document.querySelector('.close-nav-btn');
let mobileLinks = document.querySelector('.mobile-navLinks');

navBtn.addEventListener('click', function(){
    mobileLinks.classList.add('show-links')
    navBtn.style.display = 'none';
    closeBtn.style.display = 'initial';
})
closeBtn.addEventListener('click', function(){
    mobileLinks.classList.remove('show-links')
    navBtn.style.display = 'initial';
    closeBtn.style.display = 'none';
})
