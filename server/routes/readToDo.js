const router = require('express').Router()

const ToDo = require('../models/ToDo')

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await ToDo.findOne({ _id: id })
        if(!todo){
            return res.status(404).json({ message: 'ToDo Not Found' })
        }
        res.status(200).json({ todo })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

module.exports = router