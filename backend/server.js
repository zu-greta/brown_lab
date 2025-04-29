import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

import dotenv from "dotenv";
dotenv.config();
// const SERPAPI_KEY = "0b3f9ba04aa80711c599d3b8724b168e558976c9fe04fa4ad09cc573f7b2d6a3";

app.use(cors()); 

app.get("/api/publications", async (req, res) => {
  try {
    const response = await axios.get(`https://serpapi.com/search.json`, {
      params: {
        engine: "google_scholar_author",
        author_id: "OeSNGTQAAAAJ",
        api_key: process.env.SERPAPI_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching publications:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch publications" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
