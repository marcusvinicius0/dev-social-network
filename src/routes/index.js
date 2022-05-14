import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import ForgotPassword from '../Pages/ForgotPassword';

import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile'
import Messages from '../Pages/Messages';
import New from '../Pages/New';
import ProfileUser from '../Pages/ProfileUser';
import Settings from '../Pages/Configuracoes';
import Followers from '../Pages/Followers';

import Error from '../Pages/Error'


export default function MyRoutes(){
    return(
        <>
        <Switch>
            <Route exact path="/" component={SignIn}  />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />

            <Route exact path="/dashboard" component={Dashboard} isPrivate />
            <Route exact path="/messages" component={Messages} isPrivate />
            <Route exact path="/profile" component={Profile} isPrivate />
            <Route exact path="/news/:id" component={New} isPrivate />
            <Route exact path="/users/:id" component={ProfileUser} isPrivate />
            <Route exact path="/settings" component={Settings} isPrivate />
            <Route exact path="/myfollowers" component={Followers} isPrivate />

            <Route  path="*" component={Error} />
            
        </Switch>
        </>
    )
}