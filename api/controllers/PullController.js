/**
 * PullController
 *
 * @description :: Server-side logic for managing pulls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const MTG = require('mtgsdk');

module.exports = {
    cards: function (req, res) {
        let cards = [];
        let all = MTG.card.all({pageSize: 100, limit: 100});
        all.on('data', card => {
            console.log('Fetching card: ', card.name);
            Card.create(card).exec((err, newCard) => {
                cards.push(newCard);
            });
        });
        all.on('error', err => {
            console.error(err);
            req.send('Something went wrong');
        });
        all.on('end', () => {
            res.send('Inserted ', card.length, ' into the database');
        });
    }
};

