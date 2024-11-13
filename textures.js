// Exemple de chargement d'une texture PNG et d'affichage sur un canvas
const textureImage = new Image();
textureImage.src = 'textures/epée.png'; // Remplace par l'URL de la texture sur GitHub

textureImage.onload = function() {
    const canvas = document.getElementById('textureCanvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(textureImage, 0, 0); // Affiche la texture dans le canvas
};
