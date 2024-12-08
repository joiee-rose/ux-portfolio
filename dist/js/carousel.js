document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.querySelector('.carousel-viewport');
    const navItem1 = document.querySelector('.nav-item1');
    const navItem2 = document.querySelector('.nav-item2');
    
    const activateNav = (activeNav, inactiveNav) => {
        activeNav.classList.add('active');
        inactiveNav.classList.remove('active');
    };

    navItem1.addEventListener('click', () => {
        viewport.style.transform = 'translateX(0)';
        activateNav(navItem1, navItem2);
    });

    navItem2.addEventListener('click', () => {
        viewport.style.transform = 'translateX(-100%)'; /* Shift to the second item */
        activateNav(navItem2, navItem1);
    });

    // Initialize the first nav button as active
    activateNav(navItem1, navItem2);
});