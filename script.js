let slideElements = document.getElementsByClassName("slides")

for (let i = 0; i < slideElements.length; i++) {
    slideElements[i].setAttribute("index", "1")
    let images = slideElements[i].getElementsByTagName("img")
    for (let i of images) {
        i.style.display = "none"
    }
    images[0].style.display = "block"
}
carousel();

function slideChange(reference, indexChange) {
    let currentIndex = parseInt(reference.parentElement.parentElement.getAttribute("index"))
    let slides = reference.parentElement.parentElement.getElementsByTagName("img")
    currentIndex += indexChange
    if (currentIndex > slides.length) currentIndex = 1
    if (currentIndex <= 0) currentIndex = slides.length
    reference.parentElement.parentElement.setAttribute("index", currentIndex)
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[currentIndex - 1].style.display = "block"
}

function carousel() {
    let reference = document.getElementById("pictureSlide")
    slideChange(reference, 1)

    setTimeout(carousel, 7000); // Change image every 2 seconds
}