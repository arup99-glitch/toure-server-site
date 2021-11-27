import logo from './logo.svg';
import './App.css';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Details/Details/Details';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Departments from './Pages/Home/Departments/Departments';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Header/Footer/Footer';
import Registration from './Pages/Registration/Registration';
import About from './Pages/Home/About/About';



function App() {
  return (
    <div className="App">
     <AuthProvider>

     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route path="/departments">
            <Departments></Departments>
          </Route>
          <Route path="/about">
            <About></About>
             </Route>
          <PrivateRoute path="/details/:serviceId">
            <Details></Details>
          </PrivateRoute>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

     </AuthProvider>

    </div>
  );
}

export default App;
