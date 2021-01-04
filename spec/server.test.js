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
  });
});

describe('GET route for user', () => {
  it('should successfully access GET route for user', (done) => {
    request.get('/api/users/greatOne').expect(200).expect(res => {
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('should return a 404 if the username is not in the request', (done) => {
    request.get('/api/users').expect(404).expect(res => {
      expect(res.status).toEqual(404);
    }).end(done);
  });

  it('should return score for user', (done) => {
    request.get('/api/users/greatOne/score').expect(200).expect(res => {
      expect(res.body.score).toEqual(20); // testing specifically for greatOne user
    }).end(done); // would need to change test if no greatOne or if score changes
  });
});

describe('POST route for user', () => {
  it('should successfully add a new user', (done) => {
    request.post('/api/users/shepherd').expect(200).expect(res => {
      expect(res.status).toEqual(200); // need to change username each time
    }).end(done); // otherwise the user will already be there
  });

  it('should return a 500 if the username is already in use', (done) => {
    request.post('/api/users/greatOne').expect(500).expect(res => {
      expect(res.status).toEqual(500);
    }).end(done);
  });
});

describe('PUT route for user score', () => {
  it('should successfully change user score', (done) => {
    request.put('/api/users/shepherd/10').expect(200).expect(res => {
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('should return a 404 if the score is not in the request', (done) => {
    request.put('/api/users/greatOne').expect(404).expect(res => {
      expect(res.status).toEqual(404);
    }).end(done);
  });
});