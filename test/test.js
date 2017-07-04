'use strict'

import {describe, it} from 'mocha'
import supertest from 'supertest'
import status from 'http-status'

var api = supertest('http://127.0.0.1:3000')

describe('Api is up and running', function () {
  it('should be able to open api url', function () {
    api.get('/')
      .expect(status.OK, function (err) {
        console.log(err)
      })
  })
})
