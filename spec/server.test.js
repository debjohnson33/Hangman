const supertest = require('supertest');

const request = supertest('http://localhost:3000');

describe('GET route for all words', () => {
  it('should successfully access GET route', (done) => {
    request.get('/api/words/all').expect(200).expect(res => {
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('should return a 404 if all is not in the request', (done) => {
    request.get('/api/words').expect(404).expect(res => {
      expect(res.status).toEqual(404);
    }).end(done);
  })
});