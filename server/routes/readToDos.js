const router = require('express').Router()

const ToDo = require('../models/ToDo')

router.get('/', async (req, res) => {
    try {
        const todos = await ToDo.find()
        res.status(200).json({ todos })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

module.exports = router