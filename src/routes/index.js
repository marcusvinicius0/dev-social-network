import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import ForgotPassword from '../Pages/ForgotPassword';

import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Configurações';
import Friends from '../Pages/Friends';

import Error from '../Pages/Error'


export default function MyRoutes(){
    return(
        <>
        <Switch>
            <Route exact path="/" component={SignIn}  />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />

            <Route exact path="/dashboard" component={Dashboard} isPrivate />
            <Route exact path="/friends" component={Friends} isPrivate />
            <Route exact path="/settings" component={Profile} isPrivate />

            <Route  path="*" component={Error} />
            
        </Switch>
        </>
    )
}