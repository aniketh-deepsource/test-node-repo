// http-proxy
var httpProxy = require('http-proxy')
// unsafe
httpProxy.createProxyServer({ target: 'http://localhost:9000', xfwd: true }).listen(8000)

// http-proxy-middleware
var express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()
app.use(
  '/proxy',
  createProxyMiddleware({
    target: 'http://localhost:9000',
    changeOrigin: true,
    xfwd: true // unsafe
  })
)
app.listen(3000)
