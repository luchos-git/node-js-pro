// const express = require('express');
import express from 'express'
const app = express();
const port = 3000;

let personas = [
  { id: 1, nombre: 'Juan', edad: 30 },
  { id: 2, nombre: 'María', edad: 25 },
  { id: 3, nombre: 'Pedro', edad: 35 },
];

app.get('/', (req, res) => {
  res.send(`Hello, World!`);
});

app.get('/personas', (req, res) => {
  res.json(personas);
});


app.get('/personas/:id', (req, res) => {
  const {id} = req.params;
  const persona = personas.find(p => p.id == req.params.id);
  persona ? res.json(persona) : res.status(404).send('Persona no encontrada');
  res.json(persona);
});

app.use(express.json());
app.post('/personas', (req, res) => {
  console.log(req.body);
  const nvid= personas.length + 1;
  const nuevaPersona = { 
    id: nvid,
    nombre: req.body.nombre,
    edad: req.body.edad
   };
  personas.push(nuevaPersona);
  res.status(201).json(nuevaPersona);
});


app.put('/personas', (req, res) => {
  res.send(`actualizar persona`);
  console.log(req.body);
  console.log(req.query);
  const persona = personas.find(p => p.id == req.query.id);
  if (!persona) return res.status(404).send('Persona no encontrada');
  persona.nombre = req.body.nombre;
  persona.edad = req.body.edad;
  res.json(persona);
});

app.delete('/personas/:id', (req, res) => {
  const indice = personas.findIndex(p => p.id == req.params.id);
  if (indice == -1) return res.status(404).send('Persona no encontrada');
  personas.splice(indice, 1);
  res.status(204).send();
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});