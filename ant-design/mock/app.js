/*
 * @Author: MagicHuang
 * @Date: 2019-11-06 20:04:34
 * @Description:
 */
var express = require('../node_modules/express');
var app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});



var questions = [100, 40, 78, 10, 30, 48]


app.get('/api/dashboard/chart', function (req, res) {
  res.status(200), res.json(questions)
})
//配置服务端口
var server = app.listen(3000, function () {

  var host = server.address().address;

  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})
