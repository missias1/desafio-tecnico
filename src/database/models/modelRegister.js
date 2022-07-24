const connection = require('../connection');

const addClient = (name, email, password, telephone) => connection.execute(
  `INSERT INTO heroku_3a2342a6c76f266.clients (name, email, password, telephone)
  VALUES (?, ?, ?, ?)`, [name, email, password, telephone]
  )