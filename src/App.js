import './App.css';
import './tailwind.css'
import {Route, BrowserRouter } from 'react-router-dom'

import Dashboard from './Pages/Dashboard/Dashboard';
import Test from './Pages/Test/Test';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/Test' component={Test}/>
    </BrowserRouter>
  );
}

export default App;
