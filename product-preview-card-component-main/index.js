const imgContainer = document.getElementById("product-img");

function updateImage() {
    const viewportWidth = window.innerWidth;
    console.log(`Viewport Width: ${viewportWidth}`);
    
    imgContainer.innerHTML = viewportWidth > 600 ?
        `<img src="./images/image-product-desktop.jpg" alt="product">` :
        `<img src="./images/image-product-mobile.jpg" alt="product">`;
}

// Initial check on page load
updateImage();

// Add the resize event listener
window.addEventListener('resize', updateImage);

    
