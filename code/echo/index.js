'use strict'

module.exports.handler = async (event) => {
  console.log(JSON.stringify(event, null, 2))
  return { event }
}
