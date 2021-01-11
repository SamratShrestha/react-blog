import Navbar from './Navbar';
import Home from './Home';
import {ControlledForm,UncontrolledForm} from './Form';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
          <Home />
          <ControlledForm />
          <UncontrolledForm />
      </div>
    </div>
  );
}

export default App;
