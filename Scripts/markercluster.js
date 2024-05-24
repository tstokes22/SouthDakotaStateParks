// Define an array of park locations and information
var parkLocations = [
  {
    name: "West Whitlock Recreation Area",
    coordinates: [45.12804854931641, -99.87057155133095],
    address: "16157 West Whitlock, Ste A Gettysburg, SD 57442",
    phone: "605.937.8413",
    email: "WhitlockRec@state.sd.us",
  },

  {
    name: "Adams Homestead and Nature Preserve",
    coordinates: [42.53655331211225, -96.53615104853408],
    address: "272 Westshore Drive\nMcCook Lake, SD 57049",
    phone: "605.232.0873",
    email: "AdamsNature@state.sd.us",
  },

  {
    name: "Angostura Recreation Area",
    coordinates: [43.39902055078008, -103.38334561352143],
    address: "13157 N. Angostura Road\nHot Springs, SD 57747",
    phone: "605.745.6996",
    email: "Angostura@state.sd.us",
  },

  {
    name: "Bear Butte State Park",
    coordinates: [44.51724202786651, -103.417262866396],
    address: "20250 Hwy 79\nPO Box 688\nSturgis, SD 57785",
    phone: "605.347.5240",
    email: "BearButte@state.sd.us",
  },

  {
    name: "Custer State Park",
    coordinates: [43.7457644091154, -103.40235805726296],
    address: "13329 US Highway 16A\nCuster, SD 57730",
    phone: "605.394.2693",
    email: "CusterStatePark@state.sd.us",
  },

  {
    name: "Llewellyn Johns Recreation Area",
    coordinates: [45.77961601113191, -102.18348529135903],
    address: "19150 Summerville Road\nShadehill, SD 57653",
    phone: "605.374.5114",
    email: "Shadehill@state.sd.us",
  },

  {
    name: "Rocky Point Recreation Area",
    coordinates: [44.8113138159231, -103.44520560691255],
    address: "18513 Fisherman's Road\nBelle Fourche, SD 57717",
    phone: "605.773.2408",
    email: "RockyPoint@state.sd.us",
  },

  {
    name: "Shadehill Recreation Area",
    coordinates: [45.762408518463296, -102.22938704380262],
    address: "19150 Summerville Road\nShadehill, SD 57638",
    phone: "605.374.5114",
    email: "Shadehill@state.sd.us",
  },

  {
    name: "Sheps Canyon Recreation Area",
    coordinates: [43.32548857383305, -103.44546656275577],
    address: "28150 South Boat Ramp Road\nHot Springs, SD 57747",
    phone: "605.745.6996",
    email: "Angostura@state.sd.us",
  },

  {
    name: "Cow Creek Recreation Area",
    coordinates: [44.560079741514556, -100.4818993812374],
    address: "28229 Cow Creek Road\nPierre, SD 57501",
    phone: "605.773.3117",
    email: "CowCreek@state.sd.us",
  },

  {
    name: "Farm Island Recreation Area",
    coordinates: [44.34552800621869, -100.27982184218317],
    address: "1301 Farm Island Road\nPierre, SD 57501",
    phone: "605.773.2885",
    email: "FarmIsland@state.sd.us",
  },

  {
    name: "Indian Creek Recreation Area",
    coordinates: [45.519511952670165, -100.38619199335639],
    address: "12905 288th Avenue\nMobridge, SD 57601",
    phone: "605.223.5563",
    email: "IndianCreek@state.sd.us",
  },

  {
    name: "Oahe Downstream Recreation Area",
    coordinates: [44.43538250942938, -100.39196767569337],
    address: "20439 Marina Loop Road\nFort Pierre, SD 57532",
    phone: "605.223.7722",
    email: "Oahe@state.sd.us",
  },

  {
    name: "Okobojo Point Recreation Area",
    coordinates: [44.57470361133726, -100.502807292793],
    address: "19425 Okobojo Point Drive\nFort Pierre, SD 57532",
    phone: "605.773.3117",
    email: "OkobojoPoint@state.sd.us",
  },

  {
    name: "Spring Creek Recreation Area",
    coordinates: [44.552239795527264, -100.48408197626209],
    address:
      "C/O Oahe Downstream Recreation Area\n20439 Marina Loop Road\nFort Pierre, SD 57532",
    phone: "605.773.3117",
    email: "SpringCreek@state.sd.us",
  },

  {
    name: "Swan Creek Recreation Area",
    coordinates: [45.3177226073428, -100.26256281619466],
    address:
      "C/O West Whitlock\n16157A West Whitlock Road, Ste A\nGettysburg, SD 57442",
    phone: "605.937.8413",
    email: "WhitlockRec@state.sd.us",
  },

  {
    name: "West Pollock Recreation Area",
    coordinates: [45.888038511184725, -100.33486826637751],
    address: "29199 104th St, Pollock, SD 57648",
    phone: "605.223.5563",
    email: "IndianCreek@state.sd.us",
  },

  {
    name: "Fisher Grove State Park",
    coordinates: [44.8893190883787, -98.35802596218369],
    address: "17290 Fishers Lane\nFrankfort, SD 57440",
    phone: "605.626.3488",
    email: "MinaLake@state.sd.us",
  },

  {
    name: "Hartford Beach State Park",
    coordinates: [45.399563238054476, -96.67284365845296],
    address: "13672 Hartford Beach Road\nCorona, SD 57227",
    phone: "605.432.6374",
    email: "Hartford@state.sd.us",
  },

  {
    name: "Lake Cochrane Recreation Area",
    coordinates: [44.71491754942372, -96.4775438756818],
    address: "3454 Edgewater Drive\nGary, SD 57237",
    phone: "605.882.5200",
    email: "LakeCochrane@state.sd.us",
  },

  {
    name: "Lake Herman State Park",
    coordinates: [43.991863271495276, -97.16511974663062],
    address: "23409 State Park Drive\nMadison, SD 57042",
    phone: "605.256.5003",
    email: "LakeHerman@state.sd.us",
  },

  {
    name: "Lake Poinsett Recreation Area",
    coordinates: [44.55383243552983, -97.08062337553729],
    address: "45617 S.Poinsett Dr.\nArlington, SD 57212",
    phone: "605.983.5085",
    email: "LakePoinsett@state.sd.us",
  },

  {
    name: "Lake Thompson Recreation Area",
    coordinates: [44.32201588468389, -97.44400591617055],
    address: "21176 Flood Club Road\nLake Preston, SD 57249",
    phone: "605.847.4893",
    email: "LakeThompson@state.sd.us",
  },

  {
    name: "Mina Lake Recreation Area",
    coordinates: [45.49882081685777, -98.42315719874578],
    address: "402 Park Avenue\nMina, SD 57451",
    phone: "605.626.3488",
    email: "MinaLake@state.sd.us",
  },

  {
    name: "Oakwood Lakes State Park",
    coordinates: [44.45007422596991, -96.98214491801996],
    address: "20247 Oakwood Drive\nBruce, SD 57220",
    phone: "605.627.5441",
    email: "OakwoodLakes@state.sd.us",
  },

  {
    name: "Pelican Lake Recreation Area",
    coordinates: [44.85587907008169, -97.20632590080294],
    address: "17450 450th Avenue\nWatertown, SD 57201",
    phone: "605.882.5200",
    email: "PelicanLake@state.sd.us",
  },

  {
    name: "Pickerel Lake Recreation Area",
    coordinates: [45.50323831280646, -97.28080941696928],
    address: "12980 446th Avenue\nGrenville, SD 57239",
    phone: "605.910.4515",
    email: "PickerelLake@state.sd.us",
  },

  {
    name: "Richmond Lake Recreation Area",
    coordinates: [45.5732431879943, -98.49084861404428],
    address:
      "12800 379th Avenue - Campground\n37908 Youth Camp Road - Office\nAberdeen, SD 57401",
    phone: "605.626.3488",
    email: "RichmondLake@state.sd.us",
  },

  {
    name: "Roy Lake State Park",
    coordinates: [45.70985821311198, -97.44826548686918],
    address: "11545 Northside Drive\nLake City, SD 57247",
    phone: "605.910.4521",
    email: "RoyLake@state.sd.us",
  },

  {
    name: "Sandy Shore Recreation Area",
    coordinates: [44.894445678364505, -97.24268531800158],
    address: "1100 South Lake Drive\nWatertown, SD 57201",
    phone: "605.882.5200",
    email: "SandyShore@state.sd.us",
  },

  {
    name: "Sica Hollow State Park",
    coordinates: [45.739674404338054, -97.23131584494773],
    address: "44950 Park Road\nSisseton, SD 57262",
    phone: "605.910.4521",
    email: "RoyLake@state.sd.us",
  },

  {
    name: "Walker's Point Recreation Area",
    coordinates: [44.01234403542616, -97.00371633097964],
    address: "6431 Walker's Point Drive\nWentworth, SD 57075",
    phone: "605.256.5003",
    email: "WalkersPoint@state.sd.us",
  },

  {
    name: "Big Sioux Recreation Area",
    coordinates: [43.573263230766834, -96.59436572783731],
    address: "410 West Park Street\nBrandon, SD 57005",
    phone: "605.773.8106",
    email: "BigSioux@state.sd.us",
  },

  {
    name: "Buryanek Recreation Area",
    coordinates: [43.45028401354046, -99.08634441820388],
    address: "27450 Buryanek Road\nBurke, SD 57523",
    phone: "605.337.2587",
    email: "SnakeCreek@state.sd.us",
  },

  {
    name: "Chief White Crane Recreation Area",
    coordinates: [42.855512246281414, -97.46084605299319],
    address: "31323 Toe Road\nYankton, SD 57078",
    phone: "605.668.2985",
    email: "Lewis-Clark@state.sd.us",
  },

  {
    name: "Lake Vermillion Recreation Area",
    coordinates: [43.61374385030941, -97.13254603143889],
    address: "26140 451st Ave\nCanistota, SD 57012",
    phone: "605.773.5877",
    email: "LakeVermillion@state.sd.us",
  },

  {
    name: "Lewis and Clark Recreation Area",
    coordinates: [42.86918561025559, -97.51813601590985],
    address: "43349 SD Hwy 52\nYankton, SD 57078",
    phone: "605.668.2985",
    email: "Lewis-Clark@state.sd.us",
  },

  {
    name: "Newton Hills State Park",
    coordinates: [43.21906551638903, -96.5692630180702],
    address: "28767 482nd Avenue\nCanton, SD 57013",
    phone: "605.987.2263",
    email: "NewtonHills@state.sd.us",
  },

  {
    name: "North Point Recreation Area",
    coordinates: [43.08327771020798, -98.56728334742002],
    address: "38180 297th Avenue\nLake Andes, SD 57356",
    phone: "605.487.7046",
    email: "NorthPoint@state.sd.us",
  },

  {
    name: "Palisades State Park",
    coordinates: [43.69096788437454, -96.5161549566689],
    address: "48422 256th St\nGarretson, SD 57030",
    phone: "605.773.6245",
    email: "PalisadesPark@state.sd.us",
  },

  {
    name: "Pease Creek Recreation Area",
    coordinates: [43.14033560120528, -98.73222864320033],
    address: "37270 293rd Street\nGeddes, SD 57342",
    phone: "605.487.7046",
    email: "NorthPoint@state.sd.us",
  },

  {
    name: "Pierson Ranch Recreation Area",
    coordinates: [42.87339350229394, -97.48519625299248],
    address: "31144 Toe Road\nYankton, SD 57078",
    phone: "605.668.2985",
    email: "Lewis-Clark@state.sd.us",
  },

  {
    name: "Platte Creek Recreation Area",
    coordinates: [43.29634201425911, -99.00015016646634],
    address: "35910 282nd Street\nPlatte, SD 57369",
    phone: "605.337.2587",
    email: "SnakeCreek@state.sd.us",
  },

  {
    name: "Randall Creek Recreation Area",
    coordinates: [43.05967546383055, -98.5308601976522],
    address: "136 Randall Creek Road\nPickstown, SD 57367",
    phone: "605.487.7046",
    email: "NorthPoint@state.sd.us",
  },

  {
    name: "Snake Creek Recreation Area",
    coordinates: [43.39054447398393, -99.11928214319026],
    address: "35316 SD Hwy 44\nPlatte, SD 57369",
    phone: "605.337.2587",
    email: "SnakeCreek@state.sd.us",
  },

  {
    name: "Springfield Recreation Area",
    coordinates: [42.863243959573204, -97.87768420510156],
    address: "1412 Boat Basin Drive\nSpringfield, SD 57062",
    phone: "605.668.2985",
    email: "SpringfieldRec@state.sd.us",
  },

  {
    name: "Union Grove State Park",
    coordinates: [43.02334188550528, -96.53634775696375],
    address: "30828 471st Avenue\nBeresford, SD 57004",
    phone: "605.987.2263",
    email: "NewtonHills@state.sd.us",
  },
];

var parkMarkers = [];
parkLocations.forEach(function (park) {
  var marker = L.marker(park.coordinates, {
    riseOnHover: true, // Enable rise on hover
    icon: L.icon({
      iconUrl: "/Images/favIcon-32x32_15.png", // Path to your image file
      iconSize: [24, 24], // Size of the icon
    }),
  })
    .addTo(map)
    .bindPopup(
      "<b>" +
        park.name +
        "</b><br/>" +
        park.address +
        "<br/>" +
        park.phone +
        "<br/>" +
        park.email
    )
    .bindTooltip(park.name, {
      permanent: true,
      direction: "auto",
      opacity: 0.8,
      className: "custom-tooltip",
      offset: L.point(15, 0),
    });
});

function style(feature) {
  return {
    fillColor: "#becac2",
    weight: 2,
    opacity: 1,
    color: "#b0b1b1",
    fillOpacity: 0.7,
  };
}

const geojson = L.geoJson(statesData, { style: style }).addTo(map);