
<div class="row">
	<div class="col-md-6">
		
		<div class="form-group">
			<label class="form-label">Nombre</label>
			<input type="text" name="nombre" id="nombre" class="form-control" value="{{isset($empleado->nombre)?$empleado->nombre:''}}">
		</div>

		<div class="form-group">
			<label class="form-label">Apellido</label>
			<input type="text" name="apellido" id="apellido" class="form-control" value="{{isset($empleado->apellido)?$empleado->apellido:''}}">
		</div>

		<div class="form-group">
			<label class="form-label">Correo</label>
			<input type="text" name="correo" id="correo" class="form-control" value="{{isset($empleado->correo)?$empleado->correo:''}}">
		</div>


		<button type="submit" class="btn btn-primary btn-block">{{ $modo }}</button>

	</div>
</div>
