const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');

    if (navigation.classList.contains('open')) {
        menuButton.textContent = '✖';
    } else {
        menuButton.textContent = '☰';
    }
});

document.querySelector('#currentyear').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modification: ${document.lastModified}`;