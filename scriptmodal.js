document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.certificado');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const certificadoImagen = document.getElementById('certificado-imagen');
    
    // Al hacer clic en un botón de certificado
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const certificado = button.getAttribute('data-certificado');
            certificadoImagen.src = certificado; // Cargar imagen del certificado
            modal.style.display = 'block'; // Mostrar la mini pestaña
        });
    });

    // Al hacer clic en el botón de cerrar
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Ocultar la mini pestaña
    });

    // Al hacer clic fuera de la mini pestaña
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Ocultar la mini pestaña
        }
    });
});
