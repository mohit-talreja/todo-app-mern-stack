const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ToDoApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((res) => console.log('Connected to MongoDB.'))
.catch((err) => console.log('Error in connecting to MongoDB!'))