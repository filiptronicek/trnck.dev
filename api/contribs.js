const fetch = require('node-fetch');

export default async (req, res) => {
    const usr = req.query.username;
    const url = `https://github-contributions.now.sh/api/v1/${usr}`;
    fetch(url).then((responce) => responce.json()).then(r => res.json(r));
};
