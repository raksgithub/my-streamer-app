import React from 'react';
import history from '../../history';

const renderBack = () => {
    history.goBack();
}

const StreamShow = () => {
    return (
        <div>
            StreamShow<br />
            <button onClick={renderBack} className="ui primary button">Back</button>
        </div>
    );
}

export default StreamShow;