let express = require('express')
let app = express()
let url = require('url')

let admin_login = require('./data/admin_login.json')
let vip_login = require('./data/vip_login.json')
let admin_permissions = require('./data/admin_permission.json')
let vip_permissions = require('./data/vip_permission.json')

app.get('/login', (req, res) => {
  let user = req.query.user;
  if (user === 'admin') {
    res.send(admin_login)
  } else {
    res.send(vip_login)
  }
})

app.get('/permissions', (req, res) => {
  let user = req.query.user;
  console.log(req.query);
  if (user === 'admin') {
    res.send(admin_permissions)
  } else {
    res.send(vip_permissions)
  }
})

app.listen(8888, () => {
  console.log('泡在8888端口');
})