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

    app.post("/api/friends", function(req, res) {
      var totalsArray = [];
      for (i = 0; i < friendData.length; i++) {
          
          totalDifference = Math.abs(req.body.scores[0] - friendData[i].scores[0]) +
          Math.abs(req.body.scores[1] - friendData[i].scores[1]) +
          Math.abs(req.body.scores[2] - friendData[i].scores[2]) +
          Math.abs(req.body.scores[3] - friendData[i].scores[3]) +
          Math.abs(req.body.scores[4] - friendData[i].scores[4]) +
          Math.abs(req.body.scores[5] - friendData[i].scores[5]) +
          Math.abs(req.body.scores[6] - friendData[i].scores[6]) +
          Math.abs(req.body.scores[7] - friendData[i].scores[7]) +
          Math.abs(req.body.scores[8] - friendData[i].scores[8]) +
          Math.abs(req.body.scores[9] - friendData[i].scores[9])
          
          totalsArray.push(totalDifference);
          
          
      }
      console.log(totalsArray);
      Array.min = function(array){
          return Math.min.apply( Math, array );
      };
      var minimum = Array.min(totalsArray);
      console.log(minimum);
      for (i = 0; i < totalsArray.length; i++) {
          if (totalsArray[i] === minimum) {
              console.log(friendData[i]);
              res.json(friendData[i]);
          }
      }
      friendData.push(req.body);
      });
};
