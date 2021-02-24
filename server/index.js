const express = require('express');
const app = express();

var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

app.get('/todos', (req, res) => {
  if (localStorage.todos) {
    return res.status(200).send(JSON.parse(localStorage.todos));
  }
  else{
    return res.status(200).send([]);
  }
});

app.get('/tasks', (req, res) => {
  if (localStorage.tasks) {
    return res.status(200).send(JSON.parse(localStorage.tasks));
  }
  else{
    return res.status(200).send([]);
  }
});

app.get('/tasksfromtodotitle', (req, res) => {
  return res.status(200).send(JSON.parse(localStorage.tasks.filter(i => i.title == todo)));
});

app.post('/todos', (req, res) => {
  localStorage.todos = JSON.stringify(this.todos);
  return res.status(200).send(localStorage.todos);
});

app.post('/tasks', (req, res) => {
  localStorage.tasks = JSON.stringify(this.tasks);
  return res.status(200).send(localStorage.tasks);
});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);