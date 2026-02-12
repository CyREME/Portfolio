const express = require('express');
const path = require('path');
const app = express();

// Infomaniak nous donne un port dynamique, sinon on utilise 3000 en local
const PORT = process.env.PORT || 3000;

// On dit à Node de servir les fichiers du dossier "public"
app.use(express.static('public'));

// Pour toutes les routes, on renvoie l'index.html (Single Page App friendly)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
