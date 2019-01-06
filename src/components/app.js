import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

// Components
import Header from './header';

// Router Components
import StreamCreate from './streams/stream-create';
import StreamDelete from './streams/stream-delete';
import StreamEdit from './streams/stream-edit';
import StreamList from './streams/stream-list';
import StreamShow from './streams/stream-show';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;