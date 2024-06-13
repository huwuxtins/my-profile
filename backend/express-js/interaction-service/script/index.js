const fs = require('fs')

module.exports = file => {
    const buffer = fs.readFileSync(`${__dirname}/${file}.script`)
    return buffer.toString()
}