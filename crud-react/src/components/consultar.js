import React from 'react';
import { Link } from 'react-router-dom'; 

class Consultar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}

	componentDidMount() { 
		this.consTodos();
	}


	consTodos() 
	{
		fetch('http://localhost:80/crud/cons-todos.php')
		.then(resp => resp.json())
		.then(resp => this.setState({ users:resp }) )
		.then(console.log)
	}


	eliminar(id) 
	{
		fetch('http://localhost:80/crud/eliminar.php?id='+id)
		.then(resp => resp.json())
		.then(resp => {
			this.consTodos()
		})
		.catch(console.log)
	}


	render() 
	{
		const { users } = this.state;


		if(users.length > 0) // Hay registros
		{
			return (

				<div>
					<div className="card-header">
						<h2>Consultar</h2>
					</div>


					<div className="card-body">

						<div className="text-right">
							<Link className="btn  btn-secondary" to={"/registrar"}>Registrar</Link>
						</div>

						<table className="table table-bordered table-hover mt-3">
							<thead>
								<tr>
									<th>ID</th>
									<th>Nombre</th>
									<th>Correo</th>
									<th>Acciones</th>
								</tr>
							</thead>

							<tbody>
							{
								users.map(
									user => (
										<tr key={user.id}>
											<td>{user.id}</td>
											<td>{user.nombre}</td>
											<td>{user.correo}</td>
											<td>
												<Link className="btn btn-info mr-3" to={"/editar/"+user.id}>Editar</Link>
												<button className="btn btn-danger" onClick={()=>this.eliminar(user.id)}>Eliminar</button>
											</td>
										</tr>
									)
								)
							}
							</tbody>
							
						</table>

					</div>
				</div>
			);
		}else
		{
			return (
				<p>
					Por favor espere...
				</p>
			);
		}
		
	}

}

export default Consultar