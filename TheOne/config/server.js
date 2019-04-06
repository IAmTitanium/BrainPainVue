const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares);
server.use((req, res, next) => {
  if (req.path.startsWith('/login')) {
    console.log(req.path)
    console.log(req.query.username);
    let data = {
      "username": req.query.username,
      "userId": getRandomIntInclusive(1, 9999)
    };
    res.send(JSON.stringify(data))

  } else {
    next();
  }
})
server.use(router);
server.listen(8081, () => {
  console.log('JSON Server is running')
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
