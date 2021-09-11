import React from 'react';
import { Link } from 'react-router-dom';


class Editar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			nombre:"",
			correo:""
		}
	}

	componentDidMount() 
	{
		let id = this.props.match.params.id;

		fetch("http://localhost:80/crud/cons-uno.php?id="+id)
		.then(resp => resp.json())
		.then(resp => {
			this.setState({
				nombre: resp['nombre'],
				correo: resp['correo']
			})
		})
	}


	cambioValor = (e) => 
	{ 
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState({ state })
	}

	editar = (e) =>
	{
		e.preventDefault();	

		const{nombre, correo} = this.state;

		var datos = { id:this.props.match.params.id, nombre:nombre, correo:correo}

		fetch("http://localhost:80/crud/editar.php", {
			method: "POST",
			body: JSON.stringify(datos)
		})
		.then(resp => resp.json())
		.then(resp => {
			this.props.history.push("/")
		})
		.catch(console.log)
	}


	render() 
	{
		const{nombre, correo} = this.state;

		return (
			<div>
				<div className="card-header">
					<h2>Editar</h2>
				</div>


				<div className="card-body">

					<Link className="btn btn-secondary btn-sm" to={"/"}>Volver</Link>

					<form className="mt-3" onSubmit={this.editar}>

						<div className="form-group">
							<label className="form-label">Nombre</label>
							<input type="text" name="nombre" id="nombre" className="form-control" onChange={this.cambioValor} value={nombre} />
						</div>

						<div className="form-group">
							<label className="form-label">Correo</label>
							<input type="email" name="correo" id="correo" className="form-control" onChange={this.cambioValor} value={correo} />
						</div>


						<button type="submit" className="btn btn-primary">Editar</button>

					</form>

				</div>
			</div>

		)
	}
		

}

export default Editar