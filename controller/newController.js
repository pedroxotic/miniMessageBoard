const messages = require("../db")

function maniPost (req, res){
    
    const text = req.body.text;
    const author = req.body.author;
    messages.push({text, user: author, added: new Date()});
    res.redirect("/");
    

}
// le vas a meter data a la db, de ahi vas a pasarle datos al view 
// pasar el data al view
// controller manda datos al db, consulta db y hace un sen
module.exports = maniPost;