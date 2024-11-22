// set constants
const express = require('express');
const router = express.Router();
const wordDal = require('../Services/pg.words.dal')

// router call to render the silly word page
router.get('/', async (req, res) => {
    try {
        console.log("Try let await")
        let theWord = await wordDal.getWord();
        console.log("try console.table")
        if(DEBUG) console.table(theWord);
        console.log("Try render word")
        res.render('word', {theWord});
    } catch {
        res.render('503')
    }
});

module.exports = router