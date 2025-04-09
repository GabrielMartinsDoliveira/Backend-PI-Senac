const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const caseRoutes = require('./routes/caseRoutes');
const reportRoutes = require('./routes/reportRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parse de JSON
app.use(express.json());

app.use(cors());

// Conectando ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/forenseek', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB!');
}).catch(err => {
    console.log('Erro ao conectar ao MongoDB:', err);
});

// Usando rotas
app.use('/api/case', caseRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});