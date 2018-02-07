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
    'companyName',
    'entityType',
    'address',
    'website',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
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
                name="companyName"
                component={renderTextField}
                label="Legal Business Name"
              />
            </div>
            <br />
            <div>
              <Field
                name="entityType"
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
                name="address"
                component={renderTextField}
                label="Business Addres"
              />
            </div>
            <br />
            <div>
              <Field
                name="website"
                component={renderTextField}
                label="Business Website"
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
