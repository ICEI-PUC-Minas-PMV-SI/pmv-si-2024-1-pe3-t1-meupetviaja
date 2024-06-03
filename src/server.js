// server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs'); // Módulo para leitura de arquivos
const app = express();
const port = process.env.PORT || 3000;

// Conectar ao MongoDB (substitua '<sua_URL_de_conexão>' pela URL do seu banco de dados MongoDB)
mongoose.connect('<sua_URL_de_conexão>', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Rota para obter dados das cidades
app.get('/cidades', (req, res) => {
  // Ler o arquivo destinos.json
  fs.readFile(path.join(__dirname, 'src/data/destinos.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo destinos.json:', err);
      res.status(500).send('Erro ao ler os dados das cidades');
      return;
    }

    // Converter o conteúdo do arquivo para objeto JavaScript
    const destinosData = JSON.parse(data);

    // Extrair apenas os dados das cidades
    const cidades = destinosData.cidades;

    // Enviar os dados das cidades como resposta
    res.json(cidades);
  });
});

// Rota para obter dados dos estabelecimentos
app.get('/estabelecimentos', (req, res) => {
  // Ler o arquivo destinos.json
  fs.readFile(path.join(__dirname, 'src/data/destinos.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo destinos.json:', err);
      res.status(500).send('Erro ao ler os dados dos estabelecimentos');
      return;
    }

    // Converter o conteúdo do arquivo para objeto JavaScript
    const destinosData = JSON.parse(data);

    // Extrair apenas os dados dos estabelecimentos
    const estabelecimentos = destinosData.estabelecimentos;

    // Enviar os dados dos estabelecimentos como resposta
    res.json(estabelecimentos);
  });
});

// Rota para obter dados dos depoimentos
app.get('/depoimentos', (req, res) => {
  // Ler o arquivo destinos.json
  fs.readFile(path.join(__dirname, 'src/data/destinos.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo destinos.json:', err);
      res.status(500).send('Erro ao ler os dados dos depoimentos');
      return;
    }

    // Converter o conteúdo do arquivo para objeto JavaScript
    const destinosData = JSON.parse(data);

    // Extrair apenas os dados dos depoimentos
    const depoimentos = destinosData.depoimentos;

    // Enviar os dados dos depoimentos como resposta
    res.json(depoimentos);
  });
});

// Rota para autenticar usuários
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
  
    // Verificar se o e-mail e a senha foram fornecidos
    if (!email || !senha) {
      return res.status(400).json({ mensagem: 'E-mail e senha são obrigatórios' });
    }
  
    // Consultar o banco de dados para encontrar o usuário com o e-mail fornecido
    Usuario.findOne({ email })
      .then(usuario => {
        // Verificar se o usuário foi encontrado
        if (!usuario) {
          return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }
  
        // Verificar se a senha está correta
        if (senha !== usuario.senha) {
          return res.status(401).json({ mensagem: 'Senha incorreta' });
        }
  
        // Se tudo estiver correto, o usuário está autenticado com sucesso
        res.status(200).json({ mensagem: 'Login bem-sucedido', usuario });
      })
      .catch(err => {
        console.error('Erro ao autenticar usuário:', err);
        res.status(500).json({ mensagem: 'Erro ao autenticar usuário' });
      });
  });

  // Rota para obter informações sobre os destinos
app.get('/destinos', autenticarUsuario, (req, res) => {
    // Obter os destinos do arquivo destinos.json
    const destinos = require('./data/destinos.json').cidades;
    
    // Retornar os destinos
    res.status(200).json({ destinos });
  });
  
  // Rota para obter informações sobre um destino específico
  app.get('/destinos/:id', autenticarUsuario, (req, res) => {
    const destinoId = req.params.id;
    const destinos = require('./data/destinos.json').cidades;
    
    // Encontrar o destino com o ID fornecido
    const destino = destinos.find(destino => destino.id == destinoId);
  
    // Verificar se o destino foi encontrado
    if (!destino) {
      return res.status(404).json({ mensagem: 'Destino não encontrado' });
    }
  
    // Retornar as informações do destino encontrado
    res.status(200).json({ destino });
  });
  // Rota para obter informações sobre os estabelecimentos
app.get('/estabelecimentos', autenticarUsuario, (req, res) => {
  // Obter os estabelecimentos do arquivo destinos.json
  const estabelecimentos = require('./data/destinos.json').estabelecimentos;
  
  // Retornar os estabelecimentos
  res.status(200).json({ estabelecimentos });
});

// Rota para obter informações sobre um estabelecimento específico
app.get('/estabelecimentos/:id', autenticarUsuario, (req, res) => {
  const estabelecimentoId = req.params.id;
  const estabelecimentos = require('./data/destinos.json').estabelecimentos;
  
  // Encontrar o estabelecimento com o ID fornecido
  const estabelecimento = estabelecimentos.find(estabelecimento => estabelecimento.id == estabelecimentoId);

  // Verificar se o estabelecimento foi encontrado
  if (!estabelecimento) {
    return res.status(404).json({ mensagem: 'Estabelecimento não encontrado' });
  }

  // Retornar as informações do estabelecimento encontrado
  res.status(200).json({ estabelecimento });
});

// Rota para obter todos os depoimentos
app.get('/depoimentos', autenticarUsuario, (req, res) => {
    // Obter os depoimentos do arquivo destinos.json
    const depoimentos = require('./data/destinos.json').depoimentos;
    
    // Retornar os depoimentos
    res.status(200).json({ depoimentos });
  });
  
  // Rota para obter informações sobre um depoimento específico
  app.get('/depoimentos/:id', autenticarUsuario, (req, res) => {
    const depoimentoId = req.params.id;
    const depoimentos = require('./data/destinos.json').depoimentos;
    
    // Encontrar o depoimento com o ID fornecido
    const depoimento = depoimentos.find(depoimento => depoimento.id == depoimentoId);
  
    // Verificar se o depoimento foi encontrado
    if (!depoimento) {
      return res.status(404).json({ mensagem: 'Depoimento não encontrado' });
    }
  
    // Retornar as informações do depoimento encontrado
    res.status(200).json({ depoimento });
  });
  