#!/usr/bin/env node  
//shebang tells my computer how to run the file(which interpreter to use)
import { displayBanner } from '../src/core/displayBanner.js';
import { searchSong } from '../src/commands/search.js';

const args = process.argv.slice(2);
const query = args.join(' ');

if (args.length === 0) {
  displayBanner();
  console.log('Commands:');
  console.log('lyriccli <artist> <song>');
  console.log('More features coming soon...');
} else {
  await searchSong(query);
}

// import axios from "axios";
// import dotenv from "dotenv";
// import { displayBanner } from "../src/core/displayBanner"; //updated import (temporary comment)

// dotenv.config();

// const token = process.env.GENIUS_CLIENT_ACCESS_TOKEN;
// const query = process.argv.slice(2).join(" ");

// //i added env and query validation
// async function searchSong(query) {
//   if (!query) {
//     console.error("❌ Please provide a search query!");
//     console.log("Search command: lyriccli <song name> <artist name>");
//     return;
//   }

//   if (!token) {
//     console.error("❌ GENIUS_CLIENT_ACCESS_TOKEN not found in environment variables!");
//     console.log("Please add your Genius API token to your .env file");
//     return;
//   }

//   try {
//     console.log(`🔍 Searching for: "${query}"`);
//     console.log();
    
//     const res = await axios.get(`https://api.genius.com/search?q=${encodeURIComponent(query)}`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     const hits = res.data.response.hits;
//     // i added more logic to give users feedback
//     if (hits.length === 0) {
//       console.log("❌ No results found for your query.");
//       return;
//     }

//     console.log("🎵 Found the following songs:");
//     console.log("━".repeat(50));
//     hits.slice(0, 10).forEach((hit, index) => {
//       console.log(`${index + 1}. ${hit.result.full_title}`);
//     });
    
//   } catch (error) {
//     console.error("❌ Error searching for songs:", error.message);
//   }
// }

// // Display welcome banner
// // This helps run if it is called directly just shows the banner and prints the controls
// if (process.argv.length === 2) {
//     displayBanner();
//     console.log("Commands")
//     console.log("lyriccli <artist name> <songname> (or vice versa)")
//     console.log("lyriccli <songname>")
//     console.log("lyriccli <artist name>")
//     console.log("More comming soon .... 🔃")
//     // console.log("lyriccli <command> [options]") add more commands
// }

// // Run the search
// searchSong(query);
