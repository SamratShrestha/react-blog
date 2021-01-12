import Navbar from './Navbar';
import Home from './Home';
import {ControlledForm,UncontrolledForm} from './Form';
import Calculator from './LiftingState';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
          <Home />
          <ControlledForm />
          <UncontrolledForm />
          <Calculator />
      </div>
    </div>
  );
}

export default App;
