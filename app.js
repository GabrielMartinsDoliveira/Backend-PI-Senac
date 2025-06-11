const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const caseRoutes = require('./routes/caseRoutes');
const reportRoutes = require('./routes/reportRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const evidenceRoutes = require('./routes/evidenceRoutes');
const laudoRoutes = require('./routes/laudoRoutes');
const pacienteRoutes = require('./routes/pacientRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_CONNECTION = process.env.MONGO_URL;

// Middleware
app.use(express.json());
app.use(cors());

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas da API
app.use('/api', authRoutes);
app.use('/api/case', caseRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/user', userRoutes);
app.use('/api/evidence', evidenceRoutes);
app.use('/api/laudo', laudoRoutes);
app.use('/api/pacient', pacienteRoutes);

// Conexão com MongoDB
mongoose.connect(MONGO_CONNECTION, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => {
console.log('Conectado ao MongoDB!');
})
.catch(err => {
console.error('Erro ao conectar ao MongoDB:', err);
});

// Inicialização do servidor
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
