console.log("JavaScript loaded!");
// Gallery Container
const gallery = document.querySelector('.gallery');
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Delta Nigeria",
        location: "Delta, Nigeria",
        dedicated: "2025, January, 1",
        area: 35000,
        imageUrl: "https://via.placeholder.com/400x250"
    },

    {
        templeName: "Abuja Nigeria",
        location: "Abuja, Nigeria",
        dedicated: "2024, December, 14",
        area: 30000,
        imageUrl: "https://via.placeholder.com/400x250"
    }
];
// Display Temples Function

function displayTemples(filteredTemples) {

    
gallery.innerHTML = '';

filteredTemples.forEach(temple => {

    const card = document.createElement('section');
    card.classList.add('card');

    card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

        <img
    src="${temple.imageUrl}"
    alt="${temple.templeName}"
    loading="lazy">
    `;

    gallery.appendChild(card);
});


}





// Display all temples on page load
displayTemples(temples);

// Navigation Filters
const pageTitle = document.querySelector('#page-title');

document.querySelector('#home').addEventListener('click', () => {
pageTitle.textContent = 'Home';
displayTemples(temples);
});

document.querySelector('#old').addEventListener('click', () => {
pageTitle.textContent = 'Old Temples';


const oldTemples = temples.filter(
    temple => new Date(temple.dedicated).getFullYear() < 1900
);

displayTemples(oldTemples);


});

document.querySelector('#new').addEventListener('click', () => {
pageTitle.textContent = 'New Temples';


const newTemples = temples.filter(
    temple => new Date(temple.dedicated).getFullYear() > 2000
);

displayTemples(newTemples);


});

document.querySelector('#large').addEventListener('click', () => {
pageTitle.textContent = 'Large Temples';


const largeTemples = temples.filter(
    temple => temple.area > 90000
);

displayTemples(largeTemples);


});

document.querySelector('#small').addEventListener('click', () => {
pageTitle.textContent = 'Small Temples';


const smallTemples = temples.filter(
    temple => temple.area < 10000
);

displayTemples(smallTemples);


});
