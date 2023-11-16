import request from 'supertest';
import app from '../src/index';

import dotenv from 'dotenv';

dotenv.config();

describe('Test the root path', () => {
  test('It should respond with a status of 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
