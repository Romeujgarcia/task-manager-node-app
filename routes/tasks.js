// routes/tasks.js
const express = require('express');
const Task = require('../models/Task');
const auth = require('../utils/auth'); // Middleware de autenticação
const router = express.Router();

// Middleware de autenticação
router.use(auth);

// Criar tarefa
router.post('/', async (req, res) => {
  const { title } = req.body;
  const task = new Task({ title, userId: req.userId });
  await task.save();
  res.status(201).json(task);
});

// Listar tarefas
router.get('/', async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
});

// Atualizar tarefa
router.put('/:id', async (req, res) => {
  const { title, completed } = req.body;
  const task = await Task.findByIdAndUpdate(req.params.id, { title, completed }, { new: true });
  res.json(task);
});

// Deletar tarefa
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
