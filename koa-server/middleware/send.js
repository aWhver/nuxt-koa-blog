/**
 * Created by juntong on 2018/5/12.
 * 定义返回数据中间件
 */

module.exports = () => {
  let render = ctx => {
    return (json, message) => {
      ctx.response.body = {
        code: 1,
        data: json || {},
        message: message || 'SUCCESS'
      }
    }
  }
  let renderError = ctx => {
    return message => {
      ctx.response.body = {
        code: 0,
        data: json || {},
        message: message
      }
    }
  }
  return (ctx, next) => {
    ctx.send = render(ctx)
    ctx.sendError = renderError(ctx)
    await next()
  }
}
