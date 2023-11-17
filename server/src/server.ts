import app from './index';
import 'dotenv/config';
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on http://localhost:${port}`);
});

export default server;
