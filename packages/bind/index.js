Function.prototype.bind = function () {
  var thatFun = this
  var thatEnv = arguments[0]

  var args = Array.prototype.slice.call(arguments)
  var thatArgs = args.slice(1)

  return function () {
    return thatFun.call(thatEnv, thatArgs)
  }
}
