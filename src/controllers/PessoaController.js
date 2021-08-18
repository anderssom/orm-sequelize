const database = require('../models')

class PessoaController {

    // pesquisar todos os resistros
    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
        return res.status(200).json(todasAsPessoas)
        }catch (error) {
            return res.status(500).json(error.message)
        }
        
    }
    // pesquisar um resistro por id
    static async pegaUmaPessoa(req, res){
        const {id} = req.params
        try{
            const umaPessoa = await database.Pessoas.findOne( {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaPessoa)
        }catch (error) {
            return res.status(500).json(error.message)

        }
    }
    // criar um novo resistro
    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        } catch (error){
            return res.status(500).json(error.message)
        }
    }
    // atualizar resistro
    static async atualizarPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try{
            // metodo update e (parametros) 
            await database.Pessoas.update(novasInfos, {where: {id: Number(id)}} )
            const pessoaAtualizada = await database.Pessoas.findOne({ where: {id: Number(id) }})
            return res.status(200).json(pessoaAtualizada)

        }catch (erro){
            return res.status(500).json(error.message)
        }
    }

    //Deleta resistros
    static async apagaPessoa(req, res) {
        const { id } = req.params
        try{
            await database.Pessoas.destroy({ where: {id: Number(id) }})
            return res.status(200).json({message:`id ${id} deletado`})

        }catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController