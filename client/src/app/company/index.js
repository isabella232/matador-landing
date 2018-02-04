import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import renderRadioGroup from '../components/forms/radioGroup';
import renderCheckbox from '../components/forms/checkBox';
import renderTextField from '../components/forms/textBox';

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


class CompanyInfoForm extends Component {
  render() {
    const {
      handleSubmit, pristine, reset, submitting,
    } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={() => this.props.close()}
      />,
      <FlatButton
        label="Submit"
        primary
        onClick={this.handleClose}
      />,
    ];

    return (
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal
        open={this.props.open}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="legalName"
              component={renderTextField}
              label="Legal Business Name"
            />
          </div>
          <div>
            <Field name="Legal Entity Type" component={renderRadioGroup}>
              <RadioButton value="Corportation" label="male" />
              <RadioButton value="Partnership" label="female" />
            </Field>
          </div>          <div>
            <Field
              name="email"
              component={renderTextField}
              label="email"
            />
          </div>
          <div>
            <Field name="employed" component={renderCheckbox} label="Employed" />
          </div>
        </form>
      </Dialog>
    );
  }
}

CompanyInfoForm = reduxForm({
  form: 'companyInfoForm',
  validate,
})(CompanyInfoForm);

export default CompanyInfoForm;
