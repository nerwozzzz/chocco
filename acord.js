document.querySelector(".accord__list").addEventListener("click", (event) => {
    event.preventDefault();



    const trigger = event.target.closest("[data-trigger]")

    if (!trigger) return

    const item = trigger.parentNode

    if (item.classList.contains("active")) {
        closeItem(item)

    } else {
        openItem(item)
    }

})

function openItem(item) {
    const contentWrap = item.querySelector("[data-open]")
    const openWidth = calcWidth(item)

    contentWrap.style.width = `${openWidth}px`
    item.classList.add("active")

}

function calcWidth(item) {
    return 524
}

