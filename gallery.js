const images = document.getElementsByClassName("image-slot")

const code_extras_widget = document.getElementById("code-extras-widget")
const auto_tag_widget = document.getElementById("auto-tag-widget")

for (let item of images) {
    item.addEventListener("click", function () {
        item.requestFullscreen()
    })
}

code_extras_widget.addEventListener("click", function () {
    window.open("https://create.roblox.com/store/asset/126935258768595/Code-Extras-Streamlined-Coding", '_blank').focus();
})

auto_tag_widget.addEventListener("click", function () {
    window.open("https://create.roblox.com/store/asset/15878279517/Auto-Tag", '_blank').focus();
})