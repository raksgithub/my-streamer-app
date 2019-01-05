import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { fetchStream, updateStream } from '../../actions';

// Components
import StreamForm from '../streams/stream-form';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchStream(this.props.match.params.id));
    }

    renderBack = () => {
        history.goBack();
    }

    onFormSubmit = (formValues) => {
        console.log(formValues);
        this.props.dispatch(updateStream(this.props.stream.id, formValues));
    }

    render() {
        if(this.props.stream) {
            const {title, description} = this.props.stream;
            return (
                <div>
                    {/* <p>{this.props.stream.title}</p> */}
                    <h3>Edit the Stream</h3>
                    <StreamForm onSubmit={this.onFormSubmit} initialValues={{ title, description }} operation='Update' /><br/>
                    <button onClick={this.renderBack} className="ui primary button">Back</button>
                </div>
            );
        }
        return (
            <div>
                <p>Loading...</p>
                <button onClick={this.renderBack} className="ui primary button">Back</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps)(StreamEdit);