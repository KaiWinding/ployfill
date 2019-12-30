var slice = Function.prototype.apply.bind(Array.prototype.slice)

Function.prototype.call = function() {
  var args = slice(arguments)
  var thatFun = this
  var thatEnv = args[0]
  var thatArgs = args.slice(1)

  return (function () {
    thatEnv.thatFun = thatFun

    var result = thatEnv.thatFun(...thatArgs)

    delete thatEnv.thatFun

    return result
  }())
}
