<!-- Header -->
@include('empleado.header')


<div class="card-header">
	<h2>Editar empleado</h2>
</div>


<div class="card-body">

	<a class="btn btn-secondary btn-sm mb-3" href="{{url('/empleado')}}">Volver</a>


	<form method="post" action="{{url('/empleado/'.$empleado->id)}}">

		{{ method_field('PATCH') }} 

		@csrf 

		@include('empleado.form', ['modo'=>'Editar'])

	</form>

</div>


<!-- Footer -->
@include('empleado.footer')