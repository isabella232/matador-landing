import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import renderTextField from '../components/forms/textBox';
import renderSelectField from '../components/forms/selectField';

const countries = require('country-list')();

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

class ST20Form extends Component {

  componentWillMount = () => {
    let cList = [];
    const countryList = countries.getNameList();
    for (const key in countryList) {
      cList.push(<MenuItem key={key} value={countryList[key]} primaryText={key.toUpperCase()} />)
    }
    this.setState({ cList })
  }

  renderRegion = () => {
    let cList = [];
    const countryList = countries.getNameList();
    for (const key in countryList) {
      cList.push(<MenuItem key={key} value={countryList[key]} primaryText={key.toUpperCase()} />)
    }
    return cList;
  }

  render() {
    const { list } = this.state;
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
          title="ST-20 Details"
          actions={actions}
          modal
          contentStyle={customContentStyle}
          open={this.props.open || false}
        >
          <form onSubmit={() => this.props.submit()}>
            <div>
              <Field
                name="ticker"
                component={renderTextField}
                label="Ticker Name"
              />
            </div>
            <br />
            <div>
              <Field
                name="supply"
                component={renderTextField}
                label="Total Supply"
              />
            </div>
            <br />
            <div>
              <Field
                name="owner"
                component={renderTextField}
                label="Owner Address"
              />
            </div>
            <br />
            <div>
              <Field
                name="jurisdiction"
                component={renderSelectField}
                label="Jurisdiction"
              >
                {list}
              </Field>
            </div>
            <br />
            <div>
              {
                <Field
                  name="jurisdiction"
                  component={renderSelectField}
                  label="Jurisdiction"
                >
                  {list}
                </Field>
              }
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}


ST20Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

ST20Form = reduxForm({
  form: 'st20Form',
  validate,
})(ST20Form);

const mapStateToProps = (state, ownProps) => ({
  formState: state.form.st20Form,  // <== Inject the form store itself
});

export default connect(mapStateToProps)(ST20Form);
