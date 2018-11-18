var friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    function findBestFriend(newFriend) {
      var bestFriend;
      var lowestDiff = 50;
      for (i=0; i < friends.length; i++) {
        var diff = 0;
        for (j=0; j < friends[i].scores.length; j++) {
            diff += Math.abs((friends[i].scores[j])-(newFriend.scores[j]));
        }
        if (diff < lowestDiff) {
            bestFriend = friends[i];
            lowestDiff = diff;
        }
        console.log(diff); 
      }
      console.log("Your best friend is: " + bestFriend.name);
      return bestFriend;
    }
    findBestFriend()
      .then(function(){
        res.json(bestFriend);  
      });
    friends.push(newFriend);
  });

  app.post("/api/clear", function(req, res) {
    friends.length = [];
    res.json({ ok: true });
  });
};
