function openPopup(imageSrc) {
    document.getElementById("popup-img").src = imageSrc;
    document.getElementById("popup-container").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup-container").style.display = "none";
}
