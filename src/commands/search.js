import axios from 'axios';
import { select } from '@clack/prompts';
import dotenv from 'dotenv';

dotenv.config();
const token = process.env.GENIUS_CLIENT_ACCESS_TOKEN;

export async function searchSong(query) {
  //token and query validation
  if (!query) {
    console.error('❌ Please provide a search query.');
    console.log("Search command: lyriccli <song name> <artist name>");
    return;
  }

  if (!token) {
    console.error('❌ Missing Genius access token.');
    console.log("Please add your Genius API token to your .env file");
    return;
  }

  console.log(`🔍 Searching Genius for "${query}"...`);
  try {
    const res = await axios.get(`https://api.genius.com/search?q=${encodeURIComponent(query)}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // logic to give users feedback (no search results)
    const hits = res.data.response.hits;
    if (hits.length === 0) {
      console.log('❌ No results found.');
      return;
    }

    const options = hits.slice(0, 10).map((hit, i) => ({
      value: hit.result.url, // or ID if i end up using scraping later
      label: `${i + 1}. ${hit.result.full_title}`
    }));

    const selected = await select({
      message: '🎵 Choose a song:',
      options
    });

    console.log(`\n🎧 You selected:\n${selected}\n`);
    // TODO: Fetch and display lyrics using selected URL or ID
  } catch (err) {
    console.error('❌ Error searching Genius:', err.message);
  }
}
