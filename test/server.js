import {describe, it} from 'mocha'
import config from 'dotenv'
import supertest from 'supertest'
import status from 'http-status'

config.config()

const url = 'http://' + process.env.HOST + ':' + process.env.PORT

const api = supertest(url)

describe('Api is up and running', function () {
  it('should be able to open api url', function () {
    api.get('/')
      .expect(status.OK, function (err) {
        console.log(err)
      })
  })
})

describe('Api explorer is up and running', function () {
  it('should be able to open api explorer url', function () {
    api.get('/explorer')
      .expect(status.OK, function (err) {
        console.log(err)
      })
  })
})
