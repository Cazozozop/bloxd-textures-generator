document.getElementById('textureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer la description et la taille de la texture
    const description = document.getElementById('textureDescription').value;
    const size = parseInt(document.getElementById('textureSize').value);

    // Créer la texture basée sur la description (ici un exemple simple)
    const canvas = document.getElementById('textureCanvas');
    const ctx = canvas.getContext('2d');

    // Redimensionner le canvas
    canvas.width = size;
    canvas.height = size;

    // Remplir le fond avec une couleur transparente
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Exemple simple : dessiner une épée (juste une barre verticale pour l'exemple)
    if (description.toLowerCase().includes("épée")) {
        // Dessiner la lame de l'épée
        ctx.fillStyle = '#666';  // Gris pour la lame
        ctx.fillRect(size / 3, 0, size / 3, size);

        // Dessiner la garde de l'épée
        ctx.fillStyle = '#bb8000';  // Or pour la garde
        ctx.fillRect(size / 4, size * 0.8, size / 2, size / 5);
    }
    // Autres motifs peuvent être ajoutés ici en fonction de la description
    else {
        // Exemple simple : dessiner un carré avec un motif de base
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, size, size);
    }
});
