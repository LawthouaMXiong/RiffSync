import React from 'react';

const ErrorMessage = ({ errorMessage }) => {
  const errorStyle = {
    textAlign: "center",
    display: "flex",
    padding: 20
};
  return <p className="message error-message" style={errorStyle}><span  aria-hidden="true"></span> {errorMessage}</p>;
}

export default ErrorMessage;