import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/welcome/Welcome';
import Budget from '../pages/budget/Budget';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/budget/" component={Budget} />
            <Route path="/presupuesto/" component={Budget} />
            <Route path="*" component={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;