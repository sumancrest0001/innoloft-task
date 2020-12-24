import React from 'react';
import {
  Form, Text, Select,
} from 'informed';
import '../style.scss';

const mainInformation = ({ moveToNext }) => {
  const onSubmit = values => {
    console.log(values);
    console.log('values are updated');
    moveToNext(3);
  };

  return (
    <Form className="form" onSubmit={onSubmit}>
      {({ formState }) => (
        <div className="formInputs">
          <div>
            <Text
              className="form-input input"
              field="first"
              type="text"
              placeholder="Enter first name"
              required="First name is required"
              validateOnBlur
            />
            {formState.errors.first ? <small style={{ color: 'red' }}>{formState.errors.first}</small> : null}
          </div>
          <div>
            <Text
              className="form-input input"
              field="last"
              type="text"
              placeholder="Enter last name"
              required="Last name is required"
              validateOnBlur
            />
            {formState.errors.last ? <small style={{ color: 'red' }}>{formState.errors.last}</small> : null}
          </div>

          <div className="address">
            <div>
              <Text
                className="address__input input"
                field="street"
                type="text"
                placeholder="street"
                required="Street required"
                validateOnBlur
              />
              {formState.errors.street ? <small style={{ color: 'red' }}>{formState.errors.street}</small> : null}
            </div>
            <div>
              <Text
                className="address__input input"
                field="house"
                type="text"
                placeholder="house number"
                required="House number required"
                validateOnBlur
              />
              {formState.errors.house ? <small style={{ color: 'red' }}>{formState.errors.house}</small> : null}
            </div>
            <div>
              <Text
                className="address__input input"
                field="postalCode"
                type="text"
                placeholder="postal"
                required="Postal code required"
                validateOnBlur
              />
              {formState.errors.postalCode ? <small style={{ color: 'red' }}>{formState.errors.postalCode}</small> : null}
            </div>
            <div>
              <Select field="country" initialValue="Germany" className="address__input input">
                <option value="Germany">Germany</option>
                <option value="Austria">Austria</option>
                <option value="Switzerland">Switzerland</option>
              </Select>
            </div>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      )}
    </Form>
  );
};


export default mainInformation;
