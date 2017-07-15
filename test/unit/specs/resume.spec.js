import ZSchema from 'z-schema'
import resume from '../../../src/resume/maartenpaauw.json'
import schema from 'resume-schema/schema.json'

describe('JSON Resume', () => {
  it('Should be a valid json resume file', () => {
    new ZSchema().validate(resume, schema, (err, valid) => {
      expect(err).to.be.an('undefined')
      expect(valid).to.be.true
    })
  })
})
