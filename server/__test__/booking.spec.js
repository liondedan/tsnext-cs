const supertest = require('supertest');
const app = require('../index');

describe('Testing the movies API', () => {
  it('tests our testing framework if it works', () => {
    expect(4).toBe(4);
  });
});

describe('Testing the movies API', () => {
  it('tests the base route and returns true for status', async () => {
    const response = await supertest(app).get('/api/a');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(true);
  });
});
