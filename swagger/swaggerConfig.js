const swaggerJSDoc = require('swagger-jsdoc');

const options = {
definition: {
openapi: '3.0.0',
info: {
    title: 'Projeto Integrador',
    version: '1.0.0',
    description: 'Documentação da API com Swagger',
    contact: {
    name: '//',
    email: '//',
    },
},
servers: [
    {
    url: 'https://backend-forenseek.onrender.com/api',
    description: 'Render',
}
],
components: {
    securitySchemes: {
    bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    },
    },
},
security: [
    {
    bearerAuth: [],
    },
],
},
apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

