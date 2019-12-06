const mongoose = require('mongoose');
const { PokemonsSchema } = require('./PokemonsSchema')
const Schema = mongoose.Schema;
const TreinadoresSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  foto: { type: String, required: true },
  pokemons: [PokemonsSchema],
  senha: { type: String, required: true },
  grupo: { type: String }
})

const treinadoresModel = mongoose.model('treinadores', TreinadoresSchema);

module.exports = treinadoresModel;
