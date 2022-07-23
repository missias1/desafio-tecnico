const swaggerConfig = {
  definition: {
    openapi:"3.0.1",
    info: {
      title: "API EXPRESS - Corretora",
      description: "Essa Api tem como objetivo manipular os ativos e clientes de uma corretora utilizando o express",
      version: "1.0",
      repository: "https://github.com/missias1/desafio-tecnico/",
      contact:{
        url: "https://github.com/missias1/desafio-tecnico",
        email: "leticia.m.icm@gmail.com",
      }

    },
    servers: [{
      url: "http://localhost:3001",
      description: "Servidor local"
    },
    {
      url: "http://localhost:3001",
      description: "API de produção"
    }],
    paths: {
      "/login": {
        post: {
          summary: "Aréa de Login",
          description: "Essa rota permite o usuário fazer o login",
          tags: ["Client"],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  "$ref": "#/components/schemas/Login"
                  }
                }
              }
            },
            responses: {
              400: {
                description: "Bad Request",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example: "Username or password invalid!"
                        }
                      }
                    }
                  }
                }
              },
              201: {
                description: "OK",
                content: {
                  "application/json":{
                    schema: {
                      type: "object",
                      "$ref": "#/components/schemas/Token"
                    }
                  }
                }
              }
            }
          }
        },
      "/ativos": {
        get: {
          summary: "Lista todas as ações",
          description: "Essa rota permite a consulta das ações da corretora",
          tags: ["Assets"],
            responses: {
              200: {
                description: "OK",
                content: {
                  "application/json": {
                    schema: {
                      "$ref": "#components/schemas/Assets"
                    }
                  }
                }
              }
            }
        }
      },
    },
      components: {
        schemas: {
          Login: {
            type: "object",
            properties: {
              email: {
                type: "string",
              },
              password: {
                type: "string"
              }
            },
            example: {
              email: "desafiotecnico@gmail.com",
              password: "123456"
            }
          }, 
          Token: {
            type: "object",
            properties: {
              token: {
                type: "string"
              }
            }
          },
          Assets: {
            type: "obejct",
            properties: [{
              assetId: {
                type: "number"
              },
              nameAsset: {
                type: "string"
              },
              price: {
                type: "number"
              }
          }],
            example: [{
              assetId: 1,
              nameAsset: "ITSA4",
              price: 8.35
            },
            {
              assetId: 2,
              nameAsset: "RENT3",
              price: 54.40
            }

          ]
          }
        },
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      },
    },
  apis: ["./src/routes/routeLogin/index.js", "./src/routes/routesAtivos/index.js"],
}

module.exports = swaggerConfig;