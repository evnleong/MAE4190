/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




document.addEventListener("DOMContentLoaded", function () {
    const text = "4190: Fast Robots";
    const speed = 100; // Typing speed 
    const delayBeforeDeleting = 1500; // Pause before deleting 
    const deletingSpeed = 50; // Delete effect speed
    const restartDelay = 1000; // Pause before restarting 
    let i = 0;
    let target = document.getElementById("typewriter-text");

    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(deleteText, delayBeforeDeleting);
        }
    }

    function deleteText() {
        if (i > 0) {
            target.innerHTML = text.substring(0, i - 1);
            i--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            setTimeout(startTypewriter, restartDelay); // Restart after delete
        }
    }

    function startTypewriter() {
        i = 0;
        target.innerHTML = "";
        typeWriter();
    }

    startTypewriter(); // Start typewriter
});
