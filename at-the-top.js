window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY <= 100;
    header.classList.toggle('scrolling-deactivated', windowPosition);
})