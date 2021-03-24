const router = require('express').Router()

const ToDo = require('../models/ToDo')

router.post('/', async (req, res) => {
    try {
        const { title, desc, date } = req.body
        const todoAlreadyExists = await ToDo.findOne({ title })
        if(todoAlreadyExists){
            return res.status(200).json({ message: 'ToDo Already Exists' })
        }
        const todo = new ToDo({
            title,
            desc,
            date
        })
        const newToDo = await todo.save()
        res.status(201).json({ newToDo })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

module.exports = router