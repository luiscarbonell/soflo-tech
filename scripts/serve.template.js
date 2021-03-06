'use strict'

let path = require('path')
let dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../.env.local')
})
let liveServer = require('live-server')

liveServer.start({
  port: process.env.TEMPLATE_PORT || 3001,
  host: process.env.HOST,
  root: path.resolve(__dirname, '../template')
})