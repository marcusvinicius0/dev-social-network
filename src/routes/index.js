import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Configurações';

export default function MyRoutes(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn}  />
            <Route exact path="/register" component={SignUp} />

            <Route exact path="/dashboard" component={Dashboard} isPrivate />
            <Route exact path="/settings" component={Profile} isPrivate />
            
        </Switch>
    )
}