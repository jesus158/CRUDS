<template>
	

	<div class="card-header">
		<h2>Listar</h2>
	</div>

	<!-- Card -->
	<div class="card-body">

		<div class="text-right">
			<router-link to="/Crear" class="btn btn-secondary">Crear</router-link> 
		</div>

		<table class="table table-bordered table-hover mt-3">

			<thead>
				<tr>
					<th>Nombre</th>
					<th>Correo</th>
					<th>Acciones</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="us in users" :key="us.user">
					<td>{{us.nombre}}</td>
					<td>{{us.correo}}</td>
					<td>
						<router-link :to="{name:'Editar', params:{id:us.id}}" class="btn btn-primary mr-3">Editar</router-link>
						<button class="btn btn-danger" v-on:click="eliminar(us.id)">Eliminar</button>
					</td>
				</tr>
			</tbody>

		</table>

	</div>
</template>


<script>
	
	export default {

		data() {

			return {
				users:[]
			}

		},

		created:function() {

			this.consultar();

		},

		methods: {

			consultar() {

				fetch('http://localhost:80/crud/cons-todos.php')
				.then(resp => resp.json())
				.then((resp) => {
					this.users = resp;
					console.log(this.users);
				})
				.catch(console.log)

			},

			eliminar(id) {

				fetch('http://localhost:80/crud/eliminar.php?id='+id)
				.then(resp => resp.json())
				.then(resp => {
					console.log(resp)
					location.reload()
				})

			}

		}

	}

</script>