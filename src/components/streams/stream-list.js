import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { withRouter, Link } from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchStreams());
    }

    renderAdmin = (stream) => {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui primary button">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui negative button">Delete</Link>
                </div>
            );
        }
    }

    renderStreams = () => {
        return this.props.streams.map(stream => (
            <div className="item" key={stream.id}>
                {this.renderAdmin(stream)}
                <i className="large middle aligned icon camera" />
                <div className="content">
                    <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                    <div className="description">
                        {stream.description}
                    </div>
                </div>
            </div>
        ));
    }

    navigateToStreamCreate = () => {
        this.props.history.push('/streams/new');
    }

    render() {
        // console.log(this.props.streams);
        return (
            <div>
                <h2>Streams</h2> {' '}
                <button className="ui primary button" onClick={this.navigateToStreamCreate}>Create New Stream</button>
                <div className="ui celled list">
                    { this.renderStreams() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
});

const wrapperRouter = withRouter(StreamList);
export default connect(mapStateToProps)(wrapperRouter);