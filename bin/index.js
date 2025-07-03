#!/usr/bin/env node //To those who don't know this is a hashbang or as google said aka shebang Tells my computer how to run the file(which interpreter to use)
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.GENIUS_CLIENT_ACCESS_TOKEN;
const query = process.argv.slice(2).join(" ");

async function searchSong(query) {
  const res = await axios.get(`https://api.genius.com/search?q=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const hits = res.data.response.hits;
  console.log(hits.map(hit => hit.result.full_title));
}

searchSong(query);