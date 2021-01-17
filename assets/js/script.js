$(window).on("scroll", function() {
        if ($(window).scrollTop()) {
            $('header').addClass('black')
        } else {
            $('header').removeClass('black')
        }

    })
    /*===== TYPING AREA ===== */
$(document).ready(function() {
    var typed = new Typed(".typing", {
        strings: ["Prazer em Servir!", "Soluções Inovadoras", "Para a sua <font color='#0698e4'>Empresa</font>"],
        typeSpeed: 70,
        backSpeed: 35,
        loop: true
    });
});
/*-----------------------------------------------------------------------------------------------------------------------------*/
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.banner-img', {});
sr.reveal('.h1-class', { delay: 200 });
sr.reveal('.home__title2', { delay: 400 });
sr.reveal('.banner-div', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about-left', {});
sr.reveal('.about-right', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SERVICES*/
sr.reveal('.card', {});
sr.reveal('', {});
sr.reveal('.btn2', { interval: 200 });
sr.reveal('', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });
//====================================================================
//==== SHOW SOLICITAR SERVIÇO ===
$("#abrir").click(function() {
    $(".container").toggle().css("display", "flex");
});
$("#btn-3").click(function() {
    $(".container").toggle().css("display", "none");
});