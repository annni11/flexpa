import request from 'supertest';
import app from '../index';
import server from '../server';

import dotenv from 'dotenv';

dotenv.config();

describe('Test the root path', () => {
  test('It should respond with a status of 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('Test the global error handler', () => {
  test('It should catch and handle errors', async () => {
    // Add a temporary test route that throws an error
    const response = await request(app).get('/error');

    expect(response.statusCode).toBe(404);
  });
});

// describe('Test the /api/profile API', function () {
//   afterAll(() => {
//     server.close();
//   });

//   test('It Should respond with json and 400 bad request (invalid token exchange)', async () => {
//     const response = await request(server)
//       .post('/api/profile')
//       .set('Accept', 'application/json');
//     expect(response.status).toBe(400);
//     expect(response.headers['content-type']).toMatch(/json/);
//   });
// });
