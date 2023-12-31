# Flexba Work Sample - Annabelle

# To begin:

## Update .env.template files in client and server

1. Rename the `.env.template` file as `.env` in both directories.

2. Open both `client/.env` and `server/.env` and add your test mode API keys.

3. In client env: input server url - ex: http://localhost:3000

4. In server env: input the same port number - ex: 3000

## Run Projects

- open 2 seperate terminals

### Server Terminal

```bash
# Navigate into the server directory
cd server

# Install the dependencies
npm install

# Compile the TypeScript to JavaScript code
npm run build

# Run the backend server
npm run dev

```

### Client Terminal

```bash
# Navigate into the client directory
cd client

# Install the dependencies
npm install

# Run the frontend server
npm run dev

# To run build:
npm run build
```

### Testing

```bash
# Navigate into the server directory
cd server

# Run tests
npm run test
```

# Notes:

## Tech Stack

- Typescript
- Backend - Node.js, Express.js
- Frontend - React w/ Vite
- Styling/ UI - Tailwind CSS, Shadcn/ui
- Testing - Jest, Supertest

## MVP

- Created a full stack Typescript application using Flexpa Link and Flexpa API
- Created components to display user profile and some information from patient
  EOB

## Stretch Goals

- Full testing suite for front and back end
- Enhanced styling to be more in line with Flexpa's branding
- Parce through more pages/information from patient records
