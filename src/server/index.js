const http = require("http")
const url = require("url")

const { getHomeMultiData, getHomeDataPop, getHomeDataNew, getHomeDataSell, getDetails } = require("./home")

// 创建server对象
const server = http.createServer()

// 监听server
server.on("request", (req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    "Content-Type": "application/json;text/plain"
  })

  // 获取url和query
  const urlPath = url.parse(req.url, true).pathname
  const params = url.parse(req.url, true).query

  // 发送首页数据
  if (urlPath === "/home/multidata") {
    const data = getHomeMultiData()
    res.write(JSON.stringify(data))
    res.end()
  }
  // 发送商品数据
  else if (urlPath === "/home/data") {
    const type = params.type
    const page = params.page
    const list = {
      "list": []
    }
    const homeDataPop = getHomeDataPop(),
      homeDataNew = getHomeDataNew(),
      homeDataSell = getHomeDataSell()
    if (type == 'pop') {
      try {
        list.list = homeDataPop.list.slice((page - 1) * 30, page * 30)
        res.write(JSON.stringify(list))
        console.log('发送homeDataPop成功')
      } catch (error) {
        console.log(error)
      }
      res.end()
    }
    else if (type == 'new') {
      try {
        list.list = homeDataNew.list.slice((page - 1) * 30, page * 30)
        res.write(JSON.stringify(list))
        console.log('发送homeDataNew成功')
      } catch (error) {
        console.log(error)
      }
      res.end()
    }
    else if (type == 'sell') {
      try {
        list.list = homeDataSell.list.slice((page - 1) * 30, page * 30)
        res.write(JSON.stringify(list))
        console.log('发送homeDataSell成功')
      } catch (error) {
        console.log(error)
      }
      res.end()
    }
  }
  // 发送详情页数据
  else if (urlPath === "/detail") {
    const data = getDetails()
    res.write(JSON.stringify(data))
    console.log('发送详情页数据成功')
    res.end()
  }
    // 验证账户
  else if (urlPath === "/login") {
    const user = {
      id: 'zlx846',
      password: 'xingxing'
    }
    const UserInfo = {
      headImage: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2857237103,4249004952&fm=26&gp=0.jpg"
    }
    const netUser = JSON.parse(params.user)
    if (netUser.id === user.id && netUser.password === user.password) {
      res.write(JSON.stringify(UserInfo))
      console.log('账户验证成功')
      res.end()
    } else { 
      res.write("fail")
      console.log('账户验证失败')
      res.end()
    }
  }
    
  // 请求分类数据 
  else if (urlPath === "/category") {
    const category = {

    }
    res.write('success')
    res.end()
  }
  // 失败
  else {
    console.log('请求出错');
    res.end('404 Not Found')
  }

  

})

// 在3000端口上启动
server.listen(3000, () => console.log("服务器启动成功"))

