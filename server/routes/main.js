const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    try {
        const locals = {
            title: 'Stickers goes here',
            description: 'Simple sticker board created with Expressjs and MongoDB'
        }
        const data = await Post.find();
        res.render('index', { locals, data });
    } catch (err) {
        console.error(err);
    }
})

router.get('/add-sticker', (req, res) => {

    const locals = {
        title: 'Add New Sticker',
        description: 'Add your sticker to sticker board'
    }

    res.render('add-sticker', { locals });
})

const insertPostData = () => {
    Post.insertMany([
        {
            title: 'Building my first sticker',
            body: 'This is the first sticker created by author'
        }
    ])
}

module.exports = router