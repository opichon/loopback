import {describe, it} from 'mocha'
import app from '../dist/server'
import status from 'http-status'
import supertest from 'supertest'

const request = supertest(app)

describe('Api is up and running', function () {
  it('should be able to open api url', function () {
    request.get('/')
      .expect(status.OK, function (err) {
        console.log(err)
      })
  })
})

describe('Api explorer is up and running', function () {
  it('should be able to open api explorer url', function () {
    request.get('/explorer/')
      .expect(status.OK, function (err) {
        console.log(err)
      })
  })
})
