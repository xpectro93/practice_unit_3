const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routes/users.js');
const albums = require('./routes/albums.js');
const comments = require('./routes/comments.js');
const likes = require('./routes/likes.js');
const pictures = require('./routes/pictures.js');
const posts = require('./routes/posts.js');


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


app.use('/users', users);
app.use('/posts', posts);
app.use('/likes', likes);
app.use('/posts', posts);
app.use('/comments', comments);
app.use('/albums', albums);
app.use('/pictures', pictures);


app.get('/', (req, res) => {
  res.send('This is the HoMePaGe!')
});

app.listen(3000, () => {
  console.log('listening to fake fb database at 3k!');
});