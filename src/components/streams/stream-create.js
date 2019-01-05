import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from '../streams/stream-form';

class StreamCreate extends React.Component {
    
    onFormSubmit = ({ title, description }) => {
        this.props.dispatch(createStream({ title, description }));
    };
    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onFormSubmit} operation='Create'/>
            </div>
        );
    }
}
export default connect()(StreamCreate);