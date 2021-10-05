Window.addEventListener('scroll', function() {
    const header = Document.querySelector('header');
    header.classList.toggle("sticky", Window.scrollY > 0)
});