import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const StreamCreate = () => {
    const renderInputElement = ({
        type, 
        input,
        label  
    }) => (
        <input 
            {...input } 
            placeholder={label} 
            type={type} 
        />
    )

    return (
        <div>
            <Field type="text" name="title" component={renderInputElement} label='title' />
            <Field type="text" name="description" component={renderInputElement} label='description' />
        </div> 
    );
}

const streamFormWrapped = reduxForm({
    form: 'streamCreateForm',
})(StreamCreate);

export default connect()(streamFormWrapped);

// earlier
// export default StreamCreate;