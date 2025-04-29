// api/publications.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://serpapi.com/search.json', {
      params: {
        engine: 'google_scholar_author',
        author_id: 'OeSNGTQAAAAJ',
        api_key: process.env.SERPAPI_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching publications:', error.message);
    res.status(500).json({ error: 'Failed to fetch publications' });
  }
}