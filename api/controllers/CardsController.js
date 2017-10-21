/**
 * CardsController
 *
 * @description :: Server-side logic for managing cards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
	    let name = req.query.name;
        Card.find({name : {'like' : name} }).exec((err, cards) => {
            res.send(cards);
        });
    }
};

