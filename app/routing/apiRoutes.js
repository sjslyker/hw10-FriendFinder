var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });

    app.post("/api/clear", function(req, res) {
      // Empty out the arrays of data
      friendData.length = 0;
  
      res.json({ ok: true });
    });

    app.post("/api/new-friends", function(req, res) {
      // NEW CODE BELOW __________
      var user = req.body;

      for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
      }
    });  

};
