/* eslint-disable no-undef */
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'scene.json')

fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
  if (!err) {
    console.log(JSON.stringify(JSON.parse(data)))
  } else {
    console.log(err)
  }
})
