const products = [
    {
        name: "Tomato Seeds",
        category: "Seeds",
        price: "₦5,000"
    },
    {
        name: "NPK Fertilizer",
        category: "Fertilizer",
        price: "₦12,000"
    },
    {
        name: "Greenhouse Kit",
        category: "Equipment",
        price: "₦150,000"
    }
];

function displayProducts(items) {

    const container =
        document.getElementById("productContainer") ||
        document.getElementById("featured-products");

    if (!container) return;

    container.innerHTML = "";

    items.forEach(product => {

        container.innerHTML += `
<div class="card">
<h3>${product.name}</h3>
<p>Category: ${product.category}</p>
<p>Price: ${product.price}</p>
</div>
`;
    });
}

function filterProducts() {

    const filter =
        document.getElementById("categoryFilter").value;

    if (filter === "all") {
        displayProducts(products);
    }
    else {

        const filtered =
            products.filter(
                product => product.category === filter
            );

        displayProducts(filtered);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const year =
        document.getElementById("year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }

    const modified =
        document.getElementById("lastModified");

    if (modified) {
        modified.textContent =
            document.lastModified;
    }

    displayProducts(products);

    const dropdown =
        document.getElementById("categoryFilter");

    if (dropdown) {
        dropdown.addEventListener(
            "change",
            filterProducts
        );
    }

    const form =
        document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const name =
                document.getElementById("name").value;

            localStorage.setItem(
                "customerName",
                name
            );

            document.getElementById("thankyou").innerHTML =
                `<h3>Thank you ${name}! We will contact you soon.</h3>`;

            form.reset();
        });
    }
});