const router = require('express').Router()

const ToDo = require('../models/ToDo')

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await ToDo.findOne({ _id: id })
        if(!todo){
            return res.status(404).json({ message: 'ToDo Not Found' })
        }
        const { deletedCount } = await ToDo.deleteOne({ _id: id })
        res.status(200).json({ message: `${deletedCount} ToDo Removed` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

module.exports = router