const http = require('http')

const Server = http.createServer()

Server.on('request', function (request, response) {
  console.log('收到请求')
  // for (let props in request) {
  //   console.log(props)
  // }

  const person = {
    name: 'zlx',
    age: 18
  }

  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': true,
    // "Access-Control-Allow-Methods":"POST,GET"
  })
  response.write(JSON.stringify(person))
  response.end()
})

Server.listen(3000, () => console.log('服务器启动成功'))