exports.gettingParams = (req, res) => {
    console.log(req.params);
    res.send(req.params.id_users);
}