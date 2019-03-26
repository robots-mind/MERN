const express = require('express');

const mongoose = require('mongoose');

const bodyParser =  requre('body-parser')




const users = require('./routes/api/users');

const profile = require('./routes/api/profile');

const posts = require('./routes/api/posts')


const app = express();
// Body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//! DB CONFIG

const db = require('./config/keys').mongoURI;

//! CONNECT TO
mongoose.
connect(db,{ useNewUrlParser: true })
.then(()=> console.log('MongoDb connected'))
.catch(err => console.log(err));

app.get('/', (req,res) => res.send('Hello'));

// Use routes 
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);
const port = process.env.PORT||5000;
app.listen(port,()=> console.log(`Server running on port ${port}`));