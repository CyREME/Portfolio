const express = require('express');
const path = require('path');
const app = express();

// Infomaniak nous donne un port dynamique, sinon on utilise 3000 en local
const PORT = process.env.PORT || 3000;

// On dit à Node de servir les fichiers du dossier "public"
app.use(express.static('public'));

// On utilise /.*/ (sans guillemets) pour dire "tout" en langage Regex pur
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MODIFICATION ICI : On ajoute '0.0.0.0'
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Serveur lancé sur le port ${PORT}`);
});