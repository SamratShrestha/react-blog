import Navbar from './Navbar';
import Home from './Home';
import {ControlledForm,UncontrolledForm} from './Form';
import Calculator from './LiftingState';
import ThinkinginReact from './ThinkinginReact';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}

];

function App() {
    return (
        <Router>
            <div className="App">
            <Navbar />
                <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                    <Route path="/blogs/:id">
                        <BlogDetails />
                    </Route>
                    <Route path="*">
                        <div>Not Found</div>
                    </Route>
                </Switch>
                { /*
                                  <ControlledForm />
                                  <UncontrolledForm />
                                  <Calculator />
                                  <ThinkinginReact products={PRODUCTS} />
                                  */
                }
                </div>
                </div>
        </Router>
    );
}

export default App;
