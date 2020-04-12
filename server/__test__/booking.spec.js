const supertest = require('supertest');
import { server } from '../index';

const agent = supertest.agent(server);

describe('Testing the movies API', () => {
  it('tests our testing framework if it works', () => {
    expect(4).toBe(4);
  });
});

describe('Testing the movies API', () => {
  it('tests the base route and returns true for status', async () => {
    // agent.get('/api/a').expect(200);
    agent.get('/api/a').expect(res => {
      asset.equal(res.body[a], '2');
    });
  });
});
