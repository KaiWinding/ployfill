var slice = Function.prototype.apply.bind(Array.prototype.slice)

Function.prototype.call = function() {
  var args = slice(arguments)
  var thatFun = this
  var thatEnv = args[0]
  var thatArgs = args.slice(0)

  return (function () {
    var that = this
    this = thatEnv

    var result = thatFun(thatArgs)

    this = that

    return result
  }())
}
