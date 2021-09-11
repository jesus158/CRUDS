<!-- Header -->
@include('empleado.header')



<div class="card-header">
	<h3>Empleados</h3>
</div>


<div class="card-body">

	<div class="text-right">
		<a class="btn btn-secondary" href="{{url('/empleado/create')}}">Registrar nuevo</a>
	</div>



	<!-- Muestra mensaje nuevo -->
	@if(Session::has('mensaje'))
		<div class="alert alert-info alert-dismissible mt-3 fade show" role="alert">
		  <strong>{{Session::get('mensaje')}}</strong>
		  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
		    <span aria-hidden="true">&times;</span>
		  </button>
		</div>
	@endif


	<table class="table table-bordered table-hover mt-3">
		<thead>
			<tr>
				<th>ID</th>
				<th>Nombre</th>
				<th>Apellido</th>
				<th>Correo</th>
				<th>Acciones</th>
			</tr>
		</thead>

		<tbody>

			@foreach( $empleados as $empleado)

			<tr>
				<td>{{$empleado->id}}</td>
				<td>{{$empleado->nombre}}</td>
				<td>{{$empleado->apellido}}</td>
				<td>{{$empleado->correo}}</td>

				<td>
					<a href="{{ url('/empleado/'.$empleado->id.'/edit') }}" class="btn btn-primary mr-3"> Editar </a>

					<form action="{{ url('/empleado/'.$empleado->id) }}" method="post">
						
						@csrf 
						{{ method_field('DELETE') }} 
						

						<input class="btn btn-danger" type="submit" value="Eliminar">

					</form>

				</td>
				
			</tr>

			@endforeach


		</tbody>
	</table>
</div>



<!-- Footer -->
@include('empleado.footer');