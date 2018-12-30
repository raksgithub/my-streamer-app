import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;