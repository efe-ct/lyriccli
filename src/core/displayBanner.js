import figlet from "figlet";
import gradient from "gradient-string";

//finally changed directory structure (temporary comment)
export function displayBanner() {
    const banner = figlet.textSync('LyricCLI',{
        font: '3D-ASCII',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted'
    });
    console.log(gradient.rainbow(banner));
    
}