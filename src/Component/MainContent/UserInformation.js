import React from 'react';
import {
  Form, Text,
} from 'informed';
import './style.scss';

const userInformation = ({
  emailValidator, moveToNext, passwordStrengthIndicator,
  passwordValidator, confirmPasswordValidator,
}) => {
  const onSubmit = values => {
    console.log(values);
    console.log('values are updated');
    moveToNext(2);
  };

  const renderPasswordStrength = value => {
    const strength = passwordStrengthIndicator(value);
    // eslint-disable-next-line no-nested-ternary
    const text = strength > 0 && strength < 3 ? 'weak' : strength >= 3 && strength <= 4 ? 'okey' : strength >= 5 ? 'strong' : null;
    const elementToRender = (
      <>
        <div className="progress-bar">
          <span style={{ backgroundColor: strength > 0 ? 'red' : '#d2d4d2' }} />
          <span style={{ backgroundColor: strength >= 3 ? 'orange' : '#d2d4d2' }} />
          <span style={{ backgroundColor: strength >= 5 ? '#6eeb34' : '#d2d4d2' }} />
          <small>{text}</small>
        </div>
      </>
    );
    return elementToRender;
  };

  return (
    <Form className="form" onSubmit={onSubmit}>
      {({ formState }) => (
        <div className="form-inputs">
          <Text
            className="form-input input"
            field="email"
            type="email"
            placeholder="Enter title"
            required="title required"
            validateOnBlur
            initialValue=""
            validate={emailValidator}
          />
          {formState.errors.email && <small style={{ color: 'red' }}>{formState.errors.email}</small>}
          <Text
            field="password"
            type="password"
            placeholder="Enter password"
            required="Password required"
            validateOnChange
            initialValue=""
            className="form-input input"
            validate={passwordValidator}
          />
          {formState.errors.password && <small style={{ color: 'red' }}>{formState.errors.password}</small>}
          {renderPasswordStrength(formState.values.password)}
          <Text
            field="confirmPassword"
            type="password"
            placeholder="Confirm password"
            required="confirm password required"
            validateOnBlur
            initialValue=""
            className="form-input input"
            validate={confirmPasswordValidator}
          />
          {formState.errors.confirmPassword ? <small style={{ color: 'red' }}>{formState.errors.confirmPassword}</small> : null}
          <button type="submit" className="submit-button">Submit</button>
        </div>
      )}
    </Form>
  );
};

export default userInformation;
