import express from 'express';
import { checkDomain } from './services/domainService.js';

const app = express();
const port = 3000;

app.get('/check/:domain', async (req, res) => {
  try {
    const domain = req.params.domain;
    const result = await checkDomain(domain);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});