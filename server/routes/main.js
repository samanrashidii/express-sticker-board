const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
        title: 'Stickers goes here',
        description: 'Simple sticker board created with Expressjs and MongoDB'
    }

    res.render('index', { locals });
})

module.exports = router