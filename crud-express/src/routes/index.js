const express = require('express');
const router = express.Router();

const Task = require('../models/task'); 

router.get('/', async (req, res) => {
	const tasks = await Task.find();

	res.render('index', { // Renderizar vista index
		tasks: tasks
	})
})

router.post('/add', async (req, res) => { // Registrar nueva tarea
	const task = new Task(req.body);
	await task.save(); 
	res.redirect('/')
})

router.get('/eliminar/:id', async (req, res) => { // Eliminar tarea
	const {id} = req.params;
	await Task.remove({ _id: id });
	res.redirect('/')
})

router.get('/editar/:id', async (req, res) => { // Enviar id de tarea a editar
	const {id} = req.params;
	const task = await Task.findById(id); 
	
	res.render('editar', {
		task
	})
})

router.post('/editar/:id', async (req, res) => { // Enviar tarea
	const {id} = req.params;
	await Task.update({ _id:id }, req.body)
	res.redirect('/')
})


module.exports = router;