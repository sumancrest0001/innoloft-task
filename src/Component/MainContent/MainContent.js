import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInformation from './tabPages/UserInformation';
import MainInformation from './tabPages/MainInformation';
import { addUserInfo, addMainInfo } from '../../store/actions';
import ReviewInfo from './tabPages/ReviewInfo';
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

  renderForm = () => {
    const { step } = this.state;
    const { onAddMainInfo, onAddUserInfo } = this.props;
    switch (step) {
      case 1:
        return (
          <UserInformation
            emailValidator={this.validateEmail}
            passwordStrengthIndicator={this.strengthIndicator}
            passwordValidator={this.validatePassword}
            confirmPasswordValidator={this.validateConfirmPassword}
            moveToNext={this.changeTab}
            updateUserInfo={onAddUserInfo}
          />
        );
      case 2:
        return <MainInformation moveToNext={this.changeTab} updateMainInfo={onAddMainInfo} />;
      case 3:
        return <ReviewInfo />;
      default:
        return null;
    }
  }

  render() {
    const { step } = this.state;
    return (
      <div className="main-content">
        <div className="main-content__tabs">
          <div role="presentation" onClick={() => this.changeTab(1)} className={step === 1 ? 'active' : null}>User information</div>
          <div role="presentation" onClick={() => this.changeTab(2)} className={step === 2 ? 'active' : null}>Additional information</div>
        </div>
        {this.renderForm()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddUserInfo: payload => dispatch(addUserInfo(payload)),
  onAddMainInfo: payload => dispatch(addMainInfo(payload)),
});

export default connect(null, mapDispatchToProps)(MainContent);
