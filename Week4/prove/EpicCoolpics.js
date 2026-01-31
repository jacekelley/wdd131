// Select elements
const gallery = document.querySelector('.images');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Open modal when an image is clicked
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        const smallSrc = e.target.getAttribute('src'); // get relative path
        // Replace 'coolpic.jpg' with 'norris-full.jpg' in the same folder
        const fullSrc = smallSrc.replace('coolpic.jpg', 'norris-full.jpg');

        modalImage.setAttribute('src', fullSrc); // set modal image
        modal.showModal();
    }
});

// Close modal when clicking the close button
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});