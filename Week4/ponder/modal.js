const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName === "IMG") {
        // Convert -sm.jpg to -full.jpg
        const smallSrc = e.target.src;
        const fullSrc = smallSrc.replace("-sm.jpg", "-full.jpg");

        modalImage.src = fullSrc;
        modalImage.alt = e.target.alt;

        modal.showModal();
    }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});