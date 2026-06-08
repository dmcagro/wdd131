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
        imageUrl: "https://www.churchofjesuschrist.org/imgs/7210c09be95c4474772ae52e5f31c23c08112784/full/800%2C/0/default"
    },

    {
        templeName: "Abuja Nigeria",
        location: "Abuja, Nigeria",
        dedicated: "2024, December, 14",
        area: 30000,
        imageUrl: "https://www.google.com/imgres?q=Abuja%20temple%20Nigeria&imgurl=https%3A%2F%2Fchurchofjesuschristtemples.org%2Fassets%2Fimg%2Ftemples%2Flagos-nigeria-temple%2Flagos-nigeria-temple-58577-thumb.jpg&imgrefurl=https%3A%2F%2Fchurchofjesuschristtemples.org%2Fabuja-nigeria-temple%2F&docid=4BwM7utd4xPlvM&tbnid=p63UTjjQlYDfsM&vet=12ahUKEwji3ojtt_eUAxVxRKQEHcm9CVsQnPAOegQIFxAB..i&w=378&h=300&hcb=2&ved=2ahUKEwji3ojtt_eUAxVxRKQEHcm9CVsQnPAOegQIFxAB"

    },

    {
        templeName: "Lagos Nigeria",
        location: "Lagos, Nigeria",
        dedicated: "2025, June, 1",
        area: 42000,
        imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH42KDCSUfG9pI0Z6J8XJ9cSjL_DZkDVVU-t4y3RRQcmzVeK77-x1i3ZdF8WAxFtBKrSc_FpmZ9IhbF65lzalcX2FjKzjuLoHA6g2xXD9wyySRmSQ5IQeIGk8YhABV9owe83tSCvAodrFno=s1360-w1360-h1020-rw"
    },

    {
        templeName: "Ibadan Nigeria",
        location: "Ibadan, Oyo State, Nigeria",
        dedicated: "2024, July, 15",
        area: 38000,
        imageUrl: "https://www.google.com/imgres?q=Ibadan%20%20temple%20Nigeria&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fmormon%2Fimages%2Ff%2Fff%2FAbatemple1.jpg%2Frevision%2Flatest%3Fcb%3D20200601132535&imgrefurl=https%3A%2F%2Fchurchofjesuschrist.fandom.com%2Fwiki%2FIbadan_Nigeria_Stake&docid=ixDAVEMC97b-8M&tbnid=B8djVrR1imJbhM&vet=12ahUKEwjr7aHYt_eUAxU7fKQEHdyGO9MQnPAOegQIGRAB..i&w=1500&h=1200&hcb=2&ved=2ahUKEwjr7aHYt_eUAxU7fKQEHdyGO9MQnPAOegQIGRAB"
    },

    {
        templeName: "Port Harcourt Nigeria",
        location: "Port Harcourt, Rivers State, Nigeria",
        dedicated: "2023, March, 10",
        area: 28000,
        imageUrl: "https://www.google.com/imgres?q=portharcout%20temple%20Nigeria&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fmormon%2Fimages%2Ff%2Fff%2FAbatemple1.jpg%2Frevision%2Flatest%3Fcb%3D20200601132535&imgrefurl=https%3A%2F%2Fchurchofjesuschrist.fandom.com%2Fwiki%2FPort_Harcourt_Nigeria_North_Stake&docid=ibDnit-feADIpM&tbnid=B8djVrR1imJbhM&vet=12ahUKEwilnN28t_eUAxWJKvsDHYfGE4QQnPAOegQIIhAB..i&w=1500&h=1200&hcb=2&itg=1&ved=2ahUKEwilnN28t_eUAxWJKvsDHYfGE4QQnPAOegQIIhAB"
    },

    {
        templeName: "Benin City Nigeria",
        location: "Benin City, Edo State, Nigeria",
        dedicated: "2022, September, 5",
        area: 25000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfmNapT_PkjRZqXgo00zmACs--Y-IUsqYG-K7o6JYotsTKR6eboZJDKI&s"
    },

    {
        templeName: "Kano Nigeria",
        location: "Kano, Nigeria",
        dedicated: "2021, April, 20",
        area: 22000,
        imageUrl: "https://www.google.com/imgres?q=portharcout%20and%20kano%20temple%20images&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1759617951362455&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F2217578988501381%2F&docid=3bTeAgbzpHGgNM&tbnid=FBkLKxhY_tr4sM&vet=12ahUKEwjVwufftPeUAxVXRv4FHTMrJ7oQnPAOegQIJBAB..i&w=1536&h=2048&hcb=2&ved=2ahUKEwjVwufftPeUAxVXRv4FHTMrJ7oQnPAOegQIJBAB"
    },

    {
        templeName: "Enugu Nigeria",
        location: "Enugu, Nigeria",
        dedicated: "2020, October, 18",
        area: 18000,
        imageUrl: "https://www.google.com/imgres?q=enugu%20temple%20Nigeria&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fmormon%2Fimages%2Ff%2Fff%2FAbatemple1.jpg%2Frevision%2Flatest%3Fcb%3D20200601132535&imgrefurl=https%3A%2F%2Fchurchofjesuschrist.fandom.com%2Fwiki%2FEnugu_Nigeria_Stake&docid=2apmGoY8tnaO-M&tbnid=B8djVrR1imJbhM&vet=12ahUKEwiKkOS7tveUAxVuP_sDHUl8NgAQnPAOegQIGhAB..i&w=1500&h=1200&hcb=2&itg=1&ved=2ahUKEwiKkOS7tveUAxVuP_sDHUl8NgAQnPAOegQIGhAB"
    },

    {
        templeName: "Calabar Nigeria",
        location: "Calabar, Nigeria",
        dedicated: "2019, August, 12",
        area: 15000,
        imageUrl: "https://www.google.com/imgres?q=job%20temple%20Nigeria&imgurl=https%3A%2F%2Fchurchofjesuschristtemples.org%2Fassets%2Fimg%2Ftemples%2Fcalabar-nigeria-temple%2Fcalabar-nigeria-temple-65892-main.jpg&imgrefurl=https%3A%2F%2Fchurchofjesuschristtemples.org%2Fcalabar-nigeria-temple%2F&docid=vAmWrwRqmrS1eM&tbnid=TPacUMMemG-K1M&vet=12ahUKEwirzLTctveUAxWTBfsDHfILEAYQnPAOegQIIxAB..i&w=908&h=720&hcb=2&ved=2ahUKEwirzLTctveUAxWTBfsDHfILEAYQnPAOegQIIxAB"
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
