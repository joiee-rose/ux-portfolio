document.addEventListener('DOMContentLoaded', () => {
    //Navbar Activity
    const navLinks = document.querySelectorAll('.navbar-labels a');
    const sections = document.querySelectorAll("section");
    const navbarHeight = 100;
        //change on click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                //when navbar link clicked, remove current active link
                navLinks.forEach(link => link.classList.remove('active'));
                //add new active link
                link.classList.add('active');
            });
        });
        //set active link on page load/reload
        function findActiveSection() {
            var current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - navbarHeight;
                const sectionBottom = sectionTop + section.offsetHeight;
                //if scroll position is within the section, set section as current section
                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    current = section.getAttribute("id");
                }
            });
            //set active link based on current section
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add("active");
                }
            });
        }
        window.onload = findActiveSection();
        //change on scroll
        let scrollTimeout;
        window.onscroll = () => {
            clearTimeout(scrollTimeout); //clear previous timeout
            scrollTimeout = setTimeout(findActiveSection, 100); //wait 100ms to call findActiveSection
        }
});
