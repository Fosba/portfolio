// Accordion
function toggleProject(element) {
    const isActive = element.classList.contains('active');
    
    // Chiude tutti i progetti
    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
    });

    // Se quello cliccato non era attivo, lo apre
    if (!isActive) {
        element.classList.add('active');
        // Scroll leggero per centrare il progetto aperto
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 400);
    }
}

