const fetch = require("node-fetch");

module.exports = async (_req, res) => {
  await fetch("https://api.github.com/repos/filiptronicek/trnck.dev/commits")
    .then((data) => data.json())
    .then((data) => {
      res.send(data);
    });
};
