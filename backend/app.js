const express = require('express');
const app = express();
const port = 3000;

const frases = [
  "Você é mais forte do que imagina.",
  "Nunca é tarde para recomeçar.",
  "Acredite, vai dar certo.",
  "Coragem é continuar mesmo com medo.",
  "Grandes coisas levam tempo."
];

app.get('/frase', (req, res) => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  res.json({ frase });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
