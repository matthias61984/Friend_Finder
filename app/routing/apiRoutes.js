var friends = require("../data/friends.js");
console.log(friends);

var findBestFriend = function(arr, newFriend) {
  var bestFriend;
  var lowestDiff = 50;
  for (i=0; i < arr.length; i++) {
      var diff = 0;
      for (j=0; j < arr[i].scores.length; j++) {
          diff += Math.abs((arr[i].scores[j])-(newFriend[i]));
      }
      if (diff < lowestDiff) {
          bestFriend = arr[i];
          lowestDiff = diff;
      }
      console.log(diff); 
  }
  console.log("Your best friend is: " + bestFriend.name);
  return bestFriend;
}

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var bestFriend = findBestFriend(friends, newFriend);
    friends.push(newFriend);
    res.json(bestFriend);
  });

  app.post("/api/clear", function(req, res) {
    friends.length = [];
    res.json({ ok: true });
  });
};
