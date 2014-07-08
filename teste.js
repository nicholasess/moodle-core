	  var express = require('express')
      , app = express();
     
    var bodyParser = require('body-parser');
     
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
     
    var clientes = [];
     
    app.get('/', function(req, res){
      html  = '<html><body>';
      html += '<form action="/cliente" method="post">';
      html += '<label>Nome: <input type="text" name="cliente[nome]"></label><br>';
      html += '<label>Idade: <input type="text" name="cliente[idade]"></label><br>';
      html += '<button type="submit">Enviar</button>';
      html += '</form>';
      html += '<br>';
      html += '<h1>Lista de clientes</h1>';
      html += '<ul>';
      for(var i = 0; i < clientes.length; i++){
        html += '<li>'+clientes[i].nome+' | '+clientes[i].idade+'</li>';
      }
      html += '</ul></body></html>';
      res.send(html);
    });
     
    app.post('/cliente', function(req, res){
      var cliente = req.body.cliente;
      console.log('Passei aqui!');
      console.log(cliente);
      clientes.push(cliente);
      res.redirect('/');
    });
     
   app.listen(3000, function(){
    console.log('Server on port', 3000);
  });

