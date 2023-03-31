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
  { text: "Coca-Cola", value: "cocacola" },
  { text: "Kenya Originals", value: "kenyaoriginals" },
  { text: "Pernod Ricard", value: "pernodricard" },
  { text: "EABL Beers", value: "eablbeers" },
  { text: "EABL Spirits", value: "eablspirits" },
  { text: "KWAL Spirits", value: "kwalspirits" },
  { text: "KWAL Wines", value: "kwalwines" },
  { text: "KWAL Cider", value: "kwalcider" },
  { text: "Bounty", value: "bounty" },
  { text: "London Distillers", value: "london" },
  { text: "Procter & Gamble", value: "procterngamble" },
  { text: "Domaine Kenya", value: "domaine" },
  { text: "Viva Global", value: "viva" },
  { text: "Excel", value: "excel" },
  { text: "Delamere Premium", value: "delamere" },
  { text: "Kevian", value: "kevian" },
  { text: "Water", value: "water" },
  { text: "Suntory", value: "suntory" },
  { text: "Devyani Food", value: "devyani" },
  { text: "Bidco", value: "bidco" },
  { text: "Unilever", value: "unilever" },
  { text: "Brookside", value: "brookside" },
  { text: "Dairyland", value: "dairyland" },
  { text: "Bio Foods", value: "biofoods" },
  { text: "Premier Foods", value: "premierfoods" },
  { text: "Beiersdorf", value: "beiersdorf" },  
  { text: "Colgate Palmolive", value: "colgatepalmolive" },
  { text: "PZ Cussons", value: "pzcussons" },
  { text: "Highlands", value: "highlands" },
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
    { text: "Triple Ace Vodka", value: "tripleacevodka" },
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
    { text: "Delamere Strawberry", value: "delamerestrawberry" },
    { text: "Delamere Apricot Orange & Honey", value: "delamereapricotorangeandhoney" },
    { text: "Delamere Chocolate chips", value: "delamerechocolatechips" },
    { text: "Delamere Wild Berries", value: "delamerewildberries" },
    { text: "Delamere Pineapple Coconut", value: "delamerepineapplecoconut" },
    { text: "Delamere Lemon Biscuit", value: "delamerelemonbiscuit" },
    { text: "Delamere Vanilla Pods", value: "delamerevanillapods" },
    { text: "Delamere Pear Caramel", value: "delamerepearcaramel" },
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
    { text: "Safari Lemonade", value: "safarilemonade" },
    { text: "Safari Orange", value: "safariorange" },
    { text: "Safari King Water", value: "safarikingwater" },
    { text: "Safari King Club Soda", value: "safarikingclubsoda" },
    { text: "Rendezvous", value: "rendezvous" },
    { text: "Keror", value: "keror" },
    { text: "Exquisite", value: "exquisite" },
  ],
  london: [
    { text: "Safari", value: "safari" },
    { text: "Meankins", value: "meankins" },
    { text: "Napoleon", value: "napoleon" },
    { text: "Madafu Liqueur", value: "madafuliqueur" },
    { text: "Kahawa Liqueur", value: "kahawaliqueur" },
    { text: "Kienyeji", value: "kienyeji" },
    { text: "Oak Cask", value: "oakcask" },
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
    { text: "Pampers", value: "pampers" },
    { text: "Ariel", value: "ariel" },
    { text: "Downy", value: "downy" },
    { text: "Tide", value: "tide" },
    { text: "Bounty", value: "bounty" },
    { text: "Puffs", value: "puffs" },
    { text: "Always", value: "always" },
    { text: "Tampax", value: "tampax" },
    { text: "Gillette", value: "gillette" },
    { text: "Old Spice", value: "oldspice" },
    { text: "Dawn", value: "dawn" },
    { text: "Febreze", value: "febreze" },
    { text: "Oral B", value: "oralb" },
    { text: "Vicks", value: "vicks" },
    { text: "Safeguard", value: "safeguard" },
    { text: "Olay", value: "olay" },
    { text: "Secret", value: "secret" },
  ],
  brookside: [
    { text: "Brookside long life", value: "brooksidelonglife" },
    { text: "Brookside cream", value: "brooksidecream" },
    { text: "Brookside butter", value: "brooksidebutter" },
    { text: "Brookside low fat milk", value: "brooksidelowfatmilk" },
    { text: "Brookside whipping cream", value: "brooksidewhippingcream" },
    { text: "Brookside cooking cream", value: "brooksidecookingcream" },
    { text: "Brookside double cream", value: "brooksidedoublecream" },
    { text: "Brookside Ghee", value: "brooksideghee" },
    { text: "Brookside maziwa lala", value: "brooksidemaziwala" },
    { text: "Brookside strawberry yoghurt", value: "brooksidestrawberryyoghurt" },
    { text: "Brookside natural yoghurt", value: "brooksidenaturalyoghurt" },
    { text: "Brookside vanilla yoghurt", value: "brooksidevanillayoghurt" },
    { text: "Brookside banana yoghurt", value: "brooksidebananayoghurt" },
    { text: "Brookside pineapple yoghurt", value: "brooksidepineappleyoghurt" },
    { text: "Brookside mango yoghurt", value: "brooksidemangoyoghurt" },
    { text: "Brookside fruitness mixed berries yoghurt", value: "brooksidefruitnessmixedberriesyoghurt" },
    { text: "Brookside fruitness strawberry yoghurt", value: "brooksidefruitnessstrawberryyoghurt" },
    { text: "Brookside fruitness vanilla yoghurt", value: "brooksidefruitnessvanillayoghurt" },
    { text: "Brookside plus probiotic yoghurt", value: "brooksideplusprobioticyoghurt" },
    { text: "Brookside dairy fresh strawberry flavoured milk", value: "brooksidefreshstrawberryflavouredmilk" },
    { text: "Brookside dairy fresh banana flavoured milk", value: "brooksidefreshbananaflavouredmilk" },
    { text: "Brookside dairy fresh vanilla flavoured milk", value: "brooksidefreshvanillaflavouredmilk" },
    { text: "Brookside dairy fresh chocolate flavoured milk", value: "brooksidefreshchocolateflavouredmilk" },
    { text: "Brookside dairy fresh coffee flavoured milk", value: "brooksidefreshcoffeeflavouredmilk" },
  ],
  suntory: [
    { text: "Lucozade", value: "lucozade" },
    { text: "Ribena", value: "ribena" },
  ],
  biofoods: [
    { text: "Bio Yoghurt vanilla", value: "bioyoghurtvanilla" },
    { text: "Bio Yoghurt nature plain", value: "bioyoghurtnatureplain" },
    { text: "Bio Yoghurt mango", value: "bioyoghurtmango" },
    { text: "Bio Yoghurt berry cocktail", value: "bioyoghurtberrycocktail" },
    { text: "Bio Yoghurt peach", value: "bioyoghurtpeach" },
    { text: "Bio Yoghurt strawberry", value: "bioyoghurtstrawberry" },
    { text: "Bio Yoghurt tropical mix", value: "bioyoghurttropicalmix" },
    { text: "Greek Yoghurt vanilla", value: "greekyoghurtvanilla" },
    { text: "Greek Yoghurt nature plain", value: "greekyoghurtnatureplain" },
    { text: "Greek Yoghurt honey", value: "greekyoghurthoney" },
    { text: "Superlite Yoghurt nature plain", value: "superliteyoghurtnatureplain" },
    { text: "Superlite Yoghurt vanilla", value: "superliteyoghurtvanilla" },
    { text: "Bio Non-dairy", value: "bionondairy" },
    { text: "Bio Active probiotic cucumber mint", value: "bioactiveprobioticcucumbermint" },
    { text: "Bio Active probiotic blackberry raspberry", value: "bioactiveprobioticblackberryraspberry" },
    { text: "Bio Active probiotic apple lemon", value: "bioactiveprobioticapplelemon" },
    { text: "Fresh Milk", value: "freshmilk" },
    { text: "Longlife Milk", value: "longlifemilk" },
    { text: "Lactose Free Milk", value: "lactosefreemilk" },
    { text: "Whipping Cream", value: "whippingcream" },
    { text: "Cooking Cream", value: "cookingcream" },
  ],
  domaine: [
    { text: "Domaine Kenya", value: "domainekenya" },
    { text: "Spier", value: "spier" },
    { text: "Finca Flichman", value: "fincaflichman" },
    { text: "Vina Maipo", value: "vinamaipo" },
    { text: "Torres", value: "torres" },
    { text: "Dulzino", value: "dulzino" },
    {
      text: "Baron Philippe de Rothschild",
      value: "baronphilippederothschild",
    },
    { text: "Chateau de Sours", value: "chateaudesours" },
    { text: "Montrouge", value: "montrouge" },
    { text: "Georges Dubœuf", value: "georgesduboeuf" },
    { text: "Joseph Drouhin", value: "josephdrouhin" },
  ],
  viva: [
    { text: "Moet", value: "moet" },
    { text: "Hennesy", value: "hennesy" },
    { text: "Glenmorangie", value: "glenmorangie" },
    { text: "Jagermeister", value: "jagermeister" },
    { text: "DGB", value: "dgb" },
    { text: "Dom Perignon", value: "domperignon" },
    { text: "Boschendal", value: "boschendal" },
    { text: "Ardberg", value: "ardberg" },
    { text: "Old Smuggler", value: "oldsmuggler" },
    { text: "Belvedere", value: "belvedere" },
    { text: "Corona", value: "corona" },
    { text: "Budweiser", value: "budweiser" },
    { text: "Casillero del Diablo", value: "casillerodeldiablo" },
    { text: "Bellingham", value: "bellingham" },
    { text: "Douglas Green", value: "douglasgreen" },
    { text: "Franschhoek Cellar", value: "franschhoekcellar" },
    { text: "The Ribshack", value: "theribshack" },
  ],
  pernodricard: [
    { text: "Malibu", value: "malibu" },
    { text: "Martell", value: "martell" },
    { text: "Ballantine's", value: "ballantines" },
    { text: "Chivas", value: "chivas" },
    { text: "Beefeater", value: "beefeater" },
    { text: "Jameson", value: "jameson" },
    { text: "Havana Club", value: "havanacub" },
    { text: "Absolut", value: "absolut" },
    { text: "The Glenlivet", value: "theglenlivet" },
    { text: "Jacob's Creek", value: "jacobscreak" },
    { text: "Olmeca", value: "olmeca" },
    { text: "Seagram's", value: "seagrams" },
    { text: "Imperial Blue", value: "imperialblue" },
    { text: "Malfy", value: "malfy" },
  ],
  premierfoods: [
    { text: "Pep Canned Juice", value: "pepcannedjuice" },
    { text: "Pep Ready to Drink", value: "pepreadytodrink" },
    { text: "Pep Cordials & Squashes", value: "pepcordialsandsquashes" },
    { text: "Peptang Tomato Sauce", value: "peptangtomatosauce" },
    { text: "Peptang Peanut Butter", value: "peptangpeanutbutter" },
    { text: "Peptang Hot Sauce", value: "peptanghotsauce" },
    { text: "Peptang Fruit Jams", value: "peptangfruitjams" },
    { text: "Peptang Honey", value: "peptanghoney" },
    { text: "Orchid Valley", value: "orchidvalley" },
  ],
  beiersdorf: [
    { text: "Nivea deodorant sprays", value: "niveadeodorantsprays" },
    { text: "Nivea deodorant roll on", value: "niveadeodorantrollon" },
    { text: "Nivea deodorant stick", value: "niveadeodorantstick" },
    { text: "Nivea lotion", value: "nivealotion" },
    { text: "Nivea creme", value: "niveacreme" },
    { text: "Nivea face wash", value: "niveafacewash" },
    { text: "Nivea shaving", value: "niveashaving" },
    { text: "Nivea shower gel", value: "niveashowergel" },
    { text: "Nivea body cream", value: "niveabodycream" },
    { text: "Nivea sun", value: "niveasun" },
    { text: "Nivea lip", value: "nivealip" },
  ],
  colgatepalmolive: [
    { text: "Colgate", value: "colgate" },
    { text: "Protex", value: "protex" },
    { text: "Palmolive", value: "palmolive" },
    { text: "Sanex", value: "sanex" },
    { text: "Speed Stick", value: "speedstick" },
    { text: "Lady Speed Stick", value: "ladyspeedstick" },
    { text: "Ajax", value: "ajax" },
    { text: "Axion", value: "axion" },
    { text: "Sta Soft", value: "stasoft" },
    { text: "Soupline", value: "soupline" },
    { text: "PCA Skin", value: "pcaskin" },
  ],
  pzcussons: [
    { text: "Cusson's baby", value: "cussonsbaby" },
    { text: "Cusson's kids", value: "cussonskids" },
    { text: "Venus For You", value: "venusforyou" },
    { text: "Sanctuary Spa", value: "sanctuaryspa" },
    { text: "St. Tropez", value: "sttropez" },
    { text: "Carex", value: "carex" },
    { text: "Imperial Leather", value: "imperialleather" },
    { text: "Joy", value: "joy" },
    { text: "Morning Fresh", value: "morningfresh" },
    { text: "Robb", value: "robb" },
  ],
  highlands:[
    { text: "Highlands drinking water", value: "highlandsdrinkingwater" },
    { text: "Highlands cordial pineapple", value: "highlandscordialpineapple" },
    { text: "Highlands cordial orange", value: "highlandscordialorange" },
    { text: "Highlands cordial mango", value: "highlandscordialmango" },
    { text: "Highlands cordial lemon", value: "highlandscordiallemon" },
    { text: "Highlands cordial tropical", value: "highlandscordialtropical" },
    { text: "Highlands club soda Lemon Lime", value: "highlandsclubsodalemonlime" },
    { text: "Highlands club soda Cola", value: "highlandsclubsodacola" },
    { text: "Highlands club soda Orange", value: "highlandsclubsodaorange" },
    { text: "Highlands club soda Blackcurrant", value: "highlandsclubsodablackcurrant" },
    { text: "Highlands club soda Passion", value: "highlandsclubsodapassion" },
    { text: "Highlands club soda Pineapple", value: "highlandsclubsodapineapple" },
    { text: "Highlands club soda Apple", value: "highlandsclubsodaapple" },
    { text: "Highlands club soda Mango", value: "highlandsclubsodamango" },
    { text: "Highlands club soda Pina colada", value: "highlandsclubsodapinacolada" },
    { text: "Highlands club soda Tangawizi", value: "highlandsclubsodatangawizi" },
    { text: "Highlands club soda Energy", value: "highlandsclubsodaenergy" },
    { text: "Highlands club soda Bazuu", value: "highlandsclubsodabazuu" },
  ],
  other: [{ text: "Other", value: "other" }],
};
