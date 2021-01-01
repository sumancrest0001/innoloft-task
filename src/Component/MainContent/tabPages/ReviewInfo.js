import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../../store/actions';
import '../style.scss';

const reviewInfo = ({ user, message, onAddMessage }) => {
  const storeMessage = displayMessage => {
    onAddMessage(displayMessage);
  };

  const fakeAjaxRequest = new Promise((resolve) => {
    setTimeout(() => {
      resolve('All your information is successfully added.');
    }, 250);
  });

  const finalSubmit = () => {
    fakeAjaxRequest.then((successMessage) => {
      storeMessage(successMessage);
      alert(message);
    });
  };


  return (
    <div>
      <div>{message}</div>
      <h1>PLease Review Your Information</h1>
      <p>First Name: <span>{user.firstName}</span></p>
      <p>First Last: <span>{user.lastName}</span></p>
      <p>Email: <span>{user.email}</span></p>
      <p>Country: <span>{user.address.country}</span></p>
      <p>Street: <span>{user.address.street}</span></p>
      <p>HouseNo: <span>{user.address.houseNo}</span></p>
      <p>Postal code: <span>{user.address.postalCode}</span></p>
      <button type="submit" className="submit-button" onClick={finalSubmit}>Submit</button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  message: state.message,
});

const mapDispatchToProps = dispatch => ({
  onAddMessage: payload => dispatch(addMessage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reviewInfo);
