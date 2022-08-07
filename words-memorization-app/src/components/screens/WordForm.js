import React from "react";
import { Field, reduxForm } from "redux-form";

class WordForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="word" component={this.rederInput} label="Enter Word" />
        <Field
          name="meaning"
          component={this.rederInput}
          label="Enter Word's Meaning"
        />
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.word) {
    errors.word = "You must enter the Word";
  }

  if (!formValues.meaning) {
    errors.meaning = "You must the meaning";
  }

  return errors;
};
