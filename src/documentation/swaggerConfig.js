const swaggerConfig = {
  definition: {
    openapi:"3.0.1",
    info: {
      title: "Documentação do Desafio Técnico",
      description: "Api de uma corretora utilizando o express",
      version: "1.0"
    },
    servers: [{
      url: "http://localhost:3001",
      description: "Servidor local"
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ["./src/routes/routeLogin/index.js", "./src/routes/routesAtivos/index.js"]
};

module.exports = swaggerConfig;