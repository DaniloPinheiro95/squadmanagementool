import React from 'react';

import { Switch, Route } from 'react-router-dom';

//Páginas
import MyTeams from './pages/MyTeams';
import CreateTeam from './pages/CreateTeam';

//Rotas
export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={MyTeams} exact />
            <Route path="/time/criar" component={CreateTeam} exact />
            <Route component={() => <div>Page Not Found! 404</div>} />
        </Switch>
    )
}
