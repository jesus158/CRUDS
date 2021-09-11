<template>

	<div class="card-header">
		<h2>Crear</h2>
	</div>


	<!-- Card -->
	<div class="card-body">

		<router-link to="/" class="btn btn-secondary btn-sm">Volver</router-link> 

		<form class="mt-3" v-on:submit.prevent="crear">
			
			<div class="form-group">
				<label class="form-label">Nombre</label>
				<input type="text" name="nombre" id="nombre" class="form-control" v-model="user.nombre">
			</div>

			<div class="form-group">
				<label class="form-label">Correo</label>
				<input type="email" name="correo" id="correo" class="form-control" v-model="user.correo">
			</div>
			

			<button type="submit" class="btn btn-primary">Crear</button>


		</form>

	</div>
</template>


<script>
	
	export default {

		data() {

			return {
				user: {}
			}

		},

		methods: {

			crear() {

				var datosEnviar = { nombre: this.user.nombre, 
											correo: this.user.correo }

				fetch('http://localhost:80/crud/registrar.php', {
					method: 'POST',
					body: JSON.stringify(datosEnviar)
				})
				.then(resp => resp.json())
				.then(resp => {
					console.log(resp)
					location.href = '/#/'
				})

			}

		}

	}

</script>