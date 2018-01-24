const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Title of my article',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare purus non luctus vehicula. Sed dapibus mollis libero et tempus. Donec interdum justo neque, non viverra metus varius iaculis. Donec vestibulum sit amet nibh at pulvinar. Integer commodo, turpis sed vestibulum faucibus, justo ipsum eleifend dolor, id auctor mi nisl tristique lacus. Duis pharetra in libero at dictum. Ut maximus laoreet quam. Mauris viverra dolor vitae ipsum tristique volutpat. Quisque vitae cursus nulla. Nulla facilisi. Aliquam id nibh iaculis, volutpat arcu sed, pulvinar augue. Nulla facilisi.',
    isAuthor: false,
    variable: '<h1>This is h1</h1>'
  });
})

app.get('/articles', (req, res) => {
  const article1 = {
    id: 1,
    title: 'Article 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare'
  }

  const article2 = {
    id: 2,
    title: 'Article 2',
    content: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare'
  }

  const article3 = {
    id: 3,
    title: 'Article 3',
    content: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare'
  }

  const articles = [article1, article2, article3];

  res.render('list', {
    articles:articles
  });
})

app.listen(3000);