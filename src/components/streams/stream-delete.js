import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../../modal';
import history from '../../history';

class StreamDelete extends React.Component {
    navigateBack = () => {
        history.goBack()
    }

    onDeleteStream = () => {
        this.props.dispatch(deleteStream(this.props.stream.id));
    }

    renderActions = () => (
        <React.Fragment>
            <button onClick={this.onDeleteStream} className="ui negative button">Delete</button>
            <button onClick={this.navigateBack} className="ui button">Cancel</button>
        </React.Fragment>
    );

    componentDidMount() {
        this.props.dispatch(fetchStream(this.props.match.params.id));
    }

    renderContent = () => {
        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }
        return (
            <span>
                Are you sure you want to delete this stream with title: <strong>{this.props.stream.title}</strong>
            </span>
        );
    }

    render() {
        console.log(this.props);
        return (
            <Modal 
                header="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={this.navigateBack}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps)(StreamDelete);