export const customTheme = {
  // CSS HEX
  "--mulled-wine": "#4c4056",
  "--eunry": "#cba8a0",
  "--bazaar": "#96727b",
  "--calypso": "#3a6698",
  "--ship-cove": "#6e8cb8",
  "--cocoa-brown": "#311c1f",
  "--hit-gray": "#a2b1b6",
  "--hoki": "#5f819a",
  "--blush": "#bd4159",

  // SCSS HEX
  "$mulled-wine": "#4c4056",
  $eunry: "#cba8a0",
  $bazaar: "#96727b",
  $calypso: "#3a6698",
  "$ship-cove": "#6e8cb8",
  "$cocoa-brown": "#311c1f",
  "$hit-gray": "#a2b1b6",
  $hoki: "#5f819a",
  $blush: "#bd4159",

  // SCSS RGB
  "--mulled-wine-rgb": "rgba(76, 64, 86, 1)",
  "--eunry-rgb": "rgba(203, 168, 160, 1)",
  "--bazaar-rgb": "rgba(150, 114, 123, 1)",
  "--calypso-rgb": "rgba(58, 102, 152, 1)",
  "--ship-cove-rgb": "rgba(110, 140, 184, 1)",
  "--cocoa-brown-rgb": "rgba(49, 28, 31, 1)",
  "--hit-gray-rgb": "rgba(162, 177, 182, 1)",
  "--hoki-rgb": "rgba(95, 129, 154, 1)",
  "--blush-rgb": "rgba(189, 65, 89, 1)",
};

const naviBlueTheme = {};
const grayTheme = {};

// const lightTheme = {
//   // NavStyle.js
//   background: "#e0e0e0",
//   boxShadow: "22px 22px 45px #bebebe, -22px -22px 45px #ffffff",
//   // ToolCardHeader
//   color: "rgb(85, 85, 85)",
//   // CardDetailsContainer
//   border: "1px solid rgb(53, 53, 53)",
//   textAndButColor: "rgb(0, 0, 0)",
//   btnOutlineColor: " 1px solid rgb(0, 0, 0)",
// };

const lightTheme = {
palette : {
  common : {
    black: "rgb(0, 0, 0)",  
    white : "#ffff"
  }, 
  primary : {
    main: "rgb(53, 53, 53)",
    light : "rgb(85, 85, 85)"
  },
  text : {
     secondary: "rgb(53, 53, 53)", 
     primary: "rgb(0, 0, 0)",
  }, 

    background : "#ffff", 
    color : "rgb(0,0,0)"
  
 }
};



export const themes = {
  naviBlueTheme,
  grayTheme,
  lightTheme,
};
