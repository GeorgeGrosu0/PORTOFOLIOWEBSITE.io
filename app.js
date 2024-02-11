const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});// Adaugă acest cod JavaScript în fișierul tău JS sau în fișierul HTML, după încărcarea DOM-ului

document.addEventListener('DOMContentLoaded', function() {
    var serviceItems = document.querySelectorAll('.service-item');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkItems() {
        serviceItems.forEach(function(item) {
            if (isElementInViewport(item)) {
                item.classList.add('in-view');
            }
        });
    }

    // Verifică la încărcarea paginii și la fiecare redimensionare a ferestrei
    window.addEventListener('load', checkItems);
    window.addEventListener('resize', checkItems);
    window.addEventListener('scroll', checkItems);
});


menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});