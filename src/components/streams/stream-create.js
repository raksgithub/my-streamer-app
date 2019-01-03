import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../actions';
import { withRouter } from 'react-router-dom';

class StreamCreate extends React.Component {
    renderError = ({error, touched}) => {
        return (
            <div className="ui error message">
                {touched && error}
            </div>
        );
    }
    
    renderInputElement = ({
        type, 
        input,
        meta,
        label  
    }) => (
        <div className="field">
            <label>Enter {label}:{' '}</label>
            <input 
                {...input } 
                placeholder={label.toLowerCase()} 
                type={type} 
                autoComplete="off"
            />
            {this.renderError(meta)}
        </div>
    )
    
    onFormSubmit = ({ title, description }) => {
        this.props.dispatch(createStream({ title, description }));
        this.props.history.push('/');
    };
    render() {
        const { submitting, pristine, reset, handleSubmit, valid } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onFormSubmit)} className="ui form error">
                <Field 
                    type="text" 
                    name="title" 
                    component={this.renderInputElement} 
                    label='Title' 
                />
                <Field 
                    type="text" 
                    name="description" 
                    component={this.renderInputElement} 
                    label='Description' 
                />
                <button 
                    type="submit" 
                    className="ui primary button"
                    disabled={submitting || !valid}
                >
                    Create
                </button>
                <button 
                    type="button" 
                    onClick={reset} 
                    className="ui default button"
                    disabled={submitting || pristine}
                >
                    Clear Form
                </button>
            </form> 
        );
    }
}

const validate = ({ title, description }) => {
    const errors = {};
    if(!title) {
        errors.title = "Title is required";
    } else if(title.length < 4) {
        errors.title = "Title must have 4 characters";
    }  
    if(!description) {
        errors.description = "Description is required";
    } else if(description.length < 10) {
        errors.description = "Description must have 10 characters";
    }
    return errors;
}

const streamFormWrapped = reduxForm({
    form: 'streamCreateForm',
    validate
})(withRouter(StreamCreate));

export default connect(null)(streamFormWrapped);