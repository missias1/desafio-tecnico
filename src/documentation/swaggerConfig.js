/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
/* eslint-disable max-lines */
const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'API EXPRESS - Corretora',
      description: 'Essa Api tem como objetivo manipular os ativos e clientes de uma corretora utilizando o express',
      version: '1.0',
      repository: 'https://github.com/missias1/desafio-tecnico/',
      contact: {
        url: 'https://github.com/missias1/desafio-tecnico',
        email: 'leticia.m.icm@gmail.com',
      },

    },
    servers: [{
      url: 'http://localhost:3000',
      description: 'Servidor local',
    },
    {
      url: 'https://missias1-desafio-tecnico.herokuapp.com/',
      description: 'Deploy da aplicação',
    }],
    paths: {
      '/login': {
        post: {
          summary: 'Área de Login',
          description: 'Essa rota permite o usuário fazer o login.',
          tags: ['Login'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Login',
                  },
                },
              },
            },
            responses: {
              400: {
                description: 'Bad Request',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        message: {
                          type: 'string',
                          example: 'Username or password invalid!',
                        },
                      },
                    },
                  },
                },
              },
              201: {
                description: 'Created',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      $ref: '#/components/schemas/Token',
                    },
                  },
                },
              },
            },
          },
        },
      '/register': {
        post: {
          summary: 'Área de Cadastro',
          description: 'Essa rota permite o cliente fazer cadastro',
          tags: ['Cadastro'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Register',
                  },
                },
              },
            },
            responses: {
              400: {
                description: 'Bad Request',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        message: {
                          type: 'string',
                          example: 'Email already exist!',
                        },
                      },
                    },
                  },
                },
              },
              201: {
                description: 'Created',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        message: {
                          type: 'string',
                          example: 'Created account!',
                        },
                        clientId: {
                          type: 'integer',
                          example: 1,
                        },
                      },
                    },
                  },
                },
              },
            },
        },
      },
      '/ativos': {
        get: {
          summary: 'Lista todas as ações',
          description: 'Essa rota lista as ações da corretora',
          tags: ['Ativos'],
            responses: {
              200: {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#components/schemas/arrayAssets',
                    },
                  },
                },
              },
            },
        },
      },
      '/ativos/{assetId}': {
        get: {
          summary: 'Lista uma ação pelo id',
          description: 'Essa rota permite a consulta de uma ação pelo id',
          tags: ['Ativos'],
          parameters: [{
            name: 'assetId',
            in: 'path',
            description: 'Id do ativo',
          }],
          responses: {
            200: {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#components/schemas/Asset',
                  },
                },
              },
            },
            404: {
              description: 'Not Found',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'This asset does not exist!',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/ativos/client/{clientId}': {
        get: {
          summary: 'Lista as ações de um determinado cliente a partir do id',
          description: 'Essa rota permite a consulta de todas ações de um cliente pelo id. Precisa de autenticação.',
          tags: ['Ativos'],
          security: [{ bearerAuth: [] }],
          parameters: [{
            name: 'clientId',
            in: 'path',
            description: 'Id do cliente',
            required: true,
          }],
          responses: {
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    oneOf: [
                      { $ref: '#/components/schemas/Error401A' },
                      { $ref: '#/components/schemas/Error401B' },
                    ],
                  },
                },
              },
            },
            400: {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: '"token" is required!',
                      },
                    },
                  },
                },
              },
            },
            200: {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#components/schemas/arrayAssetsClient',
                    },
                  },
                },
              },
            },
            404: {
              description: 'Not Found',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'User not found!',
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: 'Internal Server Error',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Internal error!',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/conta/deposito': {
        post: {
          summary: 'Realiza depósito na conta do cliente',
          description: 'Essa rota permite que o cliente faça depósito na sua conta. Precisa de autenticação.',
          tags: ['Conta'],
          security: [{ bearerAuth: [] }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Deposit',
                  },
                },
              },
              required: true,
            },
          responses: {
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    oneOf: [
                      { $ref: '#/components/schemas/Error401A' },
                      { $ref: '#/components/schemas/Error401B' },
                    ],
                  },
                },
              },
            },
            400: {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    properties: {
                      message: {
                        type: 'string',
                        example: '"token" is required!',
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: 'Created',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#components/schemas/Deposit',
                  },
                },
              },
            },
            500: {
              description: 'Internal Server Error',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Internal error!',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/conta/saque': {
        post: {
          summary: 'Realiza saque da conta do cliente',
          description: `Essa rota permite que o cliente faça saque da sua conta. Precisa de autenticação.
          Valida se o valor do saque não é maior que o disponível na conta`,
          tags: ['Conta'],
          // corrigir a parte da autenticação
          security: [{ bearerAuth: [] }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Withdraw',
                  },
                },
              },
              required: true,
            },
          responses: {
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    oneOf: [
                      { $ref: '#/components/schemas/Error401A' },
                      { $ref: '#/components/schemas/Error401B' },
                    ],
                  },
                },
              },
            },
            400: {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'You do not have this value in your account!',
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: 'Created',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Withdraw',
                  },
                },
              },
            },
            500: {
              description: 'Internal Server Error',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Internal error!',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/conta/{clientId}': {
        get: {
          summary: 'Realiza consulta do saldo do cliente pelo id',
          description: 'Essa rota permite listar o saldo do cliente pelo id. Precisa de autenticação.',
          tags: ['Conta'],
          // corrigir a parte da autenticação
          security: [{ bearerAuth: [] }],
          parameters: [{
            name: 'clientId',
            in: 'path',
            description: 'Id do cliente',
            required: true,
          }],
          responses: {
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    oneOf: [
                      { $ref: '#/components/schemas/Error401A' },
                      { $ref: '#/components/schemas/Error401B' },
                    ],
                  },
                },
              },
            },
            400: {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: '"token" is required!',
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Wallet',
                  },
                },
              },
            },
            500: {
              description: 'Internal Server Error',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Internal error!',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/conta/delete/{clientId}': {
        delete: {
          summary: 'Realiza a exclusão da conta',
          description: 'Essa rota permite o cliente excluir a conta se o saldo estiver zerado e sem ativos em carteira. Precisa de autenticação.',
          tags: ['Conta'],
          // corrigir a parte da autenticação
          security: [{ bearerAuth: [] }],
          parameters: [{
            name: 'clientId',
            in: 'path',
            description: 'Id do cliente',
            required: true,
          }],
          responses: {
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    oneOf: [
                      { $ref: '#/components/schemas/Error401A' },
                      { $ref: '#/components/schemas/Error401B' },
                    ],
                  },
                },
              },
            },
            400: {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'You have assets or cash in your account and can not delete yet.',
                      },
                    },
                  },
                },
              },
            },
            204: {
              description: 'No content',
            },
            500: {
              description: 'Internal Server Error',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Internal error!',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/conta/edit': {
        put: {
          summary: 'Atualiza dado do cliente',
          description: 'Essa rota permite o cliente atualizar seu dado cadastrado. Precisa de autenticação.',
          tags: ['Conta'],
          security: [{ bearerAuth: [] }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/EditInfo',
                  },
                },
              },
              required: true,
            },
          responses: {
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    oneOf: [
                      { $ref: '#/components/schemas/Error401A' },
                      { $ref: '#/components/schemas/Error401B' },
                    ],
                  },
                },
              },
            },
            400: {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: '"token" is required!',
                      },
                    },
                  },
                },
              },
            },
            200: {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/EditInfo',
                  },
                },
              },
            },
            500: {
              description: 'Internal Server Error',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Internal error!',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/investimentos/comprar': {
        post: {
          summary: 'Realiza compra de ações, adicionando-as na carteira do cliente',
          description: 'Essa rota permite que o cliente faça aquisição de novos ativos. Precisa de autenticação. Valida se o ativo está disponível na corretora.',
          tags: ['Investimentos'],
          // corrigir a parte da autenticação
          security: [{ bearerAuth: [] }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/buyAssets',
                  },
                },
              },
              required: true,
            },
          responses: {
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    oneOf: [
                      { $ref: '#/components/schemas/Error401A' },
                      { $ref: '#/components/schemas/Error401B' },
                    ],
                  },
                },
              },
            },
            400: {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'This quantity is not available!',
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/buyAssets',
                  },
                },
              },
            },
            500: {
              description: 'Internal Server Error',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Internal error!',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/investimentos/vender': {
        post: {
          summary: 'Realiza venda de ações, removendo-as da carteira do cliente',
          description: 'Essa rota permite que o cliente venda suas ações. Precisa de autenticação. Valida que o valor a ser vendido não é maior que o que ele possui de ativos.',
          tags: ['Investimentos'],
          // corrigir a parte da autenticação
          security: [{ bearerAuth: [] }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/sellAssets',
                  },
                },
              },
              required: true,
            },
          responses: {
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    oneOf: [
                      { $ref: '#/components/schemas/Error401A' },
                      { $ref: '#/components/schemas/Error401B' },
                    ],
                  },
                },
              },
            },
            400: {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'You can not sale more assets than you have!',
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/sellAssets',
                  },
                },
              },
            },
            500: {
              description: 'Internal Server Error',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Internal error!',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
      components: {
        schemas: {
          Login: {
            type: 'object',
            properties: {
              email: {
                type: 'string',
              },
              password: {
                type: 'string',
              },
            },
            example: {
              email: 'desafiotecnico@gmail.com',
              password: '123456',
            },
          }, 
          Token: {
            type: 'object',
            properties: {
              token: {
                type: 'string',
              }, 
              clientId: {
                type: 'integer',
              },
            },
            example: {
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
              clientId: 1,
            },
          },
          arrayAssets: {
            type: 'object',
            properties: {
              assetId: {
                type: 'integer',
              },
              nameAsset: {
                type: 'string',
              },
              price: {
                type: 'number',
              },
          },
            example: [{
              assetId: 1,
              nameAsset: 'ITSA4',
              price: 8.35,
            },
            {
              assetId: 2,
              nameAsset: 'RENT3',
              price: 54.40,
            },
          ],
          },
          Asset: {
            type: 'obejct',
            properties: {
              assetId: {
                type: 'integer',
              },
              nameAsset: {
                type: 'string',
              },
              price: {
                type: 'number',
              },
          },
            example: {
              assetId: 1,
              nameAsset: 'ITSA4',
              price: 8.35,
            },
          },
          arrayAssetsClient: {
            type: 'object',
            properties: {
              clientId: {
                type: 'integer',
              },
              assetId: {
                type: 'integer',
              },
              price: {
                type: 'number',
              },
              nameAsset: {
                type: 'string',
              },
              quantity: {
                type: 'number',
              },
          },
            example: {
              clientId: 1,
              assetId: 2,
              price: 8.35,
              nameAsset: 'ITSA4',
              quantityAsset: 100,
            },
          },
          Deposit: {
            type: 'object',
            properties: {
              clientId: {
                type: 'integer',
              },
              value: {
                type: 'number',
              },
          },
            example: {
              clientId: 1,
              value: 1000,
            },
          },
          Withdraw: {
            type: 'object',
            properties: {
              clientId: {
                type: 'integer',
              },
              value: {
                type: 'number',
              },
          },
            example: {
              clientId: 1,
              value: 2000,
            },
          },
          Wallet: {
            type: 'object',
            properties: {
              clientId: {
                type: 'integer',
              },
              balance: {
                type: 'number',
              },
          },
            example: {
              clientId: 1,
              balance: 20000,
            },
          },
          buyAssets: {
            type: 'object',
            properties: {
              quantity: {
                type: 'number',
              },
              clientId: {
                type: 'integer',
              },
              assetId: {
                type: 'integer',
              },
          },
            example: {
              quantity: 70,
              clientId: 1,
              assetId: 3,
            },
          },
          sellAssets: {
            type: 'object',
            properties: {
              quantity: {
                type: 'number',
              },
              clientId: {
                type: 'integer',
              },
              assetId: {
                type: 'integer',
              },
          },
            example: {
              quantity: 70,
              clientId: 1,
              assetId: 3,
            },
          },
          EditInfo: {
            type: 'object',
            properties: {
              clientId: {
                type: 'integer',
              },
              telephone: {
                type: 'string',
              },
          },
            example: {
              clientId: 1,
              telephone: '11988652340',
            },
          },
          Register: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              email: {
                type: 'string',
              },
              password: {
                type: 'string',
              },
              telephone: {
                type: 'string',
              },
          },
            example: {
              name: 'Leticia',
              email: 'leticia@gmail.com',
              password: '123456',
              telephone: '11988652340',
            },
          },
          Error401A: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
          },
            example: {
              message: 'Action not allowed!',
            },
          },
          Error401B: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
          },
            example: {
              message: '"token" is invalid',
            },
          },
        },
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
  apis: ['./src/routes/index.js'],
};

module.exports = swaggerConfig;