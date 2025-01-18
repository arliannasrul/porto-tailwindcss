//navbar fix
window.onscroll = function() {
    const header =document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

document.getElementById('hubungi').addEventListener('click', function () {
    alert('Maaf saat ini pemilik belum bisa dihubungi hehe');
});

//hamburger

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    const educationLink = document.querySelector('#education2'); // Pastikan ID ini benar

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');

        updateEducationLink(); // Panggil fungsi untuk memperbarui href
    });

    window.addEventListener('resize', updateEducationLink); // Panggil saat resize

    function updateEducationLink() {
        const isMobile = window.innerWidth < 768; // Sesuaikan breakpoint ini

        if (!navMenu.classList.contains('hidden')) { // Cek menu terbuka
            if (isMobile) {
                educationLink.setAttribute('href', '#educationMobile');
            } else {
                educationLink.setAttribute('href', '#education');
            }
        } else if (!isMobile) {
            educationLink.setAttribute('href', '#education'); //desktop view
        }
    }
});