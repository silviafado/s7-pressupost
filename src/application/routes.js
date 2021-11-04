import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/welcome/Welcome';
import Budget from '../pages/budget/Budget';

// Exercise 5: Routes
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/budget/" component={Budget} />
            <Route path="*" component={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;