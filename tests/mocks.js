const ARRAY_ASSETS = [
  {
    assetId: 1,
    nameAsset: 'ABCD',
    price: 10,
  },
  {
    assetId: 2,
    nameAsset: 'MNOP',
    price: 20,
  },
]

const ASSET = {
  assetId: 1,
  nameAsset: 'ABCD',
  price: 10,
}

const ASSETS_FROM_CLIENT = [
	{
		clientId: 1,
		assetId: 1,
		price: 8.35,
		quantityAsset: 100
	},
	{
		clientId: 1,
		assetId: 2,
		price: 54.40,
		quantityAsset: 50
	},
]

const WALLET_INFO = {
	clientId: 1,
	balance: 10000
}

const WALLET_INFO_EMPTY = {
	clientId: 1,
	balance: 0
}

const LOGIN = {
  email: "pedro@gmail.com",
  password: "123456"
}
const USER_INFO = {
  clientId: '1',
  name: 'João',
  email: 'joao@gmail.com',
  balance: 10000,
}

const AFFECTED_ROWS = {
  affectedRows: 1
}

const NOT_AFFECTED_ROWS = {
  affectedRows: 0
}

const DEPOSIT_INFO = {
  clientId: 1,
  value: 1000
}

const WITHDRAW_INFO = {
  clientId: 1,
  value: 2000
}

const BUY_ASSET = {
  quantity: 25,
  clientId: 1,
  assetId: 2
}

const SELL_ASSET = {
  quantity: 50,
  clientId: 2,
  assetId: 3,
}

const TOKEN = { token: "tokensupersecreto" }

const BIG_VALUE = 100000

const SHORT_VALUE = 100

const NEW_USER = {
  name: "Pedro Santana",
  email: "pedrinho@gmail.com",
  password: "123456",
  telephone: "2798776644"
}

const EMAIL_EXIST = "pedrinho@gmail.com"

const SUCESS_CREATED = "Created account!"

const UPDATE_INFO = {
  clientId: 1,
  telephone: "22988345670"
}

module.exports = {
  ARRAY_ASSETS,
  ASSET,
  ASSETS_FROM_CLIENT,
  WALLET_INFO,
  WALLET_INFO_EMPTY,
  USER_INFO,
  AFFECTED_ROWS,
  NOT_AFFECTED_ROWS,
  DEPOSIT_INFO,
  BIG_VALUE,
  SHORT_VALUE,
  WITHDRAW_INFO,
  BUY_ASSET,
  SELL_ASSET,
  LOGIN,
  TOKEN,
  NEW_USER,
  EMAIL_EXIST,
  SUCESS_CREATED,
  UPDATE_INFO
}