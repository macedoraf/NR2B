'use strict';
module.exports = function(app) {
var controller;


app.route('/')
.get()
.post();

// Academias
app.route('/gym')
   .get() //Passar o metodo Correspondente ao endereço
   .post();


// Restaurante
app.route('/restaurant')
   .get() //Passar o metodo Correspondente ao endereço
   .post();

//app.route('/messages/:msgId')
//   .get(messages.read_a_message)
///  .put(messages.update_a_message) Exemplo de passagem de parametro
//   .delete(messages.delete_a_message);
}