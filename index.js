// const express = require('express');
import express from 'express'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Hello, World!`);
});
app.get('/personas', (req, res) => {
  res.send(`listafo de personas`);
});
app.get('/personas/:id', (req, res) => {
  const { id } = req.params;
  res.send(`persona con id: ${id}`);
});
app.post('/personas', (req, res) => {
  res.send(`crear persona`);
});


app.put('/personas', (req, res) => {
  res.send(`actualizar persona`);
});
app.delete('/personas', (req, res) => {
  res.send(`eliminar persona`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});