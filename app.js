//Importando Servidor Node
const app = require('./config/server')

//Importando Rotas
require('./app/routes/home')(app)
require('./app/routes/noticia')(app)
require('./app/routes/formulario')(app)

//Mensagem que é exibida ao rodar servidor node
app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000!')
})