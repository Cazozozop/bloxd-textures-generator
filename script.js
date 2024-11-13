const textureImage = new Image();
textureImage.src = 'textures/epée.png'; // Texture de base

textureImage.onload = function() {
    const size = parseInt(document.getElementById('textureSize').value);  // Taille de la texture demandée
    const canvas = document.getElementById('textureCanvas');
    const ctx = canvas.getContext('2d');

    // Redimensionner le canvas en fonction de la taille de la texture
    canvas.width = size;
    canvas.height = size;

    // Appliquer la texture de base (épée)
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas
    ctx.drawImage(textureImage, 0, 0, size, size); // Redimensionner et dessiner l'image sur le canvas
};
