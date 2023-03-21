export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const isEmpty = (e) => {
  if (e && Array.isArray(e)) {
    return e.length < 1 ? true : false;
  } else if (typeof e === "object") {
    return isObjEmpty(e);
  } else {
    switch (e) {
      case "":
      case null:
      case false:
      case undefined:
        return true;
      default:
        return false;
    }
  }
};

function isObjEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

export const makeid = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const formatSubjectNames = (sub) => {
  switch (sub) {
    case "math":
      return "Mathematics";
    case "science":
      return "Science";
    case "english":
      return "English";
    case "swahili":
      return "Kiswahili";
    case "religious":
      return "Religious Education";
    case "hygiene":
      return "Hygiene";
    case "evironment":
      return "Environment";
    case "career":
      return "Career";
    default:
      break;
  }
};

export const verifyNumber = (number) => {
  var reg = /^\d+$/;
  return reg.test(number);
};

export const wasteTypes = [
  { text: "Paper", value: "paper" },
  { text: "Glass", value: "glass" },
  { text: "Metal", value: "metal" },
  { text: "Plastic 1", value: "plastic1" },
  { text: "Plastic 2", value: "plastic2" },
  { text: "Plastic 3", value: "plastic3" },
  { text: "Plastic 4", value: "plastic4" },
  { text: "Plastic 5", value: "plastic5" },
  { text: "Plastic 6", value: "plastic6" },
  { text: "Plastic 7", value: "plastic7" },
];

//find brand from brands array using value and return text
export function findBrand(value) {
  let brand = brands.find((b) => b.value === value);
  return brand.text;
}

//find product from productsDict using value and return text
export function findProduct(brnd, value) {
  let product = productsDict[brnd].find((p) => p.value === value);
  return product.text;
}

export const brands = [
  { text: "Coca Cola", value: "cocacola" },
  { text: "EABL Beers", value: "eablbeers" },
  { text: "EABL Spirits", value: "eablspirits" },
  { text: "KWAL Spirits", value: "kwalspirits" },
  { text: "KWAL Wines", value: "kwalwines" },
  { text: "KWAL Cider", value: "kwalcider" },
  { text: "Excel", value: "excel" },
  { text: "Delamere Premium", value: "delamere" },
  { text: "Kevian", value: "kevian" },
  { text: "Water", value: "water" },
  { text: "Devyani Food", value: "devyani" },
  { text: "Bounty", value: "bounty" },
  { text: "London Distillers", value: "london" },
  { text: "Bidco", value: "bidco" },
  { text: "Unilever", value: "unilever" },
  { text: "Procter & Gamble", value: "procterngamble" },
  { text: "Brookside", value: "brookside" },  
  { text: "Dairyland", value: "dairyland" },
  { text: "Pernod Ricard", value: "pernodricard" },
  { text: "Kenya Originals", value: "kenyaoriginals" },
];

