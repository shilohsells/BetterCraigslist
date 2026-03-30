const searchInput = document.querySelector("input[type='text']");

searchInput?.addEventListener("input", function () {
    console.log("Searching for:", this.value);
});

const filterText = document.querySelector(".top-bar span");
let filterActive = false;

filterText?.addEventListener("click", function () {
    filterActive = !filterActive;

    if (filterActive) {
        this.style.color = "purple";
    } else {
        this.style.color = "black";
    }
});

const listingsContainer = document.querySelector(".grid");

function sortListings(type) {
    const items = Array.from(document.querySelectorAll(".item"));

    items.sort((a, b) => {
        const priceA = parseInt(a.dataset.price || 0);
        const priceB = parseInt(b.dataset.price || 0);

        if (type === "low") return priceA - priceB;
        if (type === "high") return priceB - priceA;
        return 0;
    });

    listingsContainer.innerHTML = "";
    items.forEach(item => listingsContainer.appendChild(item));
}

document.addEventListener("keydown", function (e) {
    if (e.key === "1") sortListings("low");
    if (e.key === "2") sortListings("high");
});