import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Consultar from './components/consultar';
import Registrar from './components/registrar';
import Editar from './components/editar';

function App() {
  return (
    <div className="App text-left">

      <nav className="navbar navbar-dark bg-dark mb-4">
         <a href="/" className="navbar-brand">CURD React</a>
      </nav>


      <div className="container">
         
         <div className="row">
    

            <div className="offset-md-1 col-md-10">
               <div className="card">
                     
                  <Router>
                     <Route exact path="/" component={Consultar}></Route>
                     <Route exact path="/editar/:id" component={Editar}></Route>
                     <Route exact path="/registrar" component={Registrar}></Route>
                  </Router>

               </div>
            </div>

         </div>

      </div>

    	
    </div>
  );
}

export default App;
