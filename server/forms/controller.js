module.exports.getForm = function (req, res) {
    res.send({"Status": "getForm working"});
}
module.exports.addForm = function (req, res) {
    res.send({"Status": "addForm working"});
}
module.exports.deleteForm = function (req, res) {
    res.send({"Status": "deleteForm working"});
}
module.exports.updateForm = function (req, res) {
    res.send({"Status": "updateForm working"});
}

module.exports.getFormsForUser = function (req, res) {
    res.send({"Status": "getFormForUser working"});
}
module.exports.getFilledForm = function (req, res) {
    res.send({"Status": "getFilledForm working"});
}
module.exports.filledForm = function (req, res) {
    res.send({"Status": "filledForm working"});
}
module.exports.deleteFilledForms = function (req, res) {
    res.send({"Status": "deleteFilledForms working"});
}
module.exports.deleteFilledRowsForAForm = function (req, res) {
    res.send({"Status": "deleteFilledRowsForAForm working"});
}
module.exports.shareFormWithUsers = function (req, res) {
    res.send({"Status": "shareFormWithUsers working"});
}
