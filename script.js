
// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const modalDescription = document.getElementById('modal-description');

document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('click', event => {
        const title = item.getAttribute('data-title');
        const image = item.getAttribute('data-image');
        const description = item.getAttribute('data-description');

        modalImg.src = image;
        modalCaption.textContent = title;
        modalDescription.textContent = description;

        modal.style.display = 'block';
    });
});

// Funzione per chiudere il modal
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Chiudi il modal quando si clicca all'esterno
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
