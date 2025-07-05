#!/usr/bin/env node  
//shebang tells my computer how to run the file(which interpreter to use)
import { displayBanner } from '../src/core/displayBanner.js';
import { searchSong } from '../src/commands/search.js';

const args = process.argv.slice(2);
const query = args.join(' ');
// used to be const query = process.argv.slice(2).join(" ");

if (args.length === 0) {
  displayBanner();
  console.log('Commands:');
  console.log("lyriccli <artist> <song> | (or vice versa)")
  console.log('More features coming soon...');
} else {
  await searchSong(query);
}


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
//     console.log("lyriccli <songname>")
//     console.log("lyriccli <artist name>")
//     console.log("More comming soon .... 🔃")
//     // console.log("lyriccli <command> [options]") add more commands
// }

// // Run the search
// searchSong(query);
