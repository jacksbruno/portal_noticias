module.exports = (app) => {
  app.get('/formulario', (req, res) => {
    res.render('admin/form_add_noticia')
  })
}