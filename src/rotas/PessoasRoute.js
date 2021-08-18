const { Router } = require("express")

const PessoaController = require('../controllers/PessoaController')


const router = Router()

// pesquisa todos
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
// pesquisar por id
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
// criar um novo resistro 
router.post('/pessoas',PessoaController.criaPessoa)
// atualiza resistros
router.put('/pessoas/:id',PessoaController.atualizarPessoa)
router.delete('/pessoas/:id',PessoaController.apagaPessoa)

module.exports = router