

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/signIn/SignIn'
import SignUp from './pages/singUp/SignUp'

function App() {
  return (
    <>
    <Router>
    <Switch>
         <Route exact path='/'>
         <SignIn />
         </Route>
         <Route  path='/signup'>
         <SignUp />
         </Route>

      </Switch>
   
    </Router>
    
    </>
  );
}

export default App;
