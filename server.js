/*jshint esnext:true */
var koa = require('koa');
var app = koa();

app.use(function *(next){
  this.body = 'Hello World';
  yield next;
});

app.listen(3000);
