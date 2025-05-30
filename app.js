const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const caseRoutes = require('./routes/caseRoutes');
const reportRoutes = require('./routes/reportRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes')
const evidenceRoutes = require('./routes/evidenceRoutes')
const laudoRoutes = require('./routes/laudoRoutes')
const pacienteRoutes = require('./routes/pacientRoutes')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_CONNECTION = process.env.MONGO_URL

console.log(typeof(MONGO_CONNECTION))

// Middleware para parse de JSON
app.use(express.json());

app.use(cors({ origin: 'https://forenseek.onrender.com' }));

// Conectando ao MongoDB
mongoose.connect(MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB!');
}).catch(err => {
    console.log('Erro ao conectar ao MongoDB:', err);
});

// Usando rotas
app.use('/api', authRoutes)
app.use('/api/case', caseRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/user', userRoutes);
app.use('/api/evidence', evidenceRoutes)
app.use('/api/laudo', laudoRoutes)
app.use('/api/pacient', pacienteRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});