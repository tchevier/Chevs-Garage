const mongoose = require('mongoose')
const dbName = 'chevsgarage_db'

mongoose.connect(process.env.XPLENTY_API_KEY || `mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));