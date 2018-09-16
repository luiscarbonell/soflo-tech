'use strict'

let path = require('path')
let dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../.env.local')
})
let liveServer = require('live-server')

liveServer.start({
  port: process.env.PORT || 3000,
  host: process.env.HOST,
  root: path.resolve(__dirname, '../static')
})