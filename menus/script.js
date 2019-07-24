(function() {
    document.getElementsByClassName('dropdown-button')[0].addEventListener('click', function() {
        this.parentElement.classList.toggle('collapsed');
    });
})();