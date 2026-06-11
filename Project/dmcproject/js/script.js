// Product Data

const products = [
    {
        name: "Tomato Seeds",
        category: "Seeds",
        price: "₦5,000",
        image: "images/tomato-seed.jpg"
    },
    {
        name: "NPK Fertilizer",
        category: "Fertilizer",
        price: "₦12,000",
        image: "images/npk-fertilizer.jpg"
    },
    {
        name: "Greenhouse Kit",
        category: "Equipment",
        price: "₦400,000",
        image: "images/greenhouse-kit.jpg"
    },
    {
        name: "Tomato Greenhouse",
        category: "Equipment",
        price: "₦10,000,000",
        image: "images/tomato-green-house.jpg"
    },
    {
        name: "Cucumber Greenhouse",
        category: "Equipment",
        price: "₦10,000,000",
        image: "images/cucumber-greenhouse.jpg"
    },
    {
        name: "Bell Pepper",
        category: "vegetables",
        price: "₦50,000",
        image: "images/bell-pepper.jpg"
    }
];

// Display Products

function displayProducts(productList) {

    const container =
        document.getElementById("productContainer") ||
        document.getElementById("featured-products");

    if (!container) return;

    container.innerHTML = "";

    productList.forEach(product => {

        container.innerHTML += `
        <div class="card">
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
                class="product-image"
            >

            <h3>${product.name}</h3>

            <p><strong>Category:</strong> ${product.category}</p>

            <p><strong>Price:</strong> ${product.price}</p>
        </div>
        `;
    });
}

// Filter Products

function filterProducts() {

    const filterElement =
        document.getElementById("categoryFilter");

    if (!filterElement) return;

    const selectedCategory = filterElement.value;

    if (selectedCategory === "all") {

        displayProducts(products);

    } else {

        const filteredProducts = products.filter(
            product => product.category === selectedCategory
        );

        displayProducts(filteredProducts);
    }
}

// Footer Information

function updateFooter() {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const modified =
        document.getElementById("lastModified");

    if (modified) {
        modified.textContent = document.lastModified;
    }
}

// Contact Form

function setupContactForm() {

    const form =
        document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        localStorage.setItem("customerName", name);

        const thankyou =
            document.getElementById("thankyou");

        if (thankyou) {

            thankyou.innerHTML = `
                <h3>
                    Thank you ${name}!
                    We will contact you soon.
                </h3>
            `;
        }

        form.reset();
    });
}

// Load Page

document.addEventListener("DOMContentLoaded", () => {

    updateFooter();

    displayProducts(products);

    const categoryFilter =
        document.getElementById("categoryFilter");

    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            filterProducts
        );
    }

    setupContactForm();
});