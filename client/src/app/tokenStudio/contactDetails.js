import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import renderTextField from '../components/forms/textBox';
import renderSelectField from '../components/forms/selectField';

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'repName',
    'repTitle',
    'repEmail',
    'repPhone',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const width = window.innerWidth <= 900 ? '80%' : '30%';
const customContentStyle = {
  width: 'auto',
  maxWidth: width,
};

class ContactInfoForm extends Component {
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={() => this.props.close()}
      />,
      <RaisedButton
        label="Submit"
        primary
        onClick={() => this.props.onSubmit()}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Company Details"
          actions={actions}
          modal
          contentStyle={customContentStyle}
          open={this.props.open || false}
        >
          <form onSubmit={() => this.props.submit()}>
            <div>
              <Field
                name="repName"
                component={renderTextField}
                label="Representative Name"
              />
            </div>
            <br />
            <div>
              <Field
                name="repTitle"
                component={renderTextField}
                label="Representative Title"
              />
            </div>
            <br />
            <div>
              <Field
                name="repEmail"
                component={renderTextField}
                label="Representative Email"
              />
            </div>
            <br />
            <div>
              <Field
                name="repPhone"
                component={renderTextField}
                label="Representative Phone Number"
              />
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}

ContactInfoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

ContactInfoForm = reduxForm({
  form: 'contactInfoForm',
  validate,
})(ContactInfoForm);

export default ContactInfoForm;
