import React from 'react';
import {
  Form, Text,
} from 'informed';

import './style.scss';

const userInformation = () => {
  const onSubmit = values => {
    console.log(values);
    console.log('values are updated');
  };

  return (
    <Form className="form" onSubmit={onSubmit}>
      {({ formState }) => (
        <div className="formInputs">
          <Text
            className="form-input input"
            field="email"
            type="email"
            placeholder="Enter title"
            required="title required"
            validateOnBlur
            initialValue=""
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
          />
          <Text
            field="confirmPassword"
            type="password"
            placeholder="Confirm password"
            required="confirm password required"
            validateOnBlur
            initialValue=""
            className="form-input input"
          />
          {formState.errors.confirmPassword ? <small style={{ color: 'red' }}>{formState.errors.confirmPassword}</small> : null}
          <button type="submit" className="submit-button">Submit</button>
        </div>
      )}
    </Form>
  );
};

export default userInformation;
