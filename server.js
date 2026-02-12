const express = require('express');
const path = require('path');
const app = express();

// Infomaniak fournit le port, sinon 3000
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MODIFICATION ICI : On ajoute '0.0.0.0'
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
