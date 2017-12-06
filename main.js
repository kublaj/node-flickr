var Flickr = require("./lib/main.js");
module.exports = Flickr;


/*++++++++++++++++++++ How to Starts +++++++++++++++++++++++*/

var keys = {"api_key": "9fcd594ca9b2fe7f1f1d4b4cef84a3ce"}

flickr = new Flickr(keys);

flickr.get("photos.search", {"tags":"supercell,thunderstorm"}, function(result){
     console.log(result.photos);
});
