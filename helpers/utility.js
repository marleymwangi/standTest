export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const isEmpty = (e) => {
  switch (e) {
    case "":
    case null:
    case false:
    case undefined:
    case Object.keys(e).length === 0:
    case Object.getPrototypeOf(e) === Object.prototype:
      return true;
    default:
      return false;
  }
};

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

export const brands = [
  { text: "Coca Cola", value: "cocacola" },
  { text: "Bidco", value: "bidco" },
  { text: "Unilever", value: "unilever" },
  { text: "Procter & Gamble", value: "procterngamble" },
  { text: "Brookside", value: "brookside" },
  { text: "EABL", value: "eabl" },
  { text: "Dairyland", value: "dairyland" },
  { text: "Pernod Ricard", value: "pernodricard" },
  { text: "Kenya Originals", value: "kenyaoriginals" },
  { text: "Other", value: "other" }
];
export const productsDict = {
  cocacola: [
    { text: "Coca-Cola", value: "cocacola" },
    { text: "Sprite", value: "sprite" },
    { text: "Fanta", value: "fanta" },
    { text: "Stoney", value: "stoney" },
    { text: "Minute maid", value: "minutemaid" },
    { text: "Dasani", value: "dasani" },
    { text: "Schweppes", value: "schweppes" },
    { text: "Novida", value: "novida" }
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
    { text: "Msafi", value: "msafi" }
  ],
  unilever:[
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
    { text: "Ben & Jerry’s", value: "bennjerrys" }
  ],
  procterngamble:[
    { text: "Ariel", value: "ariel" },
    { text: "Downy", value: "downy" },
    { text: "Tide", value: "tide" },
    { text: "bounty", value: "bounty" },
    { text: "Gilette", value: "gilette" },
    { text: "Old Spice", value: "oldspice" },
    { text: "Dawn", value: "dawn" },
    { text: "Febreze", value: "Febreze" },
    { text: "Mr Clean", value: "mrclean" },
    { text: "Oral B", value: "oralb" }
  ],
  brookside:[
    { text: "Lala", value: "lala" },
  ]
};