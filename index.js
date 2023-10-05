// index.js
const functions = require('@google-cloud/functions-framework');

/**
 *  HTTPSで実行される関数
 *  http関数の第1引数は、エントリポイントと一致させること
 */
functions.http('helloHttp', (req, res) => {
  res.send(`Hello ${req.query.name || req.body.name || 'World'}!`);
});