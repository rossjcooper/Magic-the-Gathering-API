const Sails = require('sails');
const MTG = require('mtgsdk');

Sails.lift(function () {
        let cards = [];
        let all = MTG.card.all({pageSize: 100, limit: 100});
        all.on('data', card => {
            if(typeof card !== 'undefined') {
                Card.count({name : card.name}).exec((err, found) => {
                    if(found === 0){
                        Card.create(card).exec((err, newCard) => {
                            console.log('Added card: ', card.name);
                            cards.push(newCard);
                        });
                    }else{
                        console.log('Skipping card: ', card.name);
                    }
                });
            }
        });
        all.on('error', err => {
            console.error(err);
            process.exit(1);
        });
        all.on('end', () => {
            Sails.lower(err => {
                if(err){
                    console.error(err);
                    process.exit(1);
                }else{
                    console.log('Inserted ', cards.length, ' into the database');
                    process.exit();
                }
            })
        });
});