const bodyParser = require('body-parser')
//rota pessoa
const pessoas = require('./PessoasRoute')



//extacia a rota
//const router = express.Router()

//rota do sistema home meto get com parametros
/*router.get('/',(req, res) =>{
    res.send('<h1>HELLO MY FRIENDS</h1>')
   })*/

   //roata 2
  module.exports = app => {
       app.use(bodyParser.json())
      //rota pessoas
       app.use(pessoas)
   }
   
   
//exporta class
//module.exports = router
