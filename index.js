const express = require("express");
const app = express();
const PORT = 3000;

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");

// Middleware para servir archivos estáticos
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
    res.render("index"); // Renderiza el archivo index.ejs desde la carpeta views
});

// Ruta para términos de servicio
app.get("/terms-of-service", (req, res) => {
    res.render("terms-of-service");
});

// Ruta para política de privacidad
app.get("/privacy-policy", (req, res) => {
    res.render("privacy-policy");
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});