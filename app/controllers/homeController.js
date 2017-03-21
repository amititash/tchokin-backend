var controller = require('./controller');

/**
  Support for the hello-world route
*/
function hello(req, res, next) {

  var input = req.params.msg;

  var data = {

    "response":input
  };
  console.log(input);
	controller.sendNext(req, res, next, undefined, data)
}


/**
  Support for the simple status response route
*/
function status(req, res, next) {
  controller.sendNext(req, res, next, undefined, undefined, {statusResponse:true})
}


/**
*/
function oops(req, res, next) {
  controller.sendNext(req, res, next, "something went wrong", undefined, {statusCode:400})
}


/**
  Return a list of routes supported by this controller.  
  Map path to function (action)
*/
module.exports.routes = function routes() {
  return [
    {method:'get', path:'/home/hello/:msg', action:hello, role:'guest'},
    {method:'get', path:'/home/status', action:status, role:'guest'},
    {method:'get', path:'/home/oops', action:oops, role:'guest'}
  ]
}