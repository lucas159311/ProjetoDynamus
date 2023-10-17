document.getElementById('lista-topicos').addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        var targetId = event.target.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
});