import figlet from "figlet";
import gradient from "gradient-string";

//used to export the banner with figlet currenly calling it figlet but it will be changed to banner
export function displayBanner() {
    const banner = figlet.textSync('LyricCLI',{
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
    console.log(gradient.rainbow(banner));
    
}