export const productsDict = {
  cocacola: [
    { text: "Fanta", value: "fanta" },
    { text: "Coca-Cola", value: "cocacola" },
    { text: "Sprite", value: "sprite" },
    { text: "Stoney", value: "stoney" },
    { text: "Krest", value: "krest" },
    { text: "Minute Maid", value: "minutemaid" },
    { text: "Monster", value: "monster" },
    { text: "Novida", value: "novida" },
    { text: "Schweppes", value: "schweppes" },
    { text: "Keringet", value: "keringet" },
    { text: "Predator", value: "predator" },
    { text: "Power Play", value: "powerplay" },
    { text: "Dasani", value: "dasani" },
  ],
  eablbeers: [
    { text: "Tusker", value: "tusker" },
    { text: "Tusker Malt", value: "tuskermalt" },
    { text: "Tusker Lite", value: "tuskerlite" },
    { text: "Tusker Cider", value: "tuskercider" },
    { text: "Guinness", value: "guinness" },
    { text: "Guinness Smooth", value: "guinnesssmooth" },
    { text: "Pilsner Lager", value: "pilsnerlager" },
    { text: "Whitecap", value: "whitecap" },
    { text: "Balozi", value: "balozi" },
  ],
  eablspirits: [
    { text: "Chrome", value: "chrome" },
    { text: "Gilbeys", value: "gilbeys" },
    { text: "Gordons", value: "gordons" },
    { text: "Kenya Cane", value: "kenyacane" },
    { text: "Smirnoff", value: "smirnoff" },
    { text: "Snapp", value: "snapp" },
    { text: "Tanqueray", value: "tanqueray" },
    { text: "Johnnie Walker", value: "johnniewalker" },
    { text: "Captain Morgan", value: "captainmorgan" },
    { text: "Baileys", value: "baileys" },
    { text: "Black & White", value: "blackandwhite" },
    { text: "J & B", value: "jb" },
    { text: "McDowell’s", value: "mcdowells" },
    { text: "Richott", value: "richott" },
    { text: "VAT 69", value: "vat69" },
    { text: "V & A", value: "va" },
  ],
  kwalspirits: [
    { text: "County", value: "county" },
    { text: "Viceroy", value: "viceroy" },
    { text: "Kibao", value: "kibao" },
    { text: "Hunter’s Choice", value: "hunterschoice" },
    { text: "Scottish Leader", value: "scottishleader" },
    { text: "Caribia", value: "caribia" },
    { text: "Cruz", value: "cruz" },
    { text: "Best Gin", value: "bestgin" },
    { text: "Best Cream", value: "bestcream" },
    { text: "Best Whisky", value: "bestwhisky" },
  ],
  kwalwines: [
    { text: "Cellar Cask", value: "cellarcask" },
    { text: "Caprice", value: "caprice" },
    { text: "Drostdy-Hof", value: "drostdyhof" },
    { text: "Durbanville Hills", value: "durbanvillehills" },
    { text: "Nederburg", value: "nederburg" },
    { text: "4th Street", value: "4thstreet" },
    { text: "Alto Wine", value: "altowine" },
  ],
  kwalcider: [
    { text: "Savannah Dry", value: "savannahdry" },
    { text: "Kingfisher Strawberry", value: "kingfisherstrawberry" },
    { text: "Kingfisher Light", value: "kingfisherlight" },
    { text: "Hunters Gold", value: "huntersgold" },
    { text: "Hunters Dry", value: "huntersdry" },
  ],
  excel: [
    { text: "Quencher Life (water)", value: "quencherlife" },
    { text: "Quencher (juice)", value: "quencher" },
    { text: "Raha (drinking chocolate)", value: "raha" },
    { text: "Go Frut", value: "gofrut" },
    { text: "Fruit Full", value: "fruitfull" },
  ],
  delamere: [
    { text: "Strawberry", value: "strawberry" },
    { text: "Apricot Orange & Honey", value: "apricotorangeandhoney" },
    { text: "Chocolate chips", value: "chocolatechips" },
    { text: "Wild Berries", value: "wildberries" },
    { text: "Pineapple Coconut", value: "pineapplecoconut" },
    { text: "Lemon Biscuit", value: "lemonbiscuit" },
    { text: "Vanilla Pods", value: "vanillapods" },
    { text: "Pear Caramel", value: "pearcaramel" },
  ],
  kevian: [
    { text: "Afia", value: "afia" },
    { text: "Mt. Kenyan (water)", value: "mtkenyan" },
    { text: "Pick n Peel", value: "picknpeel" },
  ],
  water: [
    { text: "Aquamist", value: "aquamist" },
    { text: "AquaChem", value: "aquachem" },
    { text: "Deeprock Aqua", value: "deeprockaqua" },
    { text: "Glacier", value: "glacier" },
    { text: "Other", value: "other" },
  ],
  devyani: [
    { text: "Daima Milk", value: "daimamilk" },
    { text: "Daima Yoghurt", value: "daimayoghurt" },
    { text: "Daima Milk Powder", value: "daimamilkpowder" },
    { text: "Aquaclear", value: "aquaclear" },
  ],
  bounty: [
    { text: "Safari", value: "safari" },
    { text: "Rendezvous", value: "rendezvous" },
    { text: "Keror", value: "keror" },
    { text: "Exquisite", value: "exquisite" },
  ],
  bidco: [
    { text: "Elianto", value: "elianto" },
    { text: "SoyaGold", value: "soyagold" },
    { text: "SunGold", value: "sungold" },
    { text: "Kimbo", value: "kimbo" },
    { text: "Olive Gold", value: "olivegold" },
    { text: "Golden Fry", value: "goldenfry" },
    { text: "Ufuta", value: "ufuta" },
    { text: "Bahari", value: "bahari" },
    { text: "Chipo", value: "chipo" },
    { text: "Mallo", value: "mallo" },
    { text: "Cowboy", value: "cowboy" },
    { text: "Chipsy", value: "chipsy" },
    { text: "Gold Band", value: "goldband" },
    { text: "Germonil", value: "germonil" },
    { text: "Nuru", value: "nuru" },
    { text: "Gental", value: "gental" },
    { text: "Msafi", value: "msafi" },
  ],
  unilever: [
    { text: "Dove", value: "dove" },
    { text: "Vaseline", value: "vaseline" },
    { text: "Sunsilk", value: "sunsilk" },
    { text: "Liquid I.V", value: "liquidiv" },
    { text: "Axe", value: "axe" },
    { text: "Lifebuoy", value: "lifebuoy" },
    { text: "Lux", value: "lux" },
    { text: "Rexona", value: "rexona" },
    { text: "Comfort", value: "comfort" },
    { text: "Omo", value: "omo" },
    { text: "Knorr", value: "knorr" },
    { text: "Hellmann’s", value: "hellmanns" },
    { text: "Horlicks", value: "horlicks" },
    { text: "Ben & Jerry’s", value: "bennjerrys" },
  ],
  procterngamble: [
    { text: "Ariel", value: "ariel" },
    { text: "Downy", value: "downy" },
    { text: "Tide", value: "tide" },
    { text: "bounty", value: "bounty" },
    { text: "Gilette", value: "gilette" },
    { text: "Old Spice", value: "oldspice" },
    { text: "Dawn", value: "dawn" },
    { text: "Febreze", value: "Febreze" },
    { text: "Mr Clean", value: "mrclean" },
    { text: "Oral B", value: "oralb" },
  ],
  brookside: [{ text: "Lala", value: "lala" }],
  other: [{ text: "Other", value: "other" }],
};