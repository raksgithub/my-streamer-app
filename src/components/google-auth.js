import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        // Load 'client:auth2' library from google gapi JS library. 
        window.gapi.load('client:auth2', () => {
            window.gapi.auth2.init({
                clientId: '653159955665-kt4p6usul5du3ug6tv3f5l4div49oupv.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.GoogleAuth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.GoogleAuth.isSignedIn.get());
                this.GoogleAuth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (amISignedIn) => {
        if(amISignedIn){
            this.props.dispatch(signIn(this.GoogleAuth.currentUser.get().getId()));
        } else {
            this.props.dispatch(signOut(null));
        }
    }

    onSignInClick = () => {
        this.GoogleAuth.signIn();
    }

    onSignOutClick = () => {
        this.GoogleAuth.signOut();
    }

    renderSignIn() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if(this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red button">
                    Sign Out&nbsp;&nbsp;
                    <i className="icon sign-out" />
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui green button">
                    <i className="icon sign-in" />
                    Sign In
                </button>
            );
        }
    }

    render() {
        return (
            <div>{ this.renderSignIn() }</div>
        );
    }
}

const mapStateToProps = (state) => ({
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
})
export default connect(mapStateToProps)(GoogleAuth);

// we are passing action creators to GoogleAuth component as props using connect function 
// this.props = { signIn, signOut }
//export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
// shorthand {signIn, signOut} === {signIn: signIn, signOut: signOut}