class SlideShow {

    constructor(selector) {
        this.target = document.querySelector(selector)
        this.content = this.target.querySelector('[data-show-content]')
        this.items = Array.from(this.content.children)
        this.nav = this.target.querySelector('[data-show-nav]')

        this.setPositionItems()
        this.setActiveSlide(1)


        this.nav.addEventListener('click', (event) => {
            event.preventDefault();
            const targetItem = event.target.closest('.reviews__switcer-item')
            this.setActiveSlide(parseFloat(targetItem.dataset.index))
        })
    }
    setPositionItems() {

        this.content.style.position = 'relative'

        for (const item of this.items) {
            item.style.position = 'absolute'
            item.style.top = 0
            item.style.opacity = 0
        }
    }
    setActiveSlide(index) {
        // index.preventDefault();
        this.items.forEach((item, i) => {
            if (index === i + 1) {
                item.classList.add('123123')
                item.style.position = 'relative'
                item.style.opacity = 1
                item.style.zIndex = 2
            } else {
                item.style.position = 'absolute'
                item.style.opacity = 0
                item.style.zIndex = 0
            }
        })
        this.setActiveNav(index)
    }
    setActiveNav(index) {
        // index.preventDefault();
        for (const nav of this.nav.children) {
            if (nav === this.nav.children[index - 1]) {
                nav.classList.add(`${nav.classList[0]}--active`)
            }
        }

    }
}




const slider = new SlideShow('.reviews')