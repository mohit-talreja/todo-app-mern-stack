const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/createtodo', require('./routes/createToDo'))

app.use('/readtodos', require('./routes/readToDos'))

app.use('/readtodo', require('./routes/readToDo'))

app.use('/updatetodo', require('./routes/updateToDo'))

app.use('/deletetodo', require('./routes/deleteToDo'))

const PORT = process.env.PORT || 1000

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}.`))