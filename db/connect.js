const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://taskmanager:taskmanager1234@cluster0.lorgx6p.mongodb.net/taskmanager?retryWrites=true&w=majority';

const connectDB = () => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
};

module.exports = connectDB;
