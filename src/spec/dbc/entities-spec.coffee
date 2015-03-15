{expect, fixtures, memo, sinon} = require('../spec-helper')

inflect = require('inflected')

entities = require('../../lib/dbc/entities')

describe 'DBC.Entities', ->
  for name of entities
    do (name) ->
      it "exposes #{name} entity", ->
        entity = entities[name]
        filename = inflect.dasherize(inflect.underscore(name))
        expect(entity).to.eq require("../../lib/dbc/entities/#{filename}")
