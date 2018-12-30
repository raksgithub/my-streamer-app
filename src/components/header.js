import React from 'react';
import { Link } from 'react-router-dom';

// Components
import GoogleAuth from './google-auth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">My Streamer</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
                <GoogleAuth />
            </div>
        </div>
    );
}

export default Header;