'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      Matriculas.belongsTo(models.Pessoas, {
        foreignKey: 'estudante_Id'
      })
      Matriculas.belongsTo(models.Turmas, {
        foreignKey: 'turma_Id'
      });

    }
  };
  Matricula.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matricula',
  });
  return Matricula;
};