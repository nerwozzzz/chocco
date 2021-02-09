document.querySelector(".accord__list").addEventListener("click", (event) => {
    event.preventDefault();



    const trigger = event.target.closest("[data-trigger]")

    if (!trigger) return

    const item = trigger.parentNode

    if (item.classList.contains("active")) {
        closeItem(item)

    } else {
        closeActiveItem(item)
        openItem(item)
    }

})

function closeActiveItem(item) {
    const list = item.parentNode
    const active = list.querySelector(".active")

    if (active) {
        closeItem(active)
    }

}

function openItem(item) {
    const contentWrap = item.querySelector("[data-open]")
    const content = contentWrap.firstElementChild
    const openWidth = calcWidth(item)

    content.style.minWidth = `${openWidth}px`
    contentWrap.style.width = `${openWidth}px`

    item.classList.add("active")

}

function closeItem(item) {
    const contentWrap = item.querySelector("[data-open]")

    contentWrap.style.width = 0
    item.classList.remove("active")
}

function calcWidth(item) {
    const list = item.parentNode
    const windowWidth = window.innerWidth
    const triggers = list.querySelectorAll("[data-trigger]")
    const triggersWidth = triggers[0].clientWidth * triggers.length
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    if (isMobile) {
        return windowWidth - triggersWidth

    }


    return 524
}

