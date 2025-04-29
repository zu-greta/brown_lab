// fetch_and_save.js
import fs from "fs";
import axios from "axios";

async function fetchAndSave() {
  try {
    const response = await axios.get("http://localhost:3001/api/publications");
    const data = response.data;
    fs.writeFileSync("../src/data/publications.json", JSON.stringify(data, null, 2));
    console.log("Publications saved to src/data/publications.json");
  } catch (error) {
    console.error("Failed to fetch and save publications:", error.message);
  }
}

fetchAndSave();
