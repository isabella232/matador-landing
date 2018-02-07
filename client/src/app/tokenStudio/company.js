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
    'legalName',
    'type',
    'email',
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

class CompanyInfoForm extends Component {
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
                name="legalName"
                component={renderTextField}
                label="Legal Business Name"
              />
            </div>
            <br />
            <div>
              <Field
                name="type"
                component={renderSelectField}
                label="Legal Entity Type"
              >
                <MenuItem value="Corporation" primaryText="Corporation" />
                <MenuItem value="Partnership" primaryText="Partnership" />
              </Field>
            </div>
            <br />
            <div>
              <Field
                name="email"
                component={renderTextField}
                label="Primary Email"
              />
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}

CompanyInfoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

CompanyInfoForm = reduxForm({
  form: 'companyInfoForm',
  validate,
})(CompanyInfoForm);

export default CompanyInfoForm;
