module.exports = app => {
  app.get('/', (req, res) => {
    res.render('todo');
  });
  app.post('/todo', (req, res) => {});
  app.delete('/todo', (req, res) => {});
};
