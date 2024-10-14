// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón con la clase 'cv-download'
    const downloadButton = document.querySelector('.cv-download');

    // Agregar un evento de clic al botón
    downloadButton.addEventListener('click', function() {
        // Crear un enlace temporal
        const link = document.createElement('a');
        
        // Establecer la URL del archivo que se desea descargar
        link.href = 'mi-cv.pdf'; // Cambia esto por la ruta correcta de tu archivo

        // Establecer el atributo 'download' para indicar que se debe descargar
        link.download = 'Piero Acuña - CV.pdf'; // Nombre con el que se guardará el archivo

        // Simular un clic en el enlace
        link.click();
    });
});
