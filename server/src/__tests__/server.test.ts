import request from 'supertest';
import app from '../index';

import dotenv from 'dotenv';

dotenv.config();

describe('Test the root path', () => {
  test('It should respond with a status of 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
  test('It gets a content type of text', async () => {
    const response = await request(app).get('/');
    expect(response.headers['content-type']).toMatch(/text/);
  });
});

describe('Test the 404 response handle', () => {
  test('It should catch any unkown endpoints', async () => {
    // Add a temporary test route that throws an error
    const response = await request(app).get('/error');
    expect(response.statusCode).toBe(404);
  });

  test("It should display the text: Sorry can't find that page!", async () => {
    const response = await request(app).get('/error');
    expect(response.text).toBe("Sorry can't find that page!");
  });
});
