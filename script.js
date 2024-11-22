// Cambiar la foto de perfil al seleccionar un archivo
const fileInput = document.getElementById('file-input');
const profilePicture = document.getElementById('profile-picture');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        // Leer el archivo y actualizar la imagen
        reader.onload = (e) => {
            profilePicture.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});
