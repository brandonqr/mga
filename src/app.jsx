// Import react
import React from 'react';
import Navbar from './componentes/Nabvar/Navbar.jsx';
import Card from './componentes/Card/Card.jsx';
import Contador from './componentes/Contador/Contador.jsx';
import Footer from './componentes/Footer/Footer.jsx';
import Team from './componentes/Team/Team.jsx';
import Formulario from './componentes/Formulario/Formulario.jsx';
// import Carrousel from './componentes/Carrousel/Carrousel.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Contador />
        <Card />
        <Team />
        <Formulario />
        <Footer />
      </div>
    );
  }
}
export default App;
