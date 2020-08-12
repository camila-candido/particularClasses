const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function() {
        const siteId = card.getAttribute("id")
        window.location.href = `/description?id=${siteId}`

    })
}