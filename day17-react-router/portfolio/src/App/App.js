import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // Link,
  // Outlet,
  // useParams,
  // NavLink,
  // useNavigate,
  // useLocation
} from 'react-router-dom';

import Root from '../components/root';
import Home from '../components/home';
import About from '../components/about';
import Services from '../components/services';
import Testimonials from '../components/testi';
import Contact from '../components/contact';
import Work from '../components/work';

class App extends Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home'/>}/>
          <Route path='/' element={<Root />}>
            <Route path='home/' element={<Home />}/>
            <Route path='about/' element={<About />} />
            <Route path='services/' element={<Services />} />
            <Route path='work/' element={<Work />} />
            <Route path='testimonials/' element={<Testimonials />} />
            <Route path='contact/' element={<Contact />} />
          </Route>
          {/* <Route path="/myapps/" element={<Navigate replace to='/learn'/>}/> */} {"  "}
        </Routes>
      </Router>
    )
  }
}

export default App;