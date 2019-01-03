import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { withRouter } from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchStreams());
    }

    renderStreams = () => {
        return this.props.streams.map(stream => (
            <div className="item" key={stream.id}>
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {stream.title}
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
                <button className="ui primary button" onClick={this.navigateToStreamCreate}>Add New Stream</button>
                <div className="ui celled list">
                    { this.renderStreams() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    streams: Object.values(state.streams)
});

const wrapperRouter = withRouter(StreamList);
export default connect(mapStateToProps)(wrapperRouter);