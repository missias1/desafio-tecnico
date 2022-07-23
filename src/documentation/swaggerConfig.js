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
                description: "Created",
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
          tags: ["Ativos"],
            responses: {
              200: {
                description: "OK",
                content: {
                  "application/json": {
                    schema: {
                      "$ref": "#components/schemas/Array_Assets"
                    }
                  }
                }
              }
            }
        }
      },
      "/ativos/{assetId}": {
        get: {
          summary: "Lista uma ação pelo id",
          description: "Essa rota permite a consulta de uma ação pelo seu id",
          tags: ["Ativos"],
          parameters: [{
            name: "assetId",
            in: "path",
            description: "Id do ativo",
          }],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    "$ref": "#components/schemas/Asset"
                  }
                }
              }
            },
            400: {
              description: "NOT FOUND",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "This asset does not exist!"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/ativos/client/{clientId}": {
        get: {
          summary: "Lista as ações de um determinado cliente a partir do id",
          description: "Essa rota permite a consulta de todas ações de um cliente pelo id",
          tags: ["Ativos"],
          // corrigir a parte da autenticação
          security: [{bearerAuth: []}],
          parameters: [{
            name: "clientId",
            in: "path",
            description: "Id do cliente",
          }],
          responses: {
            401: {
              description: "Unauthorized",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: '"token" is invalid!'
                      }
                    }
                  }
                }
              }
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: '"token" is required!'
                      }
                    }
                  }
                }
              }
            },
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      "$ref": "#components/schemas/Array_Assets_Client"
                    }
                  }
                }
              }
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "User not found!"
                      }
                    }
                  }
                }
              }
            },
            500: {
              description: "Internal Server Error",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Internal error!"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/conta/deposito": {
        post: {
          summary: "Realiza depósito na conta do cliente",
          description: "Essa rota permite a consulta de todas ações de um cliente pelo id",
          tags: ["Conta"],
          // corrigir a parte da autenticação
          security: [{bearerAuth: []}],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  "$ref": "#/components/schemas/Deposit"
                  }
                }
              }
            },
          responses: {
            401: {
              description: "Unauthorized",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: '"token" is invalid!'
                      }
                    }
                  }
                }
              }
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: 'You do not have this value in your account!'
                      }
                    }
                  }
                },
              }
            },
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    "$ref": "#components/schemas/Deposit"
                  }
                }
              }
            },
            500: {
              description: "Internal Server Error",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Internal error!"
                      }
                    }
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
          Array_Assets: {
            type: "object",
            properties: {
              assetId: {
                type: "number"
              },
              nameAsset: {
                type: "string"
              },
              price: {
                type: "number"
              }
          },
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
          },
          Asset: {
            type: "obejct",
            properties: {
              assetId: {
                type: "number"
              },
              nameAsset: {
                type: "string"
              },
              price: {
                type: "number"
              }
          },
            example: {
              assetId: 1,
              nameAsset: "ITSA4",
              price: 8.35
            },
          },
          Array_Assets_Client: {
            type: "object",
            properties: {
              clientId: {
                type: "number"
              },
              assetId: {
                type: "number"
              },
              price: {
                type: "number"
              },
              nameAsset: {
                type: "string"
              },
              quantity: {
                type: "number"
              }
          },
            example: {
              clientId: 1,
              assetId: 2,
              price: 8.35,
              nameAsset: "ITSA4",
              quantityAsset: 100
            },
          },
          Deposit: {
            type: "object",
            properties: {
              clientId: {
                type: "number"
              },
              value: {
                type: "number"
              },
          },
            example: {
              clientId: 1,
              value: 1000
            },
          },
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