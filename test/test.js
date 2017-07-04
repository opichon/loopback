'use strict'

import {describe, it} from 'mocha'
import supertest from 'supertest'
import status from 'http-status'

var api = supertest('http://localhost:3000')

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
