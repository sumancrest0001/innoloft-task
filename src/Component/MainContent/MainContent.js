import React, { Component } from 'react';
import UserInformation from './UserInformation';
// import MainInformation from './MainInformation';
import './style.scss';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  validateEmail = value => {
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(value)) {
      return 'Please provide a valid email';
    }
    return undefined;
  };

  hasNumber = value => new RegExp(/[0-9]/).test(value);

  hasMixed = value => new RegExp(/[a-z]/).test(value)
    && new RegExp(/[A-Z]/).test(value)

  hasSpecial = value => new RegExp(/[!#@$%^&*)(+=._-]/).test(value)

  strengthIndicator = value => {
    let strengths = 0;
    if (value) {
      if (value.length > 5) strengths += 1;
      if (value.length > 8) strengths += 1;
      if (this.hasNumber(value)) strengths += 1;
      if (this.hasSpecial(value)) strengths += 1;
      if (this.hasMixed(value)) strengths += 1;
    }
    return strengths;
  }

  validatePassword = value => {
    if (!value || (this.strengthIndicator(value) < 3 && value.length < 5)) {
      return ('Password is too weak.');
    }
    return undefined;
  }

  validateConfirmPassword = (value, values) => {
    if (value !== values.password) {
      return 'Confirm password doesn\'t match';
    }
    return undefined;
  }

  changeTab = tabNumber => {
    this.setState({ step: tabNumber });
  }

  render() {
    const { step } = this.state;
    return (
      <div className="main-content">
        <div>
          <div className="form-tabs">
            <div role="presentation" onClick={() => this.changeTab(1)} className={step === 1 ? 'active' : null}>User information</div>
            <div role="presentation" onClick={() => this.changeTab(2)} className={step === 2 ? 'active' : null}>Additional information</div>
          </div>
        </div>
        <UserInformation
          emailValidator={this.validateEmail}
          passwordStrengthIndicator={this.strengthIndicator}
          passwordValidator={this.validatePassword}
          confirmPasswordValidator={this.validateConfirmPassword}
          moveToNext={this.changeTab}
        />
      </div>
    );
  }
}


export default MainContent;
