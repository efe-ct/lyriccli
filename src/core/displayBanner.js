import figlet from "figlet";
import gradient from "gradient-string";

//finally changed directory structure (temporary comment)
export function displayBanner() {
    const banner = figlet.textSync('LyricCLI',{
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
    console.log(gradient.rainbow(banner));
    
}