const http = require('http')
const fs = require('fs')
const url = require('url')

const Server = http.createServer()

const hosts = []

Server.on('request', function (request, response) {
  console.log('收到请求')
  console.log('请求IP地址为：' + request.headers.host)


  const host = {
    'ip': '',
    'counter': 0,
    'time': []
  }
  if (hosts.length == 0) {
    host.ip = request.headers.host
    host.counter = 1
    host.time.push(new Date)
    hosts.push(host)
  } else {
    for (let item of hosts) {
      if (item.ip === request.headers.host) {
        item.counter += 1
        item.time.push(new Date)
      } else {
        host.ip = request.headers.host
        host.counter = 1
        host.time.push(new Date)
        hosts.push(host)
      }
    }
  }
  fs.writeFile('text.txt', JSON.stringify(hosts), (err) => {
    if (err) {
      return console.log(err)
    }
  })


  const data = {
    "banner": {
      "list": [
        {
          "acm": "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
          "height": 390,
          "height923": 390,
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
          "image923": "https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
          "link": "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
          "title": "\u7115\u65b0\u5973\u88c5\u8282", "width": 750, "width923": 750
        },
        {
          "acm": "3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
          "height": 390,
          "height923": 390,
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
          "image923": "https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg",
          "link": "https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
          "title": "\u5165\u79cb\u7a7f\u642d\u6307\u5357",
          "width": 750,
          "width923": 750
        },
        {
          "acm": "3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
          "height": 390,
          "height923": 390,
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
          "image923": "https://s10.mogucdn.com/mlcdn/c45406/180919_47iclhel8f4ld06hid21he98i93fc_750x390.jpg",
          "link": "https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
          "title": "\u79cb\u5b63\u62a4\u80a4\u5927\u4f5c\u6218",
          "width": 750,
          "width923": 750
        },
        {
          "acm": "3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
          "height": 390, "height923": 390,
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
          "image923": "https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg",
          "link": "https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
          "title": "\u6d41\u884c\u62a2\u5148\u4e00\u6b65",
          "width": 750,
          "width923": 750
        }]
    },
    "dKeyword": {
      "list": [{
        "acm": "3.mce.2_10_1ag5u.6348.0.ccy5br4OlfK0P.pos_0-m_243725-sd_119",
        "defaultKeyWord": "\u5957\u88c5"
      }]
    },
    "keywords": {
      "list": [{
        "acm": "3.mce.2_10_185r2.5868.0.ccy5br4OlfK1Y.pos_0-m_190323-sd_119",
        "is_red": "1",
        "words": "\u8fde\u8863\u88d9"
      },
      {
        "acm": "3.mce.2_10_185r4.5868.0.ccy5br4OlfK1Z.pos_1-m_190324-sd_119", "is_red": "0", "words": "\u5c0f\u767d\u978b"
      },
      {
        "acm": "3.mce.2_10_185r6.5868.0.ccy5br4OlfK10.pos_2-m_190325-sd_119", "is_red": "1", "words": "\u7701\u5fc3\u5957\u88c5"
      },
      {
        "acm": "3.mce.2_10_185r8.5868.0.ccy5br4OlfK11.pos_3-m_190326-sd_119", "is_red": "0", "words": "\u788e\u82b1\u8fde\u8863\u88d9"
      },
      {
        "acm": "3.mce.2_10_185ra.5868.0.ccy5br4OlfK12.pos_4-m_190327-sd_119", "is_red": "1", "words": "\u660e\u661f\u540c\u6b3e"
      },
      {
        "acm": "3.mce.2_10_185rc.5868.0.ccy5br4OlfK13.pos_5-m_190328-sd_119", "is_red": "1", "words": "\u9ad8\u8ddf\u978b"
      },
      {
        "acm": "3.mce.2_10_185re.5868.0.ccy5br4OlfK14.pos_6-m_190329-sd_119", "is_red": "0", "words": "\u7f8e\u5986"
      },
      {
        "acm": "3.mce.2_10_185rg.5868.0.ccy5br4OlfK15.pos_7-m_190330-sd_119", "is_red": "1", "words": "\u58a8\u955c"
      }],
    },
    "recommend": {
      "list": [
        {
          "acm": "3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
          "link": "http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          "sort": 1,
          "title": "\u5341\u70b9\u62a2\u5238"
        },
        {
          "acm": "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
          "link": "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
          "sort": 2,
          "title": "\u597d\u7269\u7279\u5356"
        },
        {
          "acm": "3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
          "link": "http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
          "sort": 3,
          "title": "\u5185\u8d2d\u798f\u5229"
        },
        {
          "acm": "3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
          "link": "http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
          "sort": 4, "title": "\u521d\u79cb\u4e0a\u65b0"
        }],
    }
  }
  const homeDataPop = {

    "list": [
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      } ,
      {
        "image": "http://img10.360buyimg.com/n1/jfs/t1/11702/39/12793/162093/5c949769E06c55ba5/9b2116d3b1b4cdac.jpg",
        "title": "北极狼 BeiJiLang 全自动帐篷户外防雨野营双人双层免搭建3-4人野外露营帐篷套装",
        "link": "https://item.jd.com/100000322415.html",
        "price": 188
      },
      {
        "image": "http://img12.360buyimg.com/n1/jfs/t1/37348/28/5628/119123/5cc3acc5E951f51a8/8cf61923fff1fe4c.jpg",
        "title": "星特朗（CELESTRON）80DX天文望远镜镜专业 观星 专业级",
        "link": "https://item.jd.com/2194532.html",
        "price": 1100
      }
      
    ]
  }
  const homeDataNew = {
    "list": [
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t20734/333/1186182479/156246/d7978b09/5b2211b8N67a3d28c.jpg",
        "title": "Meitu 美图T9 4GB+64GB 仙踪绿 骁龙660芯片 拍照手机 全面屏 全网通手机",
        "link": "https://item.jd.com/7938187.html",
        "price": 1099
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t28036/124/1161674130/345139/916dfbbd/5cd93f42N91ac977e.jpg",
        "title": "五粮液52度普五第七代经典限量收藏版整箱装500ml*6瓶",
        "link": "https://item.jd.com/100005483298.html",
        "price": 7498
      }
    ]
  }
  const homeDataSell = {
    "list": [
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      },
      {
        "image": "//img13.360buyimg.com/n1/jfs/t18916/203/2649931276/614670/54dd3453/5b0287c5Ndbc497c0.jpg",
        "title": "小米电视4 55英寸4K超高清 HDR 4.9mm超薄 蓝牙语音遥控 2GB+8GB 人工智能语音平板电视L55M5-AB",
        "link": "https://item.jd.com/100005336313.html",
        "price": 2999
      },
      {
        "image": "//img12.360buyimg.com/n1/s450x450_jfs/t18079/360/785976038/215384/fa4bf6bd/5aa737fdN6c018a9a.jpg",
        "title": "罗技（G）POWERPLAY 无线充电系统 无线充电鼠标垫 G502(WIRELESS) G703 G903 PRO(WIRELESS)",
        "link": "https://item.jd.com/6811407.html",
        "price": 699
      }
    ]
  }


  const params = url.parse(request.url, true).query

  // url 为首页轮播图及commends的数据
  if (request.url === "/home/multidata") {
    response.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
    })
    response.write(JSON.stringify(data))
    console.log('发送homemultidata成功')
    response.end()
  } else if (url.parse(request.url, true).pathname == "/home/data") {
    response.writeHead(200, {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      "Content-Type": "application/json;text/plain"
    })

    const type = JSON.stringify(params.type)
    if (type == '"pop"') {
      try {
        console.log('发送homeData成功')
        response.write(JSON.stringify(homeDataPop))
      } catch (error) {
        console.log(error)
      }
      response.end()
    } else if (type == '"new"') { 
      try {
        console.log('发送homeData成功')
        response.write(JSON.stringify(homeDataNew))
      } catch (error) {
        console.log(error)
      }
      response.end()
    } else if (type == '"sell"') {
      try {
        console.log('发送homeData成功')
        response.write(JSON.stringify(homeDataSell))
      } catch (error) {
        console.log(error)
      }
      response.end()
    }
  } else {
    console.log('errro')
    response.end('404 Not Found')
  }
})

Server.listen(3000, () => console.log('服务器启动成功'))