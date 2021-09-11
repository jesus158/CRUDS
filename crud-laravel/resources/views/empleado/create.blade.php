<!-- Header -->
@include('empleado.header')



<div class="card-header">
	<h3>Registrar nuevo empleado</h3>
</div>


<div class="card-body">

	<a class="btn btn-secondary btn-sm mb-3" href="{{url('/empleado')}}">Volver</a>


	<form method="post" action="{{url('/empleado')}}">

		<!-- Incluye formulario para el registro -->
		@csrf

		@include('empleado.form', ['modo'=>'Registrar'])

	</form>

</div>



<!-- Footer -->
@include('empleado.footer');