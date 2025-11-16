// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "VE3OYN";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["f3de21ff", "mto.js"],
  [
    "#2196f3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    1,
    "R"
  ],
  [
    "#2196f3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    1,
    "R"
  ],
  [
    "#2196f3",
    "TIME.IS",
    "https://time.is/",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WINDS",
    "iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=%C2%B0C&metricWind=km/h&zoom=8&overlay=wind&product=hrrr&level=surface&lat=42.985&lon=-79.262",
    1,
    "R"
  ],
  [
    "#c061cb",
    "ISS",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    3,
    "R"
  ]
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [
  [
    "https://weather.gc.ca/rss/weather/42.99_-79.251_e.xml",
    5
  ]
];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "",
    "https://radar.weather.gov/ridge/standard/KBUF_loop.gif"
  ],
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/SECTOR/cgl/EXTENT3/GOES19-CGL-EXTENT3-600x600.mp4",
    "iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=%C2%B0C&metricWind=km/h&zoom=8&overlay=wind&product=hrrr&level=surface&lat=42.985&lon=-79.262"
  ],
  [
    "",
    "https://www.weather.gov/images/buf/weatherstory.gif",
    "iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=5690532&language=en&region=US&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius"
  ],
  [
    "",
    "iframe|https://globe.adsb.fi/"
  ],
  [
    "",
    "https://511on.ca/map/Cctv/556",
    "https://511on.ca/map/Cctv/2186",
    "https://511on.ca/map/Cctv/2572",
    "https://511on.ca/map/Cctv/2556",
    "https://511on.ca/map/Cctv/545",
    "https://511on.ca/map/Cctv/2258",
    "https://511on.ca/map/Cctv/544",
    "https://511on.ca/map/Cctv/28",
    "https://511on.ca/map/Cctv/574",
    "https://511on.ca/map/Cctv/2420",
    "https://511on.ca/map/Cctv/563",
    "https://511on.ca/map/Cctv/2188",
    "https://511on.ca/map/Cctv/631",
    "https://511on.ca/map/Cctv2572",
    "https://511on.ca/map/Cctv/539"
  ],
  [
    "",
    "https://x-hv1.pivotalweather.com/maps/ndfd/latest/ndfd_24hqpf.us_ne.png",
    "https://x-hv1.pivotalweather.com/maps/ndfd/latest/ndfd_24hsnow.us_ne.png",
    "https://x-hv1.pivotalweather.com/maps/warnings/nwshaz.us_ne.png"
  ],
  [
    "",
    "https://www.wpc.ncep.noaa.gov/Prob_Precip/idss-map/mapgen.php?office=BUF&ptype=prob_sn&summary=true&pointpreferences=BUF&product=expected&2025111221"
  ],
  [
    "",
    "https://www.quebec511.info/Images/Cameras/Montreal/cam/0100084.jpg"
  ],
  [
    "",
    "iframe|https://www.youtube.com/embed/UBTpYGj4cik?autoplay=1&mute=1"
  ],
  [
    "",
    "iframe|https://www.youtube.com/embed/yF7XdpkL34w?autoplay=1&mute=1"
  ],
  [
    "",
    "iframe|https://www.youtube.com/embed/q0WKQjvHfIM?autoplay=1&mute=1"
  ],
  [
    "",
    "iframe|https://www.youtube.com/embed/gIv9J38Dax8?autoplay=1&mute=1"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  60000,
  10000,
  10000,
  3600000,
  5000,
  4000,
  5000,
  60000,
  3600000,
  3600000,
  3600000,
  3600000
];

// CUT END