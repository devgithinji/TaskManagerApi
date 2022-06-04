const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json());

const port = 3000;


app.get('/hello', (req, res) => {
    res.send('Task manager app');
})

app.use('/api/v1/tasks', tasks)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is listening on port ${port}....`)
        })
    } catch (e) {
        console.log(e)
    }
}

start();
