
exports.test = async function (req, res, next) {
    return res.json({ code: 1000, message: 'success'}).end();
}