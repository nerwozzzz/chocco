// const openItem = item => {
//     const container = item.closest(".team__item");
//     const contentBlock = container.find(".team__content")
//     const textBlock = contentBlock.find(".team__content-block");
//     const reqHeight = textBlock.height();

//     contentBlock.height(reqHeight);

// }

// $('.team__title').click(e => {
//     const $this = $(e.currentTarget);

//     openItem($this);
// })

var acc = document.getElementsByClassName("team__title");
var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });

}