import { Switch, Route, BrowserRouter } from "react-router-dom";

import SignIn from "./Pages/SignIn";
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/register" component={SignUp} />

                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}