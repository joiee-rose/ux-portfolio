document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.querySelector('.vertical-carousel-viewport');
    const navItem1 = document.querySelector('.nav-edu');
    const navItem2 = document.querySelector('.nav-work');
    const indicator = document.querySelector('.location-indicator');
    
    //activate nav buttons
    const activateNav = (activeNav, inactiveNav) => {
        activeNav.classList.add('active');
        inactiveNav.classList.remove('active');
    };

    //update indicator position
    const updateIndicatorPosition = (navItem) => {
        if (navItem.classList.contains('nav-edu')) {
            indicator.style.top = '8px'
        } else if (navItem.classList.contains('nav-work')) {
            indicator.style.top = '89px';
        }
    };

    navItem1.addEventListener('click', () => {
        viewport.style.transform = 'translateY(0)';
        activateNav(navItem1, navItem2);
        updateIndicatorPosition(navItem1);
    });

    navItem2.addEventListener('click', () => {
        viewport.style.transform = 'translateY(-100%)';
        activateNav(navItem2, navItem1);
        updateIndicatorPosition(navItem2);
    });

    //initialize
    activateNav(navItem1, navItem2);
    updateIndicatorPosition(navItem1);
});