import React from "react";
import PropTypes from 'prop-types';
import Notific from "./Notification.styled";

const Notification = ({message}) => {
  return (
  <Notific>There is no feedback!</Notific>
)
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
}

export default Notification
