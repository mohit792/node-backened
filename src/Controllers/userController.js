const db = require("../../db");

module.exports = {
    getAllUsers :  (req, res, next) => {
    db.execute("Select * from users", (error, result) => {
        if (error) {
            console.log(error);
            res.send(error);
        }
        console.log(result);
        res.send(result);
    });
}
};
