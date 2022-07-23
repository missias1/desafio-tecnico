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

const BIG_VALUE = 100000
const SHORT_VALUE = 100

module.exports = {
  ARRAY_ASSETS,
  ASSET,
  ASSETS_FROM_CLIENT,
  WALLET_INFO,
  USER_INFO,
  AFFECTED_ROWS,
  NOT_AFFECTED_ROWS,
  DEPOSIT_INFO,
  BIG_VALUE,
  SHORT_VALUE
}