const router = require('express').Router()

const ToDo = require('../models/ToDo')

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { title, desc } = req.body
        const todo = await ToDo.findOne({ _id: id })
        if(!todo){
            return res.status(404).json({ message: 'ToDo Not Found' })
        }
        const { nModified } = await ToDo.updateOne({ _id: id }, { $set: {
            title,
            desc
        }})
        res.status(200).json({ message: `${nModified} ToDo Updated` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

module.exports = router